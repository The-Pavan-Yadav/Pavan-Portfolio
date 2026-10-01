import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ArrowRight, Download, X, Loader2, ArrowLeft } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const IsroIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text 
      x="24" 
      y="12" 
      dy=".1em"
      fill="#E0F2FE" 
      fontSize="16" 
      fontWeight="900" 
      fontFamily="system-ui, sans-serif" 
      textAnchor="middle" 
      dominantBaseline="middle"
      letterSpacing="1"
    >
      ISRO
    </text>
  </svg>
);

const StanfordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text 
      x="16" 
      y="16" 
      dy=".05em"
      fill="#8C1515" 
      fontSize="24" 
      fontWeight="900" 
      fontFamily="Georgia, 'Times New Roman', serif" 
      textAnchor="middle" 
      dominantBaseline="middle"
    >
      S
    </text>
  </svg>
);

const FortinetIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#EE3124" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 9.785h6.788v4.454H0zm8.666-6.33h6.668v4.453H8.666zm0 12.637h6.668v4.454H8.666zm8.522-6.307H24v4.454h-6.812zM2.792 3.455C1.372 3.814.265 5.404 0 7.425v.506h6.788V3.454zM0 16.091v.554c.24 1.926 1.276 3.466 2.624 3.9h4.188v-4.454zm24-8.184v-.506c-.265-1.998-1.372-3.587-2.792-3.972h-4.02v4.454H24zM21.376 20.57c1.324-.458 2.36-1.974 2.624-3.9v-.554h-6.812v4.454Z"/>
  </svg>
);

const MatlabIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 16L16 4L29.5 16L16 28L2.5 16Z" fill="#0076A8" fillOpacity="0.1"/>
    <path d="M16 10C12 10 9 13 9 17C9 21 12 24 16 24C20 24 23 21 23 17" stroke="#D15000" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M11 15C13 13 19 13 21 15" stroke="#D15000" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const IbmIcon = ({ className }: { className?: string }) => (
  <img src="/badges/ibm.svg" alt="IBM" className={`${className} object-contain`} />
);

const ClaudeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#D97757" xmlns="http://www.w3.org/2000/svg">
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/>
  </svg>
);

export interface BadgeItem {
  id: string;
  title: string;
  shortTitle?: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  imageUrl?: string;
}

export const initialBadges: BadgeItem[] = [
  {
    id: "badge-ai-literacy",
    title: "AI Literacy",
    shortTitle: "AI Literacy",
    issuer: "IBM SkillsBuild",
    issued: "May 31, 2026",
    imageUrl: "/badges/ai-literacy.png"
  },
  {
    id: "badge-fortinet-fundamentals",
    title: "Fortinet Cybersecurity and Cloud Fundamentals 1.0",
    shortTitle: "Fortinet Fundamentals",
    issuer: "Fortinet",
    issued: "August 11, 2026",
    imageUrl: "/badges/fortinet-fundamentals.png"
  },
  {
    id: "badge-fortinet-nse1",
    title: "Fortinet NSE 1 Certified in Cybersecurity",
    shortTitle: "Fortinet NSE 1",
    issuer: "Fortinet",
    issued: "August 2026",
    expires: "August 10, 2028",
    imageUrl: "/badges/fortinet-nse1.png"
  },
  {
    id: "badge-claude-ai-fluency",
    title: "Claude Academy: AI Fluency: Framework and foundations",
    shortTitle: "Claude AI Fluency",
    issuer: "Anthropic",
    issued: "September 2026",
    credentialId: "780d4ff687081cce5ce27a465baa8039",
    imageUrl: "/badges/claude-ai-fluency.svg"
  },
  {
    id: "badge-claude-code-action",
    title: "Claude Academy: Claude Code in action",
    shortTitle: "Claude Code Action",
    issuer: "Anthropic",
    issued: "September 2026",
    credentialId: "ed0360f3cda74f19d8a649fe60c091b7",
    imageUrl: "/badges/claude-code-action.svg"
  },
  {
    id: "badge-claude-code-101",
    title: "Claude Academy: Claude Code 101",
    shortTitle: "Claude Code 101",
    issuer: "Anthropic",
    issued: "September 2026",
    credentialId: "19aa05939da155ae570c54a0701a3d7a",
    imageUrl: "/badges/claude-code-101.svg"
  }
];

