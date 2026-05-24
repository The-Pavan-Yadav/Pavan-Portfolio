import { motion, AnimatePresence } from 'motion/react';
import { Plus, BrainCircuit } from 'lucide-react';
import React, { type ReactNode, useState } from 'react';

const JSIcon = () => (
  <div className="w-8 h-8 bg-[#F7DF1E] rounded-sm drop-shadow-[0_0_10px_rgba(247,223,30,0.3)] flex justify-end items-end p-[3px] group-hover:scale-110 transition-transform duration-500">
    <span className="text-black font-extrabold text-[11px] leading-none tracking-tighter">JS</span>
  </div>
);

const ReactIcon = () => (
  <svg className="w-9 h-9 text-[#61DAFB] drop-shadow-[0_0_12px_rgba(97,218,251,0.5)] group-hover:scale-110 transition-transform duration-500" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-8 h-8 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 5.782 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 12.982 8.976 12 6.001 12z" fill="#38bdf8"/>
  </svg>
);

const TSIcon = () => (
  <div className="w-8 h-8 rounded-sm bg-[#3178C6] drop-shadow-[0_0_12px_rgba(49,120,198,0.5)] flex justify-end items-end p-[3px] group-hover:scale-110 transition-transform duration-500">
    <span className="text-white font-extrabold text-[11px] leading-none tracking-tighter">TS</span>
  </div>
);

const PythonIcon = () => (
  <svg className="w-8 h-8 drop-shadow-[0_0_12px_rgba(55,118,171,0.5)] group-hover:scale-110 transition-transform duration-500" viewBox="0 0 128 128" fill="none">
    <path fill="#3776ab" d="M64 6c-28.7 0-27.4 12.5-27.4 12.5l.2 12.8h28v4h-39s-13 .5-13 18.5 10.8 19 10.8 19h8.8v-8.8c0-10.4 8.7-18.9 19.3-18.9h19.5c6.5 0 11.5-5.1 11.5-11.6V20.3C104.2 8.7 89.2 6 64 6z"/>
    <path fill="#ffd343" d="M64.4 122.1c28.7 0 27.4-12.5 27.4-12.5l-.2-12.8h-28v-4h39s13-.5 13-18.5-10.8-19-10.8-19h-8.8v8.8c0 10.4-8.7 18.9-19.3 18.9H57.2c-6.5 0-11.5 5.1-11.5 11.6v14.2c.1 11.6 15.1 14.3 40.3 14.3z"/>
  </svg>
);

const NodeIcon = () => (
  <svg className="w-8 h-8 drop-shadow-[0_0_15px_rgba(83,158,67,0.4)] group-hover:scale-110 transition-transform duration-500" viewBox="0 0 128 128" fill="none">
    <path fill="#539E43" d="M63.8 2.2L12 32.1v59.8l51.8 29.9 51.8-29.9V32.1L63.8 2.2zM63.9 111.4L18.4 85.1V42.8L63.8 16.6l45.4 26.2v42.3L63.9 111.4z"/>
    <path fill="#539E43" d="M43.1 73l1.8-2.6c1.3.8 3.5 1.5 5.6 1.5 2.5 0 3.6-1.1 3.6-2.6 0-3.3-9.5-1.5-9.5-8.7 0-3.5 2.8-6.1 7.8-6.1 2.8 0 5.2.7 6.4 1.4L57 58.7c-1.1-.6-2.9-1.2-5-1.2-2.3 0-3.7 1-3.7 2.6 0 3 9.4 1.3 9.4 8.5 0 3.7-3 6.3-8 6.3-2.9.1-5.4-.8-6.6-1.9zm27.4 1.3c2-.6 3-1.6 3-1.6l-1.9-2.7s-.9 1-2.9 1.5c-1.8.5-4 .7-4.4-1.9h9.8v-1.6c0-4.6-2.5-7.4-7-7.4-4.8 0-8.2 3.6-8.2 9 0 5.4 3.1 9 8.2 9 1.4-.1 2.3-.3 3.4-.6zm-5-8.9c.1-1.3-1.1-2.7-3.1-2.7-2 0-3 1.5-3.1 2.7h6.2z"/>  </svg>
);

const GitIcon = () => (
   <svg className="w-8 h-8 drop-shadow-[0_0_12px_rgba(240,80,50,0.5)] group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
    <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.76 2.76c.646-.223 1.38-.078 1.896.438.708.707.708 1.853 0 2.56-.708.708-1.853.708-2.56 0-.58-.578-.69-1.428-.318-2.091l-2.613-2.614v4.542c.28.12.532.302.736.505.707.708.707 1.854 0 2.561-.708.707-1.853.707-2.56 0-.708-.707-.708-1.853 0-2.56.204-.204.455-.386.736-.506v-4.541c-.28-.119-.532-.301-.736-.505-.536-.535-.68-1.29-.404-1.942L6.103 4.29 1.163 9.229c-.603.604-.603 1.582 0 2.188l10.478 10.479c.605.603 1.583.603 2.189 0l9.716-9.716c.603-.604.603-1.582 0-2.188z"/>
  </svg>
);

