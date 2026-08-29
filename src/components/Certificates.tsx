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
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text 
      x="16" 
      y="16" 
      dy=".1em"
      fill="#E0F2FE" 
      fontSize="10" 
      fontWeight="900" 
      fontFamily="system-ui, sans-serif" 
      textAnchor="middle" 
      dominantBaseline="middle"
      letterSpacing="0.5"
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
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L2 7.6V15.3C2 22.8 8.1 29.5 16 31.4C23.9 29.5 30 22.8 30 15.3V7.6L16 2Z" fill="#C8102E"/>
    <path d="M11.5 9H20.5V12.5H15V15.5H19.5V19H15V23H11.5V9Z" fill="#FFFFFF"/>
  </svg>
);

const MatlabIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 16L16 4L29.5 16L16 28L2.5 16Z" fill="#0076A8" fillOpacity="0.1"/>
    <path d="M16 10C12 10 9 13 9 17C9 21 12 24 16 24C20 24 23 21 23 17" stroke="#D15000" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M11 15C13 13 19 13 21 15" stroke="#D15000" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

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
      id: "cert-isro",
      title: "Earth Observations and Numerical Model Applications",
      organization: "Indian Institute of Remote Sensing (IIRS), Indian Space Research Organisation (ISRO)",
      date: "Aug 2026",
      url: "/certificates/Earth observations Certificate.pdf",
      credentialId: "uhMxDyCwdK",
      skill: "Geographic Information Systems (GIS)"
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
        {certificates.map((cert, idx) => (
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
                {cert.id === "cert-isro" ? (
                  <IsroIcon className="w-5 h-5 md:w-7 md:h-7 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
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
                  {selectedCert.id === "cert-isro" ? (
                    <IsroIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
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
