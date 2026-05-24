import { motion } from 'motion/react';
import { Mail, Github, Instagram, PhoneCall } from 'lucide-react';
import React from 'react';

const ContactCard: React.FC<{ social: any }> = ({ social }) => {
  const Icon = social.icon;
  const isHttp = social.href.startsWith('http');

  return (
    <a
      href={social.href}
      target={isHttp ? "_blank" : undefined}
      rel={isHttp ? "noopener noreferrer" : undefined}
      className={`group relative flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl md:rounded-3xl border border-white/[0.04] bg-[#08080c]/50 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] overflow-hidden ${social.glow}`}
      aria-label={social.label}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 text-slate-500 transition-all duration-300 z-10 ${social.color} ${social.dropShadow} group-hover:scale-110`} />
      <span className={`text-slate-500 text-[10px] sm:text-xs font-semibold tracking-wide transition-colors duration-500 z-10 ${social.color}`}>
        {social.label}
      </span>
    </a>
  );
};

export const Contact = () => {
  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/The-Pavan-Yadav', color: 'group-hover:text-cyan-50', glow: 'group-hover:shadow-[0_0_25px_rgba(207,250,254,0.15)] group-hover:border-cyan-100/30', dropShadow: 'group-hover:drop-shadow-[0_0_12px_rgba(207,250,254,0.6)]', rgbGlow: 'rgba(207,250,254,0.1)' },
    { icon: Mail, label: 'Email', href: 'mailto:jpavan2244@gmail.com', color: 'group-hover:text-blue-400', glow: 'group-hover:shadow-[0_0_25px_rgba(96,165,250,0.15)] group-hover:border-blue-400/30', dropShadow: 'group-hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.6)]', rgbGlow: 'rgba(96,165,250,0.1)' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'group-hover:text-fuchsia-400', glow: 'group-hover:shadow-[0_0_25px_rgba(232,121,249,0.15)] group-hover:border-fuchsia-400/30', dropShadow: 'group-hover:drop-shadow-[0_0_12px_rgba(232,121,249,0.6)]', rgbGlow: 'rgba(232,121,249,0.1)' },
    { icon: PhoneCall, label: 'Call', href: 'tel:+1234567890', color: 'group-hover:text-emerald-400', glow: 'group-hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] group-hover:border-emerald-400/30', dropShadow: 'group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]', rgbGlow: 'rgba(52,211,153,0.1)' }
  ];

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6 relative z-10 w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-900/5 to-indigo-900/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-8 md:mb-12 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-[1px] bg-slate-700" />
            <span className="text-slate-400 text-[10px] md:text-sm font-mono tracking-widest md:tracking-[0.3em] uppercase font-bold">Contact</span>
            <div className="w-8 md:w-12 h-[1px] bg-slate-700" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tight text-slate-100 mb-4 md:mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 drop-shadow-[0_2px_10px_rgba(129,140,248,0.2)]">Connect</span>
          </h2>
          
          <p className="text-slate-400/80 text-xs sm:text-sm md:text-base font-medium tracking-wide max-w-lg leading-relaxed px-4">
            Got a project idea, a collaboration in mind, or just want to say hi? Always open to new connections.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {socials.map((social, idx) => (
            <ContactCard key={idx} social={social} />
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="relative mb-16 md:mb-24 cursor-pointer inline-block"
        >
          {/* Outer glow aura for button */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur-[20px] opacity-20 group-hover:opacity-30 transition-opacity mix-blend-screen pointer-events-none" />
          
          <a 
            href="mailto:jpavan2244@gmail.com?subject=Portfolio%20Contact&body=Hi%20Pavan,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full bg-[#08080c]/50 backdrop-blur-2xl border border-white/[0.04] text-slate-200 font-bold text-xs sm:text-sm md:text-base tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-95 hover:bg-[#08080c]/70 hover:border-white/[0.08] hover:text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.15),inset_0_0_20px_rgba(255,255,255,0.03)] overflow-hidden"
          >
            {/* Animated hover shine sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-slate-400 group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_12px_rgba(129,140,248,0.8)] transition-all duration-500 group-hover:scale-110" />
            <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-500">Send a Message</span>
          </a>
        </motion.div>

        {/* Footer Area */}
        <div className="w-full pt-16 flex flex-col items-center relative">
          <div className="absolute top-0 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <div className="flex items-center gap-4 mb-6 mt-4">
            <div className="w-8 h-[1px] bg-cyan-800/60" />
            <span className="font-display font-extrabold text-xl md:text-2xl tracking-tighter text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
              P<span className="text-cyan-400">.</span>
            </span>
            <div className="w-8 h-[1px] bg-cyan-800/60" />
          </div>

          <p className="text-slate-500 text-[10px] md:text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2">
            Designed &amp; built by <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Pavan</span> <span className="text-slate-600">•</span> {new Date().getFullYear()}
          </p>
        </div>
        
      </div>
    </section>
  );
};