const AIIcon = () => (
  <BrainCircuit className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
);

interface Skill {
  id: string;
  title: string;
  category: string;
  logo: ReactNode;
  themeColor: string;
  desc: string;
  power: number;
}

const colorThemes: Record<string, any> = {
  cyan: {
    activeCardBorder: "border-cyan-500/30 shadow-[0_15px_40px_rgba(34,211,238,0.1),inset_0_0_20px_rgba(34,211,238,0.05)] bg-[#0a0a14]/60 backdrop-blur-2xl",
    divider: "bg-cyan-900/30",
    powerText: "text-cyan-400",
    barBg: "bg-cyan-950/40",
    barFill: "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
  },
  blue: {
    activeCardBorder: "border-blue-500/30 shadow-[0_15px_40px_rgba(59,130,246,0.1),inset_0_0_20px_rgba(59,130,246,0.05)] bg-[#0a0a14]/60 backdrop-blur-2xl",
    divider: "bg-blue-900/30",
    powerText: "text-blue-400",
    barBg: "bg-blue-950/40",
    barFill: "bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
  },
  yellow: {
    activeCardBorder: "border-yellow-500/30 shadow-[0_15px_40px_rgba(234,179,8,0.1),inset_0_0_20px_rgba(234,179,8,0.05)] bg-[#0a0a14]/60 backdrop-blur-2xl",
    divider: "bg-yellow-900/30",
    powerText: "text-yellow-400",
    barBg: "bg-yellow-950/40",
    barFill: "bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.6)]"
  },
  green: {
    activeCardBorder: "border-green-500/30 shadow-[0_15px_40px_rgba(34,197,94,0.1),inset_0_0_20px_rgba(34,197,94,0.05)] bg-[#0a0a14]/60 backdrop-blur-2xl",
    divider: "bg-green-900/30",
    powerText: "text-green-400",
    barBg: "bg-green-950/40",
    barFill: "bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.6)]"
  },
  orange: {
    activeCardBorder: "border-orange-500/30 shadow-[0_15px_40px_rgba(249,115,22,0.1),inset_0_0_20px_rgba(249,115,22,0.05)] bg-[#0a0a14]/60 backdrop-blur-2xl",
    divider: "bg-orange-900/30",
    powerText: "text-orange-400",
    barBg: "bg-orange-950/40",
    barFill: "bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
  },
  purple: {
    activeCardBorder: "border-purple-500/30 shadow-[0_15px_40px_rgba(168,85,247,0.1),inset_0_0_20px_rgba(168,85,247,0.05)] bg-[#0a0a14]/60 backdrop-blur-2xl",
    divider: "bg-purple-900/30",
    powerText: "text-purple-400",
    barBg: "bg-purple-950/40",
    barFill: "bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
  }
};

