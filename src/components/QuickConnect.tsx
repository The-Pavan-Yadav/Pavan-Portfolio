import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Instagram, Phone, MessageSquare } from 'lucide-react';

export const QuickConnect = () => {
  const links = [
    {
      name: 'GitHub',
      href: 'https://github.com/The-Pavan-Yadav',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pavan-jala-a8614a322/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:jpavan2244@gmail.com',
      icon: Mail,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/',
      icon: Instagram,
    },
    {
      name: 'Call',
      href: 'tel:123456789',
      icon: Phone,
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#64748B] font-mono text-xs font-semibold tracking-wider uppercase block mb-4">
            Quick Connect
          </span>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-6 md:gap-8 w-full max-w-4xl px-2 sm:px-4"
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' && link.name !== 'Call' ? '_blank' : undefined}
                rel={link.name !== 'Email' && link.name !== 'Call' ? 'noopener noreferrer' : undefined}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="group relative flex flex-col items-center justify-center w-[65px] h-[65px] min-[380px]:w-[70px] min-[380px]:h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] bg-[#090909] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] cursor-pointer"
              >
                <div className="text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors duration-300 mb-1 min-[380px]:mb-1.5 sm:mb-3">
                  <Icon className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transform transition-transform duration-300 group-hover:scale-[1.08]" strokeWidth={1.5} />
                </div>
                <span className="text-[8px] min-[380px]:text-[9px] sm:text-xs font-medium text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors duration-300">
                  {link.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-16 sm:mt-20"
        >
          <button
            onClick={scrollToContact}
            className="group relative flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-b from-[#111111] to-[#0A0A0A] hover:from-[#1A1A1A] hover:to-[#0F0F0F] border border-white/[0.04] hover:border-white/[0.08] text-[#F8FAFC] font-medium text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          >
            <MessageSquare className="w-4 h-4 text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors duration-300" />
            <span>Send a Message</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
