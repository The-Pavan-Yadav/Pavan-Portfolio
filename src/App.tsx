import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Starfield } from './components/BackgroundEffects';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useCallback } from 'react';
import React from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [coords, setCoords] = useState({ x: -100, y: -100 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#050505] text-slate-50 relative selection:bg-purple-500/30 selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Neon Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-cyan-400/80 origin-left z-[60] shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 z-0 bg-[#05050a]" />

      <Starfield />

      {/* Dynamic Background Glow following mouse */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(circle 800px at ${coords.x}px ${coords.y}px, rgba(55, 48, 163, 0.15), transparent 70%)`
        }}
      />
      
      {/* Cinematic Ambient Glow Layer */}
      <div className="fixed inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] animate-[pulse_12s_ease-in-out_infinite]" />
      </div>
      
      {/* Subtle Animated Noise Overlay */}
      <div 
        className="fixed inset-0 z-[1] opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