const SkillCard: React.FC<{ skill: Skill; activeId: string | null; setActiveId: (id: string | null) => void; idx: number }> = ({ skill, activeId, setActiveId, idx }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isActive = activeId === skill.id;
  const theme = colorThemes[skill.themeColor];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Determine glow color based on theme
  const getGlowColor = () => {
    switch(skill.themeColor) {
      case 'yellow': return 'rgba(234,179,8,0.15)';
      case 'cyan': return 'rgba(34,211,238,0.15)';
      case 'blue': return 'rgba(59,130,246,0.15)';
      case 'green': return 'rgba(34,197,94,0.15)';
      case 'purple': return 'rgba(168,85,247,0.15)';
      case 'orange': return 'rgba(249,115,22,0.15)';
      default: return 'rgba(255,255,255,0.1)';
    }
  };

  return (
    <motion.div
      onClick={() => setActiveId(isActive ? null : skill.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden cursor-pointer rounded-2xl md:rounded-3xl border p-4 sm:p-5 md:p-6 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 md:hover:-translate-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${
        isActive 
          ? theme.activeCardBorder 
          : "bg-[#08080c]/50 backdrop-blur-2xl border-white/[0.04] hover:bg-[#08080c]/70 hover:border-white/[0.08]"
      }`}
    >
      {/* Mouse tracking glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 mix-blend-screen"
        style={{
          background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, ${getGlowColor()}, transparent 70%)`
        }}
      />
      
      {/* Dynamic Border Glow */}
      <div className={`absolute inset-0 border border-transparent rounded-3xl transition-colors duration-700 pointer-events-none z-30 ${
        isActive ? 'border-transparent' : `group-hover:border-${skill.themeColor}-500/30`
      }`} />

      {/* Subtle inner radial background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Futuristic scanning line animation inside card */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />

      <div className="flex flex-col sm:flex-row items-center sm:justify-between z-10 relative gap-3 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-center sm:text-left">
          <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.015] border border-white/5 flex items-center justify-center shadow-inner group-hover:bg-white/[0.03] group-hover:border-${skill.themeColor}-500/30 transition-all duration-500 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="scale-75 sm:scale-100 flex items-center justify-center">
              {skill.logo}
            </div>
          </div>
          <div>
            <h3 className={`text-white font-semibold text-[13px] sm:text-lg md:text-xl tracking-wide transition-all duration-300 drop-shadow-sm group-hover:text-${skill.themeColor}-400 group-hover:drop-shadow-[0_0_12px_${getGlowColor()}]`}>{skill.title}</h3>
            <div className="text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-[0.15em] font-semibold mt-1 sm:mt-1.5 transition-colors group-hover:text-slate-400">
              {skill.category}
            </div>
          </div>
        </div>
        <div className={`absolute top-0 right-0 sm:static w-5 h-5 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive ? `border-${skill.themeColor}-500/50 text-${skill.themeColor}-400 bg-${skill.themeColor}-500/10` : `border-white/5 text-slate-500 group-hover:border-${skill.themeColor}-500/40 group-hover:text-${skill.themeColor}-400 group-hover:bg-${skill.themeColor}-500/10`}`}>
          <motion.div animate={{ rotate: isActive ? 45 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: "blur(5px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden relative z-10"
          >
            <div className={`h-[1px] w-full my-4 sm:my-6 ${theme.divider}`} />
            
            <p className="text-slate-400/90 text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-8 font-sans leading-relaxed">
              {skill.desc}
            </p>
            
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <span className={`text-[8px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.15em] ${theme.powerText}`}>POWER</span>
              <span className={`text-[8px] sm:text-[10px] md:text-xs font-mono font-bold ${theme.powerText}`}>{skill.power}%</span>
            </div>
            
            <div className={`h-1.5 w-full rounded-full overflow-hidden ${theme.barBg}`}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.power}%` }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${theme.barFill} relative`}
              >
                <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export const Skills = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const skills: Skill[] = [
    { id: "js", title: "JavaScript", category: "FRONTEND", logo: <JSIcon />, themeColor: "yellow", desc: "ES2024+, async/await, DOM manipulation, functional patterns.", power: 90 },
    { id: "react", title: "React", category: "FRONTEND", logo: <ReactIcon />, themeColor: "cyan", desc: "Hooks, Context, Server Components, advanced state management.", power: 85 },
    { id: "tw", title: "Tailwind CSS", category: "FRONTEND", logo: <TailwindIcon />, themeColor: "cyan", desc: "Utility-first design, fluid typography, complex animations.", power: 95 },
    { id: "ts", title: "TypeScript", category: "FRONTEND", logo: <TSIcon />, themeColor: "blue", desc: "Strict typing, generic interfaces, utility types.", power: 80 },
    { id: "py", title: "Python", category: "BACKEND", logo: <PythonIcon />, themeColor: "blue", desc: "Data processing, script automation, backend architectures.", power: 75 },
    { id: "node", title: "Node.js", category: "BACKEND", logo: <NodeIcon />, themeColor: "green", desc: "Express, RESTful APIs, asynchronous event-driven logic.", power: 85 },
    { id: "ai", title: "AI / ML", category: "EMERGING", logo: <AIIcon />, themeColor: "purple", desc: "Prompt engineering, local LLM deployment, agentic workflows.", power: 70 },
    { id: "git", title: "Git", category: "TOOLS", logo: <GitIcon />, themeColor: "orange", desc: "Complex branching, rebase workflows, CI/CD integrations.", power: 90 },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 w-full flex justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-y-1/2" />
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen translate-y-1/2" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-slate-700" />
            <span className="text-slate-400 text-[10px] md:text-sm font-mono tracking-widest md:tracking-[0.3em] uppercase font-bold">Skills</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tight text-slate-100 mb-4 md:mb-6">
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 drop-shadow-[0_2px_10px_rgba(129,140,248,0.2)]">Matrix</span>
          </h2>
          
          <div className="font-mono text-slate-500 text-xs md:text-sm flex items-center">
            <span className="mr-2 opacity-60">//</span> Click any card to reveal power level
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={skill.id} skill={skill} activeId={activeId} setActiveId={setActiveId} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
