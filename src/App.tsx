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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty('--bg-mouse-x', `${e.clientX}px`);
    el.style.setProperty('--bg-mouse-y', `${e.clientY}px`);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#030303] text-slate-50 relative selection:bg-purple-500/30 selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Neon Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-cyan-400/80 origin-left z-[60] shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 z-0 bg-[#030303]" />

      <Starfield />

      {/* Dynamic Background Glow following mouse */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(circle 800px at var(--bg-mouse-x, -1000px) var(--bg-mouse-y, -1000px), rgba(55, 48, 163, 0.12), transparent 75%)`
        }}
      />
      
      {/* Cinematic Ambient Glow Layer */}
      <div className="fixed inset-0 z-0 opacity-35 mix-blend-screen pointer-events-none">
          <div className="absolute -top-[15%] -left-[10%] w-[65%] h-[65%] rounded-full bg-indigo-900/10 blur-[180px] animate-[pulse_9s_ease-in-out_infinite]" />
          <div className="absolute top-[45%] -right-[15%] w-[60%] h-[60%] rounded-full bg-purple-900/8 blur-[200px] animate-[pulse_11s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-[-15%] left-[15%] w-[60%] h-[50%] rounded-full bg-blue-900/8 blur-[180px] animate-[pulse_13s_ease-in-out_infinite]" />
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
