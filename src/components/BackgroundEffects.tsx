import { useEffect, useRef } from 'react';

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse/Gyro positions for smooth lerping
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (prefersReducedMotion) return;
      if (e.gamma === null || e.beta === null) return;
      
      // gamma is left/right (-90 to 90)
      // beta is front/back (-180 to 180), usually ~45 when holding device
      const gamma = e.gamma;
      const beta = e.beta - 45; 
      
      const maxTilt = 30;
      const clampedX = Math.max(-maxTilt, Math.min(maxTilt, gamma));
      const clampedY = Math.max(-maxTilt, Math.min(maxTilt, beta));
      
      // Scale tilt to a noticeable pixel shift (max ~20px star movement)
      targetMouseX = (width / 2) + (clampedX / maxTilt) * 2000;
      targetMouseY = (height / 2) + (clampedY / maxTilt) * 2000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });

    let time = 0;

    // Stars
    let stars: { x: number; y: number; size: number; alpha: number; twinkleSpeed: number; timeOffset: number }[] = [];
    const initStars = () => {
      stars = [];
      const numStars = Math.floor((width * height) / 4000); // adjust density
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          timeOffset: Math.random() * Math.PI * 2,
        });
      }
    };
    initStars();

    // Meteors
    let meteors: { x: number; y: number; length: number; speed: number; angle: number; active: boolean; life: number; maxLife: number }[] = [];
    const spawnMeteor = () => {
      if (Math.random() < 0.003 && meteors.filter(m => m.active).length < 2) {
        meteors.push({
          x: Math.random() * width * 1.2,
          y: -50,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 15 + 10,
          angle: (Math.PI / 180) * (Math.random() * 20 + 35), // angle of fall
          active: true,
          life: 0,
          maxLife: Math.random() * 100 + 50,
        });
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const render = () => {
      time += 0.05;

      // Smooth interpolation for mouse position
      currentMouseX += (targetMouseX - currentMouseX) * 0.06;
      currentMouseY += (targetMouseY - currentMouseY) * 0.06;

      // Base background: completely matte dark
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const offsetX = (currentMouseX - width / 2) * 0.02;
      const offsetY = (currentMouseY - height / 2) * 0.02;

      // Draw faint dot grid (crosshair style)
      const gridSize = 48;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      
      for (let x = (offsetX % gridSize) - gridSize; x < width; x += gridSize) {
        for (let y = (offsetY % gridSize) - gridSize; y < height; y += gridSize) {
          ctx.fillRect(x, y, 2, 2);
        }
      }

      // Draw Stars
      stars.forEach(star => {
        const twinkle = (Math.sin(time * star.twinkleSpeed + star.timeOffset) + 1) / 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * (0.3 + 0.7 * twinkle)})`;
        ctx.beginPath();
        // Slight parallax for stars
        let px = star.x + offsetX * 0.5;
        let py = star.y + offsetY * 0.5;
        // Wrap around
        px = ((px % width) + width) % width;
        py = ((py % height) + height) % height;
        
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Meteors
      spawnMeteor();
      meteors.forEach(meteor => {
        if (!meteor.active) return;
        meteor.x -= Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.life++;

        if (meteor.life >= meteor.maxLife || meteor.y > height || meteor.x < 0) {
          meteor.active = false;
          return;
        }

        const grad = ctx.createLinearGradient(
          meteor.x, meteor.y, 
          meteor.x + Math.cos(meteor.angle) * meteor.length, 
          meteor.y - Math.sin(meteor.angle) * meteor.length
        );
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x + Math.cos(meteor.angle) * meteor.length,
          meteor.y - Math.sin(meteor.angle) * meteor.length
        );
        ctx.stroke();
      });
      meteors = meteors.filter(m => m.active);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none select-none w-full h-full"
    />
  );
};
