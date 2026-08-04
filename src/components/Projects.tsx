import { motion } from 'motion/react';
import { Github, ExternalLink, Clock, MessageSquare, Activity, PenTool, Cloud, Gamepad2, Layers } from 'lucide-react';
import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: 'Live' | 'In Progress' | 'Beta';
  github: string;
  demo: string;
  previewId: string;
}

const ProjectPreview = ({ id }: { id: string }) => {
  switch (id) {
    case 'drift':
      return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center p-4">
          <div className="w-full max-w-[200px] h-[120px] bg-[#0A0A0A] rounded-lg border border-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative">
            <div className="h-6 border-b border-[#1A1A1A] flex items-center px-3 gap-1.5 bg-[#050505]">
              <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
            </div>
            <div className="flex-1 p-3 flex flex-col gap-2 relative z-10">
              <div className="w-3/4 h-6 bg-[#3B82F6]/10 rounded-tr-xl rounded-bl-xl rounded-br-xl border border-[#3B82F6]/20 self-start"></div>
              <div className="w-2/3 h-8 bg-[#121212] rounded-tl-xl rounded-bl-xl rounded-br-xl self-end mt-1"></div>
            </div>
            <MessageSquare className="absolute bottom-2 left-3 w-16 h-16 text-[#3B82F6]/5 -z-0 transform -rotate-12" />
          </div>
        </div>
      );
    case 'velocity':
      return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center p-4">
          <div className="w-full max-w-[220px] h-[120px] bg-[#0A0A0A] rounded-lg border border-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.5)] p-3 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center mb-2 z-10">
              <div className="w-16 h-2 bg-[#1A1A1A] rounded-full"></div>
              <Activity className="w-4 h-4 text-[#3B82F6]/50" />
            </div>
            <div className="flex items-end justify-between h-12 gap-1 z-10">
              {[40, 70, 45, 90, 60, 85, 30].map((h, i) => (
                <div key={i} className="w-full bg-[#121212] rounded-t-sm border border-[#1A1A1A] border-b-0" style={{ height: `${h}%` }}>
                  <div className="w-full bg-[#3B82F6]/30 rounded-t-sm" style={{ height: `${h * 0.4}%` }}></div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-0"></div>
          </div>
        </div>
      );
    case 'canvas':
      return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center p-4">
          <div className="w-full max-w-[200px] h-[120px] bg-[#050505] rounded-lg border border-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-8 h-full border-r border-[#1A1A1A] bg-[#0A0A0A] flex flex-col items-center py-2 gap-2">
              <div className="w-4 h-4 rounded bg-[#1A1A1A]"></div>
              <div className="w-4 h-4 rounded bg-[#1A1A1A]"></div>
              <div className="w-4 h-4 rounded bg-[#1A1A1A]"></div>
            </div>
            <div className="ml-8 w-full h-full p-4 relative">
              <div className="w-16 h-16 border border-[#3B82F6]/20 bg-[#3B82F6]/5 rounded-lg absolute top-4 left-6 rotate-12 flex items-center justify-center">
                 <PenTool className="w-6 h-6 text-[#3B82F6]/30" />
              </div>
              <div className="w-12 h-12 border border-[#1A1A1A] bg-[#0A0A0A] rounded-full absolute bottom-4 right-8 -rotate-6"></div>
            </div>
          </div>
        </div>
      );
    case 'weather':
      return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center p-4">
          <div className="w-full max-w-[180px] h-[130px] bg-[#0A0A0A] rounded-2xl border border-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.5)] p-4 flex flex-col items-center justify-center relative overflow-hidden">
            <Cloud className="w-12 h-12 text-[#666666] mb-2 z-10" />
            <div className="text-xl font-bold text-white z-10">72°</div>
            <div className="w-12 h-1.5 bg-[#1A1A1A] rounded-full mt-2 z-10"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#3B82F6]/5 rounded-full blur-xl z-0"></div>
          </div>
        </div>
      );
    case 'arcade':
      return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center p-4">
          <div className="w-full max-w-[200px] h-[120px] bg-[#0A0A0A] rounded-lg border border-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
            <div className="flex-1 bg-[#050505] relative flex items-center justify-center border-b border-[#1A1A1A]">
               <Gamepad2 className="w-10 h-10 text-[#1A1A1A]" />
               <div className="absolute top-2 right-2 flex gap-1">
                 <div className="w-1.5 h-1.5 bg-[#3B82F6]/40 rounded-full"></div>
                 <div className="w-1.5 h-1.5 bg-[#3B82F6]/40 rounded-full"></div>
               </div>
            </div>
            <div className="h-8 bg-[#0A0A0A] flex justify-center items-center gap-4">
              <div className="w-6 h-2 bg-[#1A1A1A] rounded-full"></div>
              <div className="w-6 h-2 bg-[#1A1A1A] rounded-full"></div>
            </div>
          </div>
        </div>
      );
    case 'chain':
      return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center p-4">
          <div className="w-full max-w-[160px] h-[160px] transform rotate-[10deg] md:rotate-[15deg]">
            <div className="grid grid-cols-3 gap-1 w-full h-full p-2 bg-[#0A0A0A] rounded-xl border border-[#1A1A1A]">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-[#050505] rounded-md border border-[#1A1A1A] flex items-center justify-center">
                   {i === 4 && <Layers className="w-5 h-5 text-[#3B82F6]/30" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    default:
      return <div className="w-full h-full bg-[#050505]"></div>;
  }
};

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Drift",
      description: "Modern realtime chat web application featuring a responsive, clean interface and Firebase-powered realtime messaging synchronization.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      previewId: "drift",
      status: "Live",
      github: "https://github.com/The-Pavan-Yadav/Drift",
      demo: "https://drift-852264470633.us-west1.run.app/"
    },
    {
      title: "Velocity X",
      description: "High-performance interactive showcase web application built for speed, responsive animations, and seamless interactive user flows.",
      tags: ["React", "Motion", "TypeScript"],
      previewId: "velocity",
      status: "Live",
      github: "https://github.com/The-Pavan-Yadav/VelocityX",
      demo: "https://velocityx-cyber.vercel.app/"
    },
    {
      title: "Canvas Craft",
      description: "Interactive canvas editor tool designed for creative layout generation with crisp, vector-based rendering capabilities.",
      tags: ["TypeScript", "Canvas API", "Tailwind CSS"],
      previewId: "canvas",
      status: "In Progress",
      github: "https://github.com/The-Pavan-Yadav/Canvas-Craft",
      demo: "soon"
    },
    {
      title: "Weather App",
      description: "Realtime meteorological forecasting application with location search, dynamic metric indicators, and clean data visualizations.",
      tags: ["React", "REST API", "Tailwind CSS"],
      previewId: "weather",
      status: "Live",
      github: "https://github.com/The-Pavan-Yadav/Weather-App",
      demo: "https://the-pavan-yadav.github.io/Weather-App/"
    },
    {
      title: "Browser Arcade Game",
      description: "Canvas-based interactive arcade browser game featuring custom physics, responsive controls, and high-score tracking.",
      tags: ["JavaScript", "HTML5 Canvas", "CSS3"],
      previewId: "arcade",
      status: "Live",
      github: "https://github.com/The-Pavan-Yadav/My-Game",
      demo: "https://the-pavan-yadav.github.io/My-Game/"
    },
    {
      title: "Chain Reaction",
      description: "Multiplayer tactical strategy game featuring realtime socket communication and interactive turn-based board mechanics.",
      tags: ["Node.js", "WebSockets", "JavaScript"],
      previewId: "chain",
      status: "Beta",
      github: "https://github.com/niharikaveeram18/Chain-Reaction-game",
      demo: "soon"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32 relative w-[90%] md:w-full mx-auto">
      {/* Section Header */}
      <div className="mb-8 md:mb-16 lg:mb-24">
        {/* 03. Line */}
        <div className="flex items-center gap-4 mb-3 md:mb-4">
          <span className="text-[#64748B] font-mono text-xs md:text-sm font-semibold tracking-wider">03.</span>
          <div className="h-[1px] bg-[#1F1F1F] w-24 md:w-32 lg:w-64"></div>
        </div>
        
        <div className="relative inline-block mb-2 md:mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight flex items-center gap-2 md:gap-3 select-none">
            <span className="text-[#F8FAFC]">Featured</span>
            <span className="text-[#64748B]">Projects</span>
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className="bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#2563EB]/30 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-[0_4px_16px_rgba(0,0,0,0.3)] md:shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:-translate-y-1"
          >
            <div>
              {/* Screenshot Container */}
              <div className="relative h-28 md:h-40 overflow-hidden bg-[#050505] border-b border-[#1A1A1A]">
                
                <div className="w-full h-full opacity-70 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-[1.02]">
                  <ProjectPreview id={project.previewId} />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 z-20">
                  <span className="inline-flex items-center gap-1 md:gap-1.5 px-1.5 py-0.5 md:px-2 rounded-md text-[8px] md:text-[9px] font-mono font-bold bg-[#000000]/90 backdrop-blur-sm border border-[#1A1A1A] text-white shadow-sm">
                    <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${
                      project.status === 'Live' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' :
                      project.status === 'In Progress' ? 'bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                    }`} />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 md:p-4 lg:p-5">
                <h3 className="text-[1.1rem] md:text-lg font-bold text-white mb-1.5 md:mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[0.8rem] md:text-xs text-[#B3B3B3] leading-relaxed mb-3 md:mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 md:gap-1.5 mb-1.5 md:mb-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[9px] md:text-[10px] font-mono px-1 md:px-1.5 py-0.5 rounded-md bg-[#000000] text-white border border-[#1A1A1A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="p-3 md:p-4 lg:p-5 pt-0 flex items-center gap-1.5 md:gap-2 mt-1 md:mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1 md:gap-1.5 px-2 py-1.5 md:px-3 md:py-1.5 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:border-[#333333] text-[11px] md:text-xs font-semibold transition-all duration-300 min-h-[44px]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>

              {project.demo === "soon" ? (
                <div className="flex-1 inline-flex items-center justify-center gap-1 md:gap-1.5 px-2 py-1.5 md:px-3 md:py-1.5 rounded-lg bg-[#0A0A0A] text-[#666666] border border-[#1A1A1A] text-[11px] md:text-xs font-medium cursor-not-allowed opacity-60 min-h-[44px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Soon</span>
                </div>
              ) : (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 md:gap-1.5 px-2 py-1.5 md:px-3 md:py-1.5 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:border-[#333333] text-[11px] md:text-xs font-semibold transition-all duration-300 min-h-[44px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
