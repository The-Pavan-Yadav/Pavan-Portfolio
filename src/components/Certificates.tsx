import { motion } from 'motion/react';
import { Award, ArrowRight, Download } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  url: string;
  credentialId?: string;
  skill?: string;
}

export const Certificates = () => {
  const certificates: Certificate[] = [
    {
      id: "cert-1",
      title: "Machine Learning",
      organization: "Stanford University",
      date: "Jun 2026",
      url: "/certificates/stanford-machine-learning.pdf",
      credentialId: "5TI5TNY3X4QT",
      skill: "Machine Learning"
    },
    {
      id: "cert-2",
      title: "Google Cloud Certified Professional Architect",
      organization: "Google",
      date: "Mar 2023",
      url: "/certificates/cert-2.pdf"
    },
    {
      id: "cert-3",
      title: "Full-Stack Web Development",
      organization: "Coursera",
      date: "Dec 2022",
      url: "/certificates/cert-3.pdf"
    }
  ];

  return (
    <section id="certificates" className="py-12 md:py-24 lg:py-32 relative w-[90%] md:w-full mx-auto">
      {/* Section Header */}
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

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-5 md:p-6 flex flex-col justify-between hover:border-[#333333] transition-colors duration-300 group"
          >
            <div>
              <div className="mb-4">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-[#64748B] group-hover:text-[#F8FAFC] transition-colors duration-300" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#F8FAFC] mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-[#94A3B8] text-sm mb-1">{cert.organization}</p>
              <p className="text-[#64748B] text-xs font-mono mb-3">{cert.date}</p>
              
              {(cert.credentialId || cert.skill) && (
                <div className="flex flex-col gap-1.5 mt-4">
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                      <span className="text-[#64748B]">Credential ID:</span>
                      <span className="text-[#94A3B8] font-mono">{cert.credentialId}</span>
                    </div>
                  )}
                  {cert.skill && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-[#121212] text-[#E2E8F0] border border-[#1F1F1F]">
                        {cert.skill}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="mt-6 flex items-center gap-2">
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:border-[#333333] text-[10px] md:text-xs font-semibold transition-all duration-300"
              >
                <span>View Certificate</span>
                <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a 
                href={cert.url}
                download
                className="inline-flex items-center justify-center p-1.5 md:p-2 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1A1A1A] hover:border-[#333333] transition-all duration-300"
                title="Download Certificate"
              >
                <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
