import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Header */}
      <div className="mb-16 lg:mb-20">
        {/* 01. Line */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#64748B] font-mono text-sm font-semibold tracking-wider">01.</span>
          <div className="h-[1px] bg-[#1F1F1F] w-32 md:w-64"></div>
        </div>
        
        {/* Title */}
        <div className="relative inline-block mb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight flex items-center gap-3 select-none">
            <span className="text-[#F8FAFC]">About</span>
            <span className="text-[#64748B]">Me</span>
          </h2>
          {/* Decorative circle */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-[#1F1F1F] flex items-center justify-center hidden">
            <div className="w-1 h-1 rounded-full bg-[#F8FAFC]"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-[80px] items-start">
        {/* Left: Text Content */}
        <div className="space-y-6 text-[13px] sm:text-sm md:text-[15px] text-[#94A3B8] leading-relaxed">
          <p>
            I'm a Computer Science student passionate about <span className="text-[#F8FAFC] font-semibold">Full-Stack Development</span>, <span className="text-[#F8FAFC] font-semibold">Cybersecurity</span>, and <span className="text-[#F8FAFC] font-semibold">Artificial Intelligence</span>.
          </p>
          <p>
            I enjoy building modern web applications that combine clean design, performance, and security while constantly exploring new technologies and improving my skills.
          </p>
          <p>
            Outside of coding, I'm always experimenting with new ideas, learning emerging technologies, and building projects that push me to become a better developer every day.
          </p>
        </div>

        {/* Right: Terminal Window */}
        <div className="w-full">
          <div className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl overflow-hidden font-mono text-xs sm:text-[13px] shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 border-b border-[#1F1F1F] bg-[#0F0F0F]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#333333]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#333333]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#333333]"></div>
            </div>
            <div className="flex-1 text-center text-[#64748B] text-[10px] sm:text-xs">
              terminal — bash
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-5 sm:p-6 text-[#94A3B8] space-y-4 sm:space-y-5">
            <div>
              <span className="text-[#64748B]">$</span> whoami
            </div>
            
            <div className="font-semibold">
              <span className="text-[#94A3B8]">Name:</span> <span className="text-[#F8FAFC]">Pavan</span>
            </div>

            <div>
              <div className="mb-2 text-[#64748B]">Interests:</div>
              <div className="space-y-1.5 text-[#F8FAFC] font-medium">
                <div><span className="text-[#64748B] mr-2">→</span>Artificial Intelligence</div>
                <div><span className="text-[#64748B] mr-2">→</span>Full-Stack Development</div>
                <div><span className="text-[#64748B] mr-2">→</span>Cybersecurity</div>
                <div><span className="text-[#64748B] mr-2">→</span>Linux</div>
                <div><span className="text-[#64748B] mr-2">→</span>Cloud</div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-[#64748B]">Status:</div>
              <div className="text-[#F8FAFC] font-medium">Building the future... ✓</div>
            </div>

            <div className="flex items-center">
              <span className="text-[#64748B] mr-2">$</span>
              <span className="w-2.5 h-4 sm:h-5 bg-[#64748B] animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
