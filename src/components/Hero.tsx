import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SpaceBackground = () => {
  const [stars, setStars] = useState<{ id: number, x: number, y: number, size: number, opacity: number, duration: number, delay: number }[]>([]);
  const [meteors, setMeteors] = useState<{ id: number, top: string, left: string, duration: number, delay: number }[]>([]);
  const [dust, setDust] = useState<{ id: number, x: number, y: number, size: number, duration: number }[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 15 : 40;
    const dustCount = isMobile ? 0 : 12;

    // Generate Stars
    setStars(Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    })));

    // Generate Dust
    if (dustCount > 0) {
      setDust(Array.from({ length: dustCount }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 30 + 30, // 30-60s
      })));
    }

    // Generate Meteors
    let timeoutId: ReturnType<typeof setTimeout>;
    if (!isMobile) {
      const createMeteor = () => {
        const newMeteor = {
          id: Date.now(),
          top: Math.random() * 40 + "%", // top half
          left: Math.random() * 80 + "%",
          duration: Math.random() * 1.5 + 1.5,
          delay: Math.random() * 0.5,
        };
        setMeteors(prev => [...prev.slice(-2), newMeteor]);
        timeoutId = setTimeout(createMeteor, Math.random() * 6000 + 4000); // every 4-10s
      };
      timeoutId = setTimeout(createMeteor, 2000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Nebula Fog / Atmospheric Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-950/12 rounded-full blur-[180px] mix-blend-screen opacity-50" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-950/12 rounded-full blur-[160px] mix-blend-screen opacity-45" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-cyan-950/10 rounded-full blur-[200px] mix-blend-screen opacity-50" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
           key={`star-${star.id}`}
           className="absolute rounded-full bg-slate-200"
           style={{
             left: `${star.x}%`,
             top: `${star.y}%`,
             width: star.size,
             height: star.size,
           }}
           animate={{
             opacity: [star.opacity, star.opacity * 2.5, star.opacity],
             scale: [1, 1.2, 1]
           }}
           transition={{
             duration: star.duration,
             repeat: Infinity,
             ease: "easeInOut",
             delay: star.delay
           }}
        />
      ))}

      {/* Dust Particles */}
      {dust.length > 0 && dust.map((d) => (
        <motion.div
          key={`dust-${d.id}`}
          className="absolute rounded-full bg-indigo-300/20 blur-[1px]"
          style={{
             left: `${d.x}%`,
             top: `${d.y}%`,
             width: d.size,
             height: d.size,
          }}
          animate={{
             y: [0, -150, 0],
             x: [0, Math.random() * 100 - 50, 0],
             opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
             duration: d.duration,
             repeat: Infinity,
             ease: "linear",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((m) => (
        <motion.div
          key={`meteor-${m.id}`}
          className="absolute h-[1px] w-[150px] bg-gradient-to-r from-transparent via-cyan-300/40 to-white rounded-full blur-[0.5px]"
          style={{
            top: m.top,
            left: m.left,
            rotate: "45deg",
            transformOrigin: "left center" 
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            x: [0, 1500], 
            y: [0, 1500]
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            ease: "easeIn"
          }}
        >
          {/* Meteor Head Glow */}
          <div className="absolute top-1/2 right-0 w-[4px] h-[4px] bg-white rounded-full translate-x-1/2 -translate-y-1/2 blur-[2px] shadow-[0_0_15px_rgba(255,255,255,1)]" />
        </motion.div>
      ))}
    </div>
  );
};

export const Hero = () => {
  const titles = ["Student", "Creative Developer", "Tech Enthusiast"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < title.length) {
          setDisplayText(title.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden bg-transparent"
      style={{ perspective: "1000px" }}
    >
      <SpaceBackground />

      <motion.div 
        style={isMobile ? { transformStyle: "preserve-3d" } : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 text-center px-6 w-full flex flex-col items-center justify-center max-w-5xl mx-auto flex-1"
      >
        {/* Faint subtle atmospheric edge lighting around the center */}
        <div className="absolute inset-x-0 top-1/4 bottom-1/4 max-w-3xl mx-auto border border-white/10 rounded-[100px] blur-2xl pointer-events-none mix-blend-overlay opacity-50" />

        <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-4 md:mb-8"
          >
            <h2 className="text-slate-300 font-mono tracking-widest md:tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm">
              W E L C O M E &nbsp;TO &nbsp;M Y &nbsp;P O R T F O L I O
            </h2>
          </motion.div>
        </div>
        
        <div style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-6 md:mb-8 relative group"
          >
            {/* Cinematic Bloom/Glow Behind the Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-indigo-500/5 md:bg-indigo-500/10 blur-[40px] md:blur-[100px] rounded-full pointer-events-none mix-blend-screen transition-all duration-700 group-hover:bg-indigo-500/15 group-hover:scale-110" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-full bg-cyan-400/5 blur-[30px] md:blur-[60px] rounded-full pointer-events-none mix-blend-screen transition-all duration-700 group-hover:bg-cyan-400/10 group-hover:scale-110" />

            <h1 className="relative z-10 font-sans text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tight leading-[1.1] md:leading-none select-none flex items-center justify-center flex-wrap gap-x-2 md:gap-x-6 gap-y-1 md:gap-y-2">
              <span className="text-slate-100 drop-shadow-[0_1px_5px_rgba(255,255,255,0.05)] md:drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)] text-glow-subtle transition-all duration-300">Hi, I'm</span>
              <span className="relative inline-block">
                <div className="absolute inset-0 bg-cyan-400/5 md:bg-cyan-400/15 blur-[20px] md:blur-[40px] mix-blend-screen opacity-30 md:opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-200 to-purple-200 drop-shadow-[0_2px_8px_rgba(34,211,238,0.15)] md:drop-shadow-[0_4px_15px_rgba(34,211,238,0.3)] animate-gradient-x group-hover:drop-shadow-[0_4px_20px_rgba(34,211,238,0.4)] transition-all duration-500">
                  Pavan
                </span>
              </span>
            </h1>
          </motion.div>
        </div>
        
        <div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="flex items-center justify-center text-sm sm:text-xl md:text-2xl font-mono text-indigo-200 drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
              <span className="opacity-70 mr-2 text-indigo-400 drop-shadow-[0_0_5px_rgba(129,140,248,0.6)]">&gt;</span>
              <span className="font-semibold">{displayText}</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block w-1.5 md:w-2 md:h-5 h-3.5 bg-cyan-400 ml-1.5 opacity-80 translate-y-0.5 shadow-[0_0_8px_rgba(34,211,238,0.6)] rounded-sm" 
              />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-slate-400/70 text-xs sm:text-sm md:text-base font-normal tracking-wide mt-1 md:mt-2 px-4 leading-relaxed max-w-sm md:max-w-none text-center"
            >
              Student <span className="mx-1 md:mx-2 text-slate-600/50">•</span> Creative Developer <span className="mx-1 md:mx-2 text-slate-600/50 hidden sm:inline">•</span><br className="sm:hidden" /> Tech Enthusiast
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="relative group cursor-pointer inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[25px] rounded-full mix-blend-screen" />
          <a 
            href="#about"
            className="relative flex items-center justify-center gap-2 sm:gap-3 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border border-white/[0.04] bg-slate-900/30 backdrop-blur-xl text-slate-300 hover:border-indigo-400/40 hover:bg-slate-800/80 hover:text-white transition-all duration-500 font-medium text-xs sm:text-sm overflow-hidden hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(129,140,248,0.15),inset_0_0_10px_rgba(255,255,255,0.03)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Explore</span>
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 group-hover:translate-y-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