const BadgeImage = ({ badge }: { badge: BadgeItem }) => {
  const [hasError, setHasError] = useState(false);

  // Official fallback source if any specific image ever fails to load
  const fallbackSrc = badge.issuer.toLowerCase().includes('fortinet')
    ? '/badges/fortinet.svg'
    : badge.issuer.toLowerCase().includes('ibm')
    ? '/badges/ibm.svg'
    : '/badges/claude.svg';

  return (
    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 rounded md:rounded-lg bg-[#121212] border border-[#1F1F1F] p-0.5 md:p-1 flex items-center justify-center group-hover:border-[#333333] transition-colors overflow-hidden shrink-0">
      <img
        src={hasError ? fallbackSrc : (badge.imageUrl || fallbackSrc)}
        alt={badge.title}
        onError={() => setHasError(true)}
        className="max-w-full max-h-full object-contain"
        loading="eager"
      />
    </div>
  );
};

// Initialize PDF.js worker using unpkg to ensure compatibility across environments
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  url: string;
  credentialId?: string;
  skill?: string;
}

export const Certificates = ({ isArchive = false }: { isArchive?: boolean }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [pdfWidth, setPdfWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      // Calculate responsive width with some padding
      const isMobile = window.innerWidth < 768;
      const padding = 96; 
      const maxWidth = 800;
      
      if (isMobile) {
        // Render high-res on mobile to preserve sharpness; CSS handles visual scaling
        setPdfWidth(maxWidth);
      } else {
        setPdfWidth(Math.min(window.innerWidth - padding, maxWidth));
      }
    };

    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const certificates: Certificate[] = [
    {
      id: "cert-isro-aiml",
      title: "AI/ML for Geodata Analytics",
      organization: "Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO)",
      date: "Sep 2026",
      url: "/certificates/AI certificate.pdf",
      credentialId: "Puhd7YHnLM",
      skill: "AI/ML / Geodata Analytics"
    },
    {
      id: "cert-google-ai",
      title: "Google + AI + Essentials",
      organization: "Google",
      date: "Jun 2026",
      url: "/certificates/Goole AI Certificate.pdf",
      credentialId: "JEEJGXH3KLC8",
      skill: "AI Essentials"
    },
    {
      id: "cert-fortinet",
      title: "Fortinet NSE 1 Certified in Cybersecurity",
      organization: "Fortinet",
      date: "Aug 2026",
      url: "/certificates/Fortinet NSE 1 Certified in Cybersecurity.pdf",
      credentialId: "2245933868PJ",
      skill: "Cybersecurity"
    },
    {
      id: "cert-google-gen-ai",
      title: "Introduction to Generative AI Learning Path",
      organization: "Google",
      date: "Jun 2026",
      url: "/certificates/Introduction to AI GOOGLE.pdf",
      credentialId: "HOXOXOBP1W4E",
      skill: "Generative AI"
    },
    {
      id: "cert-1",
      title: "Machine Learning",
      organization: "Stanford University",
      date: "Jun 2026",
      url: "/certificates/Meachine learning stanford.pdf",
      credentialId: "5TI5TNY3X4QT",
      skill: "Machine Learning"
    },
    {
      id: "cert-isro-aerosols",
      title: "Aerosols: Measurement, Retrieval and Impacts",
      organization: "Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO)",
      date: "Jul 2026",
      url: "/certificates/Aerosols.pdf",
      credentialId: "IaphMKf&SS",
      skill: "Aerosol Science"
    },
    {
      id: "cert-isro",
      title: "Earth Observations and Numerical Model Applications",
      organization: "Indian Institute of Remote Sensing (IIRS), Indian Space Research Organisation (ISRO)",
      date: "Aug 2026",
      url: "/certificates/Earth observations Certificate.pdf",
      credentialId: "uhMxDyCwdK",
      skill: "Geographic Information Systems (GIS)"
    },
    {
      id: "cert-matlab",
      title: "MATLAB Onramp",
      organization: "MATLAB Coding",
      date: "Aug 2026",
      url: "/certificates/MATLAB Onramp certificate.pdf",
      skill: "MATLAB Coding"
    }
  ];

  return (
    <section id="certificates" className="py-12 md:py-24 lg:py-32 relative w-[90%] md:w-full mx-auto">
      {/* Section Header */}
      {isArchive ? (
        <div className="mb-10 pt-12 md:pt-24">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
            All Certificates
          </h1>
          <p className="text-[#94A3B8] text-sm md:text-base max-w-2xl">
            A complete archive of my professional certifications and learning paths.
          </p>
        </div>
      ) : (
        <div className="mb-8 md:mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <span className="text-[#64748B] font-mono text-xs md:text-sm font-semibold tracking-wider">04.</span>
            <div className="h-[1px] bg-[#1F1F1F] w-24 md:w-32 lg:w-64"></div>
          </div>
          
          <div className="relative inline-block mb-2 md:mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight flex items-center gap-2 md:gap-3 select-none">
              <span className="text-[#F8FAFC]">My</span>
              <span className="text-[#64748B]">Certificates</span>
            </h2>
          </div>
        </div>
      )}

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 max-w-[1000px] mx-auto auto-rows-fr">
        {(isArchive ? certificates : certificates.filter(c => c.id !== "cert-matlab" && c.id !== "cert-isro")).map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className={`bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-4 md:p-5 flex-col justify-between hover:border-[#333333] transition-colors duration-300 group h-full ${!isArchive && idx >= 3 ? 'hidden md:flex' : 'flex'}`}
          >
            <div>
              <div className="mb-3">
                {cert.id.startsWith("cert-isro") || cert.id === "cert-isro-aiml" ? (
                  <IsroIcon className="h-5 w-auto md:h-7 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                ) : cert.id === "cert-google-ai" || cert.id === "cert-google-gen-ai" ? (
                  <GoogleIcon className="w-5 h-5 md:w-7 md:h-7 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                ) : cert.id === "cert-1" ? (
                  <StanfordIcon className="w-5 h-5 md:w-7 md:h-7 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                ) : cert.id === "cert-matlab" ? (
                  <MatlabIcon className="w-5 h-5 md:w-7 md:h-7 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                ) : cert.id === "cert-fortinet" ? (
                  <FortinetIcon className="w-5 h-5 md:w-7 md:h-7 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                ) : (
                  <Award className="w-5 h-5 md:w-7 md:h-7 text-[#64748B] group-hover:text-[#F8FAFC] transition-colors duration-300" />
                )}
              </div>
              <h3 className="text-[15px] md:text-base font-bold text-[#F8FAFC] mb-1.5 leading-tight">
                {cert.title}
              </h3>
              <p className="text-[#94A3B8] text-xs md:text-sm mb-1">{cert.organization}</p>
              <p className="text-[#64748B] text-[11px] md:text-xs font-mono mb-2">{cert.date}</p>
              
              {(cert.credentialId || cert.skill) && (
                <div className="flex flex-col gap-1.5 mt-3">
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
                      <span className="text-[#64748B]">Credential ID:</span>
                      <span className="text-[#94A3B8] font-mono">{cert.credentialId}</span>
                    </div>
                  )}
                  {cert.skill && (
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      <span className="text-[9px] md:text-[10px] font-mono px-2 py-0.5 rounded border border-[#1F1F1F] bg-[#121212] text-[#E2E8F0]">
                        {cert.skill}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center gap-2">
              <button 
                onClick={() => setSelectedCert(cert)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-3 md:py-1.5 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:border-[#333333] text-[10px] md:text-[11px] font-semibold transition-all duration-300"
              >
                <span>View Certificate</span>
                <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
              <a 
                href={cert.url}
                download
                className="inline-flex items-center justify-center p-1.5 md:p-1.5 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1A1A1A] hover:border-[#333333] transition-all duration-300"
                title="Download Certificate"
              >
                <Download className="w-3.5 h-3.5 md:w-3.5 md:h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {!isArchive && (
        <div className="mt-8 md:mt-12 flex justify-center">
          <Link 
            to="/certificates"
            className="group px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#1F1F1F] bg-[#0A0A0A] hover:bg-[#121212] text-[8px] sm:text-[10px] text-[#64748B] hover:text-[#F8FAFC] tracking-[0.1em] sm:tracking-[0.15em] uppercase font-mono flex items-center gap-1.5 sm:gap-2 transition-all duration-300 hover:border-[#333333]"
          >
            <span>View All Certificates</span>
            <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#64748B] group-hover:text-[#F8FAFC] group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      )}

      {/* Badges Subsection */}
      <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-[#1F1F1F] max-w-[1000px] mx-auto w-full">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <span className="text-[#64748B] font-mono text-xs md:text-sm font-semibold tracking-wider">04.1</span>
            <div className="h-[1px] bg-[#1F1F1F] w-20 md:w-32 lg:w-48"></div>
          </div>
          
          <div className="relative inline-block mb-2 md:mb-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight select-none">
              <span className="text-[#F8FAFC]">Badges</span>
            </h3>
          </div>
        </div>

        {/* Badges Grid - 4 per row on mobile (2 rows for 6 badges), 3 per row on desktop */}
        <div className="grid grid-cols-4 md:grid-cols-3 gap-1 sm:gap-1.5 md:gap-3 auto-rows-fr">
          {initialBadges.map((badge, idx) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03, ease: "easeOut" }}
              className="bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#333333] rounded-md md:rounded-lg p-1 sm:p-1.5 md:p-3 flex flex-col justify-between transition-all duration-300 group shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 h-full text-center md:text-left"
            >
              <div className="flex flex-col items-center md:items-start w-full">
                {/* Top Row: Icon + Desktop Verified pill */}
                <div className="flex items-center justify-center md:justify-between w-full mb-1 md:mb-2">
                  <BadgeImage badge={badge} />
                  <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-mono border border-[#1F1F1F] bg-[#121212] text-[#94A3B8] shrink-0">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.7)]"></span>
                    Verified
                  </span>
                </div>

                {/* Badge Title: Line-clamped to 2 lines, button-sized on mobile */}
                <h4 className="text-[8.5px] sm:text-[9.5px] md:text-[12.5px] font-bold text-[#F8FAFC] leading-[1.15] md:leading-snug mb-0.5 md:mb-1 group-hover:text-[#3B82F6] transition-colors line-clamp-2 h-[20px] sm:h-[22px] md:h-auto flex items-center justify-center md:block w-full">
                  <span className="md:hidden">{badge.shortTitle || badge.title}</span>
                  <span className="hidden md:inline">{badge.title}</span>
                </h4>
                
                {/* Issuer: Short / truncated on mobile */}
                <p className="text-[#94A3B8] text-[7.5px] sm:text-[8px] md:text-[11px] mb-0 md:mb-2 font-medium truncate w-full">
                  {badge.issuer}
                </p>
              </div>

              {/* Desktop Metadata Footer - hidden on mobile */}
              <div className="hidden md:flex pt-2 border-t border-[#141414] text-[9.5px] md:text-[10px] font-mono text-[#64748B] flex-col gap-0.5 mt-auto w-full">
                <div className="flex items-center justify-between">
                  <span>Issued:</span>
                  <span className="text-[#94A3B8]">{badge.issued}</span>
                </div>
                {badge.expires && (
                  <div className="flex items-center justify-between text-amber-400/80">
                    <span>Expires:</span>
                    <span>{badge.expires}</span>
                  </div>
                )}
                {badge.credentialId && (
                  <div className="flex items-center justify-between" title={badge.credentialId}>
                    <span>ID:</span>
                    <span className="text-[#94A3B8] font-mono text-[9px] tracking-tight">{badge.credentialId.slice(0, 8)}...</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-md:h-fit max-md:max-h-[85vh] md:h-[85vh] bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-2 md:p-4 border-b border-[#1F1F1F] bg-[#050505]">
                <div className="flex items-center gap-2 md:gap-3">
                  {selectedCert.id.startsWith("cert-isro") || selectedCert.id === "cert-isro-aiml" ? (
                    <IsroIcon className="h-4 w-auto md:h-5 shrink-0" />
                  ) : selectedCert.id === "cert-google-ai" || selectedCert.id === "cert-google-gen-ai" ? (
                    <GoogleIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  ) : selectedCert.id === "cert-1" ? (
                    <StanfordIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  ) : selectedCert.id === "cert-matlab" ? (
                    <MatlabIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  ) : selectedCert.id === "cert-fortinet" ? (
                    <FortinetIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  ) : (
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-[#3B82F6] shrink-0" />
                  )}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[#F8FAFC] font-semibold text-[11px] sm:text-xs md:text-base leading-tight line-clamp-1 md:line-clamp-none">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[#64748B] text-[9px] sm:text-[10px] md:text-xs mt-0.5 md:mt-0 line-clamp-1 md:line-clamp-none">
                      {selectedCert.organization} • {selectedCert.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 ml-2 shrink-0">
                  <a
                    href={selectedCert.url}
                    download
                    className="inline-flex items-center justify-center gap-1 md:gap-1.5 px-2 py-1.5 md:px-3 md:py-1.5 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:border-[#333333] text-[10px] md:text-xs font-semibold transition-all duration-300"
                  >
                    <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1 md:p-1.5 rounded-lg hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
              
              {/* Modal Body / PDF Viewer */}
              <div className="flex-1 bg-[#121212] w-full max-md:h-fit md:h-full relative overflow-auto flex items-center justify-center max-md:p-2 md:p-8">
                <Document
                  file={selectedCert.url}
                  loading={
                    <div className="flex flex-col items-center justify-center h-full text-[#64748B] gap-3 pt-20">
                      <Loader2 className="w-8 h-8 animate-spin" />
                      <p className="text-sm">Loading certificate...</p>
                    </div>
                  }
                  error={
                    <div className="flex flex-col items-center justify-center h-full text-red-400 gap-3 pt-20 text-center px-4">
                      <p className="text-sm font-semibold">Could not load the certificate.</p>
                      <p className="text-xs text-[#94A3B8]">Please ensure the file is uploaded to the correct path.</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-xl rounded overflow-hidden max-md:!w-auto max-md:!h-auto max-md:!max-w-full max-md:!max-h-full max-md:[&>canvas]:!w-auto max-md:[&>canvas]:!h-auto max-md:[&>canvas]:!max-w-full max-md:[&>canvas]:!max-h-full max-md:[&>canvas]:!object-contain"
                    width={pdfWidth}
                  />
                </Document>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
