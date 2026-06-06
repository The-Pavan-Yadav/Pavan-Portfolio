import { motion } from 'motion/react';
import { Gamepad2, BrainCircuit, Globe, Code } from 'lucide-react';
import React from 'react';

const FeatureCard: React.FC<{ item: any; idx: number }> = ({ item, idx }) => {
  const Icon = item.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1), ease: "easeOut" }}
      className={`relative bg-[#08080c]/70 backdrop-blur-xl border border-white/[0.04] rounded-2xl md:rounded-[1.25rem] p-6 flex flex-col items-center justify-center text-center gap-3 transition-all duration-500 md:hover:scale-[1.02] group cursor-pointer ${item.borderHover} ${item.shadowHover}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
      <div className="relative z-10 flex flex-col items-center">
        <Icon className={`w-6 h-6 md:w-7 md:h-7 ${item.color} mb-1 transition-all duration-300 ease-out`} />
        <div>
          <h3 className="font-semibold text-slate-200 text-sm md:text-base md:group-hover:text-white transition-colors">{item.title}</h3>
          <p className="text-[10px] md:text-xs text-slate-500 font-medium mt-1">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const About = () => {
  const stats = [
    { value: "6+", label: "PROJECTS BUILT" },
    { value: "2", label: "YEARS LEARNING" },
    { value: "∞", label: "IDEAS BREWING" },
  ];

  const features = [
    { icon: Code, title: "Web Apps", desc: "Building modern experiences", color: "text-cyan-400", shadowHover: "md:hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]", borderHover: "md:hover:border-cyan-500/30" },
    { icon: Gamepad2, title: "Gaming", desc: "Competitive & creative", color: "text-purple-400", shadowHover: "md:hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]", borderHover: "md:hover:border-purple-500/30" },
    { icon: BrainCircuit, title: "AI Tools", desc: "Exploring the frontier", color: "text-emerald-400", shadowHover: "md:hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)]", borderHover: "md:hover:border-emerald-500/30" },
    { icon: Globe, title: "Interactive XP", desc: "Immersive by design", color: "text-indigo-400", shadowHover: "md:hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]", borderHover: "md:hover:border-indigo-500/30" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-12 relative z-10 w-full flex justify-center overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-5xl w-full relative z-10">
        
        {/* Label and Heading */}
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-slate-700" />
            <span className="text-slate-400 text-[10px] md:text-sm font-mono tracking-widest md:tracking-[0.3em] uppercase font-bold">About Me</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tight text-slate-100 mb-2 group">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 pr-2 pb-1 md:pb-2 drop-shadow-[0_2px_10px_rgba(168,85,247,0.2)]">Story</span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap gap-6 sm:gap-12 md:gap-24 mb-10 md:mb-16 justify-center md:justify-start"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1.5 md:gap-2 group cursor-pointer relative items-center text-center px-2 md:px-4">
              <div className="absolute inset-0 bg-cyan-400/10 blur-[20px] md:blur-[30px] scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100" />
              <span className="relative text-3xl md:text-5xl font-bold text-cyan-300 tracking-tight group-hover:text-cyan-200 transition-colors drop-shadow-[0_2px_8px_rgba(34,211,238,0.2)] group-hover:drop-shadow-[0_4px_15px_rgba(34,211,238,0.4)]">
                {stat.value}
              </span>
              <span className="relative text-[8px] sm:text-[9px] md:text-xs font-mono text-slate-500 tracking-[0.1em] uppercase font-semibold group-hover:text-slate-300 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Story Text Container */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative bg-[#08080c]/50 backdrop-blur-2xl border border-white/[0.04] rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(168,85,247,0.1),inset_0_0_30px_rgba(168,85,247,0.05)] hover:border-purple-500/20 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <p className="text-sm sm:text-base md:text-xl text-slate-200 leading-[1.8] font-medium mb-5 md:mb-8">
              I'm a <span className="text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">student developer</span> who thrives at the intersection of creativity and technology.<br className="hidden lg:block" />
              My journey started with a curiosity for how things work on the web —<br className="hidden lg:block" />
              and quickly evolved into a passion for building <span className="text-purple-400 font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">immersive digital experiences</span>.
            </p>
            
            <p className="text-xs sm:text-sm md:text-lg text-slate-400/80 leading-[1.8] font-normal group-hover:text-slate-300 transition-colors duration-500">
              Whether crafting sleek web applications, experimenting with the latest AI tools,<br className="hidden lg:block" />
              diving deep into competitive gaming, or prototyping interactive experiences —<br className="hidden lg:block" />
              I'm driven by the thrill of turning ideas into reality through code.
            </p>
          </div>
        </motion.div>

        {/* Feature Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, idx) => (
            <FeatureCard key={idx} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
