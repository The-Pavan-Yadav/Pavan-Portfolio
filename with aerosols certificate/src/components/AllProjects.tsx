import { motion } from 'motion/react';
import { Github, ExternalLink, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ProjectPreview } from './Projects';

export const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
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
    <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <Link 
        to="/"
        className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
          All Projects
        </h1>
        <p className="text-[#94A3B8] text-sm md:text-base max-w-2xl">
          A complete archive of my projects, experiments, and open-source contributions.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className="bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#2563EB]/30 rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 group shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
          >
            {/* Screenshot Container */}
            <div className="relative h-24 sm:h-32 md:h-auto md:w-[320px] lg:w-[400px] shrink-0 overflow-hidden bg-[#050505] border-b md:border-b-0 md:border-r border-[#1A1A1A]">
              <div className="w-full h-full opacity-70 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-[1.02]">
                <ProjectPreview id={project.previewId} />
              </div>
              {/* Status Badge */}
              <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 z-20">
                <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 md:px-2 rounded-md text-[8px] md:text-[9px] font-mono font-bold bg-[#000000]/90 backdrop-blur-sm border border-[#1A1A1A] text-white shadow-sm">
                  <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${
                    project.status === 'Live' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' :
                    project.status === 'In Progress' ? 'bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                  }`} />
                  {project.status}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-2 sm:p-3 md:p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[10px] sm:text-xs md:text-sm text-[#B3B3B3] leading-relaxed mb-2 sm:mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2 sm:mb-3 md:mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[8px] sm:text-[9px] md:text-[10px] font-mono px-1 sm:px-1.5 py-0.5 md:px-2 md:py-1 rounded-sm md:rounded-md bg-[#121212] text-[#E2E8F0] border border-[#1F1F1F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-1 md:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md md:rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:border-[#333333] text-[9px] sm:text-[10px] md:text-xs font-semibold transition-all duration-300"
                >
                  <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  <span>Code</span>
                </a>

                {project.demo === "soon" ? (
                  <div className="flex-1 md:flex-none inline-flex items-center justify-center gap-1 md:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md md:rounded-lg bg-[#0A0A0A] text-[#666666] border border-[#1A1A1A] text-[9px] sm:text-[10px] md:text-xs font-medium cursor-not-allowed opacity-60">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    <span>Soon</span>
                  </div>
                ) : (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-1 md:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md md:rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:border-[#333333] text-[9px] sm:text-[10px] md:text-xs font-semibold transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};
