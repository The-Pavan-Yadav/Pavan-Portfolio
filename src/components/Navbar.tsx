import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between md:justify-start w-full md:w-auto bg-[#0A0A0A] border border-[#1F1F1F] rounded-full p-1.5 shadow-2xl">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center justify-center w-10 h-10 md:w-8 md:h-8 rounded-full hover:bg-[#1A1A1A] transition-colors ml-1"
          >
            <span className="font-sans text-[15px] md:text-[13px] font-bold tracking-tight text-[#F8FAFC]">P.</span>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-3.5 bg-[#1F1F1F] mx-3" />

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-0.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-[#F8FAFC] bg-[#1A1A1A]' 
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A1A1A]/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Divider before contact */}
          <div className="hidden md:block w-[1px] h-3.5 bg-[#1F1F1F] mx-3" />

          <a
            href="#contact"
            className="hidden md:flex px-4 py-1.5 text-[13px] font-medium text-[#F8FAFC] hover:bg-[#1A1A1A] rounded-full transition-all mr-1"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A1A1A] transition-colors mr-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] left-4 right-4 z-40 md:hidden pointer-events-auto"
          >
            <div className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl p-2 shadow-2xl flex flex-col space-y-1">
              {[...navLinks, { name: 'Contact', href: '#contact' }].map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-5 py-4 text-base font-medium rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'text-[#F8FAFC] bg-[#1A1A1A]' 
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A1A1A]/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
