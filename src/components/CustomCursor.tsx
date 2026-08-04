import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const prefersReducedMotion = useReducedMotion();
  const hoveredElementRef = useRef<HTMLElement | null>(null);

  // Create motion values for the mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringTargetX = useMotionValue(-100);
  const ringTargetY = useMotionValue(-100);

  // Smooth spring physics for the trailing ring
  // Higher stiffness and damping make it responsive while leaving a slight trail on fast movements
  const springConfig = { damping: 28, stiffness: 600, mass: 0.2 };
  
  // Use springs for the ring unless reduced motion is preferred
  const ringX = useSpring(ringTargetX, springConfig);
  const ringY = useSpring(ringTargetY, springConfig);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (hoveredElementRef.current) {
        const rect = hoveredElementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Subtle magnetic pull (pulls ring 40% towards the center of the element)
        ringTargetX.set(centerX + distanceX * 0.6);
        ringTargetY.set(centerY + distanceY * 0.6);
      } else {
        ringTargetX.set(e.clientX);
        ringTargetY.set(e.clientY);
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over an interactive element
      const interactive = 
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.group'); // Covers cards and project tiles usually marked with .group

      if (interactive) {
        setIsHovering(true);
        hoveredElementRef.current = interactive as HTMLElement;
      } else {
        setIsHovering(false);
        hoveredElementRef.current = null;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render on mobile/touch devices or if prefers reduced motion
  if (isMobile || prefersReducedMotion) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-[1.5px] border-white rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ 
          scale: { type: 'spring', stiffness: 400, damping: 25 },
          opacity: { duration: 0.2 }
        }}
      />
      
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />
    </>
  );
};
