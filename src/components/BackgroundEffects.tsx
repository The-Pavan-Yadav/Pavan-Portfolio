import { useEffect, useRef } from 'react';

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const stars: {x: number, y: number, r: number, a: number, v: number}[] = [];
    const meteors: {x: number, y: number, l: number, v: number, a: number}[] = [];

    // Initialize stars
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * w, 
            y: Math.random() * h, 
            r: Math.random() * 1.5, 
            a: Math.random(), 
            v: (Math.random() * 0.005) + 0.002
        });
    }

    let animationFrame: number;

    const render = () => {
        ctx.clearRect(0, 0, w, h);
        
        // Render stars
        stars.forEach(star => {
            star.a += star.v;
            if (star.a > 1 || star.a < 0) star.v = -star.v;
            
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.a) * 0.35})`;
            ctx.fill();
        });

        // Generate meteors occasionally
        if (Math.random() < 0.003 && meteors.length < 2) {
            meteors.push({
                x: Math.random() * w + w/2,
                y: -50,
                l: Math.random() * 100 + 50,
                v: Math.random() * 10 + 10,
                a: 0.6
            });
        }

        // Render meteors
        for (let i = meteors.length - 1; i >= 0; i--) {
            const m = meteors[i];
            m.x -= m.v;
            m.y += m.v;
            m.a -= 0.01;

            if (m.a <= 0 || m.x < -200 || m.y > h + 200) {
                meteors.splice(i, 1);
                continue;
            }

            const grad = ctx.createLinearGradient(m.x, m.y, m.x + m.l, m.y - m.l);
            grad.addColorStop(0, `rgba(255, 255, 255, ${m.a})`);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(m.x + m.l, m.y - m.l);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

        animationFrame = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    return () => {
        cancelAnimationFrame(animationFrame);
        window.removeEventListener('resize', handleResize);
    }
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-70" />;
}
