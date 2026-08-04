import React from 'react';
import { motion } from 'motion/react';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiFastapi,
  SiPostgresql, SiMongodb, SiFirebase,
  SiGit, SiGithub, SiDocker, SiLinux, SiGnubash
} from 'react-icons/si';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Java', icon: FaJava, color: '#007396' },
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-10 md:py-20 relative w-[90%] md:w-full mx-auto">
      <div className="mb-6 md:mb-14">
        {/* 02. Line */}
        <div className="flex items-center gap-4 mb-3">
          <span className="text-[#64748B] font-mono text-sm font-semibold tracking-wider">02.</span>
          <div className="h-[1px] bg-[#1F1F1F] w-32 md:w-48"></div>
        </div>
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
          My Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-y-3 md:gap-y-6 items-center">
        {skillCategories.map((category, idx) => (
          <React.Fragment key={category.name}>
            {/* Category Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-[0.9rem] sm:text-xl font-semibold text-[#F8FAFC] md:pr-6"
            >
              {category.name}
            </motion.div>
            
            {/* Badges Container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-wrap gap-1.5 sm:gap-3"
            >
              {category.skills.map((skill) => {
                const Icon = skill.icon as any;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-colors cursor-default"
                  >
                    <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 flex items-center justify-center">
                      <Icon size="100%" style={{ color: skill.color }} />
                    </span>
                    <span className="text-xs sm:text-base font-medium text-[#E2E8F0] tracking-wide whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {/* 02.1 Development Environment */}
      <div className="mt-8 md:mt-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#64748B] font-mono text-xs font-semibold tracking-wider">02.1</span>
          <div className="h-[1px] bg-[#1F1F1F] w-24 md:w-32"></div>
        </div>
        
        <h3 className="text-[0.9rem] sm:text-xl md:text-2xl font-bold tracking-tight text-[#F8FAFC] mb-3 sm:mb-5 opacity-90">
          Development Environment
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-1.5 sm:gap-2.5"
        >
          {['Ubuntu', 'Kali Linux', 'VS Code', 'Git', 'GitHub', 'Docker', 'Firebase', 'Vercel', 'Postman'].map((item) => (
            <div
              key={item}
              className="flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-full bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors cursor-default"
            >
              <span className="text-[10px] sm:text-sm font-medium text-[#94A3B8] tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 02.2 Currently Exploring */}
      <div className="mt-8 md:mt-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#64748B] font-mono text-xs font-semibold tracking-wider">02.2</span>
          <div className="h-[1px] bg-[#1F1F1F] w-24 md:w-32"></div>
        </div>
        
        <h3 className="text-[0.9rem] sm:text-xl md:text-2xl font-bold tracking-tight text-[#F8FAFC] mb-3 sm:mb-5 opacity-90">
          Currently Exploring
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-1.5 sm:gap-2.5"
        >
          {['Full-Stack Development', 'Cybersecurity', 'Artificial Intelligence', 'Cloud Computing', 'React', 'Next.js', 'Node.js', 'UI/UX', 'Open Source'].map((item) => (
            <div
              key={item}
              className="flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-full bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors cursor-default"
            >
              <span className="text-[10px] sm:text-sm font-medium text-[#94A3B8] tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

