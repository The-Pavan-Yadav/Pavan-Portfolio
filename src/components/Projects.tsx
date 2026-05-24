import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import React from 'react';
// @ts-ignore
import VelocityXImg from '../assets/images/regenerated_image_1779624402067.png';
// @ts-ignore
import DriftImg from '../assets/images/regenerated_image_1779624653598.png';

const ProjectCard: React.FC<{ project: any; idx: number }> = ({ project, idx }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Subtle 3D tilt effect calculations
    const rotateX = ((y / rect.height) - 0.5) * -12; // max tilt 12deg
    const rotateY = ((x / rect.width) - 0.5) * 12;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      className="group relative flex flex-col bg-[#070a13]/50 backdrop-blur-2xl rounded-3xl border border-white/[0.04] overflow-hidden transition-all duration-[600ms] ease-out hover:-translate-y-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(34,211,238,0.1),0_0_20px_rgba(192,132,252,0.05),inset_0_0_2px_rgba(255,255,255,0.05)] hover:z-10"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Mouse tracking glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 mix-blend-screen"
        style={{
          background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.1), transparent 80%)`,
          transform: `translateZ(-10px)`
        }}
      />
      
      {/* Animated gradient borders on hover via pseudo-elements */}
      <div className="absolute inset-0 border border-transparent rounded-3xl group-hover:border-cyan-500/30 transition-colors duration-700 pointer-events-none z-30" />

      {/* Image Container with Parallax Zoom */}
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden border-b border-white/[0.03] bg-[#070a13] z-10" style={{ transform: "translateZ(20px)" }}>
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/[0.05] font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-slate-300 shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:border-white/20 transition-all duration-300">
          <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor} ${project.status === "Live" ? "animate-pulse" : ""}`} />
          {project.status}
        </div>
        
        {/* Soft Vignette & Overlay Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,10,19,0.8)_100%)] z-10 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
        
        {/* Subtle reflection effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-transform duration-700 z-10 -translate-y-full group-hover:translate-y-0 pointer-events-none" />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-70 group-hover:opacity-100 contrast-125 saturate-110 brightness-90 group-hover:brightness-100"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col relative z-20 bg-gradient-to-b from-transparent to-black/20" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-white mb-2 tracking-tight drop-shadow-sm group-hover:text-cyan-50 transition-colors duration-300 group-hover:drop-shadow-[0_0_15px_rgba(207,250,254,0.4)]">
          {project.title}
        </h3>
        
        <p className="text-slate-400 flex-1 text-[11px] sm:text-xs md:text-sm leading-relaxed md:leading-[1.7] font-medium mb-4 sm:mb-6 group-hover:text-slate-300 transition-colors duration-300">
          {project.description}
        </p>
        
        {/* Glowing Tech Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6 md:mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[7.5px] sm:text-[8px] md:text-[9px] font-mono font-semibold tracking-widest px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/[0.015] border border-white/5 text-slate-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all duration-300 shadow-[inset_0_0_10px_transparent] group-hover:shadow-[inset_0_0_15px_rgba(34,211,238,0.2)]">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/[0.03]">
          {project.demo === "soon" ? (
            <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-2.5 rounded-xl bg-slate-500/5 border border-slate-500/10 text-slate-400 text-[9px] sm:text-[10px] md:text-xs font-semibold opacity-70 cursor-not-allowed backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-slate-500"></span>
              </span>
              Coming Soon
            </div>
          ) : (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="relative group/btn flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] sm:text-[10px] md:text-xs font-semibold hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:text-cyan-300 transition-all duration-300 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover/btn:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-300" />
              <span className="relative z-10">Live Demo</span>
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="relative group/btn flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 text-[9px] sm:text-[10px] md:text-xs font-semibold hover:bg-white/[0.08] hover:text-white hover:border-white/30 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            <Github className="w-3 h-3 md:w-3.5 md:h-3.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover/btn:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300" />
            <span className="relative z-10">Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Drift",
      description: "Modern realtime chat web app featuring a futuristic UI and Firebase-powered realtime messaging system.",
      tags: ["REACT", "FIREBASE", "TAILWIND"],
      image: DriftImg,
      status: "Live",
      statusColor: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
      github: "https://github.com/The-Pavan-Yadav/Drift",
      demo: "https://drift-852264470633.us-west1.run.app/"
    },
    {
      title: "Velocity X",
      description: "High-speed interactive showcase and futuristic web experience with motion-heavy, immersive performance.",
      tags: ["REACT", "MOTION", "WEBGL"],
      image: VelocityXImg,
      status: "Live",
      statusColor: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]",
      github: "https://github.com/The-Pavan-Yadav/VelocityX",
      demo: "https://velocityx-cyber.vercel.app/"
    },
    {
      title: "Canvas Craft",
      description: "Creative design/canvas web application offering interactive editing tools in a clean futuristic workspace.",
      tags: ["TYPESCRIPT", "CANVAS", "FABRIC"],
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1000",
      status: "WIP",
      statusColor: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
      github: "https://github.com/The-Pavan-Yadav/Canvas-Craft",
      demo: "soon"
    },
    {
      title: "Weather App",
      description: "Modern weather forecasting app with dynamic atmospheric backgrounds and realtime data feel.",
      tags: ["REACT", "REST API", "TAILWIND"],
      image: "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&q=80&w=1000",
      status: "Live",
      statusColor: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]",
      github: "https://github.com/The-Pavan-Yadav/Weather-App",
      demo: "https://the-pavan-yadav.github.io/Weather-App/"
    },
    {
      title: "My Game",
      description: "Interactive browser game project featuring smooth gameplay animations and an arcade futuristic style.",
      tags: ["JAVASCRIPT", "HTML5", "CSS3"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
      status: "Live",
      statusColor: "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]",
      github: "https://github.com/The-Pavan-Yadav/My-Game",
      demo: "https://the-pavan-yadav.github.io/My-Game/"
    },
    {
      title: "Chain Reaction",
      description: "Multiplayer strategy reaction game utilizing a neon glowing game interface and competitive gameplay.",
      tags: ["WEBSOCKETS", "MULTIPLAYER", "NODE.JS"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      status: "Beta",
      statusColor: "bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]",
      github: "https://github.com/niharikaveeram18/Chain-Reaction-game",
      demo: "soon"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10 w-full flex justify-center overflow-hidden">
      {/* Cinematic Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen translate-x-1/3" />

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-slate-700" />
            <span className="text-slate-400 text-[10px] md:text-sm font-mono tracking-widest md:tracking-[0.3em] uppercase font-bold">Projects</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tight text-slate-100 mb-2 md:mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 drop-shadow-[0_2px_10px_rgba(168,85,247,0.2)] pb-1 md:pb-2">Work</span>
          </h2>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
