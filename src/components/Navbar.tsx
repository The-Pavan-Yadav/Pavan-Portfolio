import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-0 right-0 z-[60] transition-all duration-500 flex justify-center px-4`}
      >
        <div className={`w-full max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-5 py-2.5 md:px-8 md:py-3 ${
          scrolled || isMobileMenuOpen ? 'bg-[#08080c]/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/[0.05]' : 'bg-transparent border border-transparent'
        }`}>
          <div className="flex items-center">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-extrabold text-2xl tracking-tighter cursor-pointer text-white drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">
              P<span className="text-indigo-400">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex justify-center gap-2 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => {
              const lcLink = link.toLowerCase();
              const isActive = activeSection === lcLink;
              return (
                <a
                  key={link}
                  href={`#${lcLink}`}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                    isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link}
                  {/* Animated Underline / Background Glow */}
                  <span className={`absolute inset-x-2 -bottom-0 h-[2px] bg-indigo-400/80 rounded-t-full transition-all duration-300 ease-out ${
                    isActive ? 'opacity-100 shadow-[0_0_10px_rgba(129,140,248,0.8)] scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`} />
                  {isActive && (
                    <span className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md -z-10" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex justify-end items-center gap-4">
            <a
              href="mailto:jpavan2244@gmail.com"
              className="group relative hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-slate-900/50 border border-white/10 text-slate-200 text-sm font-semibold overflow-hidden transition-all duration-500 hover:bg-slate-800 hover:border-indigo-400/50 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(129,140,248,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-x_2s_linear_infinite]" />
              <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Say Hello</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#05050a]/80 backdrop-blur-3xl md:hidden pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-8 w-full items-center">
              {links.map((link, i) => {
                const lcLink = link.toLowerCase();
                const isActive = activeSection === lcLink;
                return (
                  <motion.a
                    key={link}
                    href={`#${lcLink}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.4, ease: "easeOut" }}
                    className={`text-2xl sm:text-3xl font-display font-medium tracking-tight transition-colors flex items-center justify-center gap-3 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeMobileNav"
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" 
                      />
                    )}
                    {link}
                  </motion.a>
                );
              })}
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.5 }}
               className="mt-12 w-full flex justify-center"
            >
               <a 
                 href="mailto:jpavan2244@gmail.com"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="flex items-center justify-center max-w-[200px] w-full py-3.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold tracking-widest uppercase text-[10px] sm:text-xs hover:bg-cyan-500/20 transition-colors"
               >
                 Send a Message
               </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
