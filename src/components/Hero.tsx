import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  const fullText = "> Computer Science Student • Full-Stack Developer • Cybersecurity Enthusiast";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center -mt-10">
        
        {/* Large Bold Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#FFFFFF] leading-[0.8] select-none uppercase mb-8"
        >
          PAVAN
        </motion.h1>

        {/* Typing Subtitle below title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[8px] min-[380px]:text-[9px] sm:text-[11px] md:text-[13px] text-[#94A3B8] tracking-[0.05em] sm:tracking-[0.15em] font-mono flex items-center justify-center w-full max-w-full px-2 sm:px-4 min-h-[1.5rem] leading-[1.6] sm:leading-normal"
        >
          <span className="text-center inline-flex items-center flex-wrap justify-center whitespace-normal break-words">
            {displayedText}
            <span 
              className={`inline-block w-[0.5em] h-[1.2em] bg-[#64748B] ml-1.5 align-middle ${
                isTypingComplete ? 'animate-pulse opacity-40' : ''
              }`}
              aria-hidden="true"
            />
          </span>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="px-5 py-2 rounded-full border border-[#1F1F1F] bg-[#0A0A0A] text-[10px] sm:text-xs text-[#64748B] tracking-[0.2em] uppercase font-mono flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-[#64748B]" />
            SCROLL
          </div>
        </motion.div>

      </div>
    </section>
  );
};
