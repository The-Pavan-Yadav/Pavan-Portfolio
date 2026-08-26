import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Laptop, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('wJNXJpu7hAeXNargo');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      toast.error('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_txyvszo',
        'template_lyjr3xa',
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }
      );
      
      toast.success("Message sent successfully!");
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative w-[90%] md:w-full mx-auto">
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#161B22',
            color: '#F8FAFC',
            border: '1px solid #30363D',
          },
        }}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column (40%) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
        >
          <div>
            <span className="text-[#64748B] font-mono text-[10px] md:text-xs font-semibold tracking-wider uppercase block mb-2 md:mb-4">
              05. Contact
            </span>
            <h2 className="text-[2rem] leading-none md:text-6xl font-bold text-[#F8FAFC] tracking-tight mb-4 md:mb-6">
              Get In Touch
            </h2>
            <p className="text-[#94A3B8] text-xs md:text-base leading-relaxed max-w-md">
              I'm always open to discussing new ideas, exciting projects, internship opportunities, or simply connecting with fellow developers.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 mt-2 md:mt-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#94A3B8]">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-semibold text-[#F8FAFC]">Location</span>
                <span className="text-[11px] md:text-sm text-[#94A3B8]">Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#94A3B8]">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-semibold text-[#F8FAFC]">Email</span>
                <span className="text-[11px] md:text-sm text-[#94A3B8]">thepavanyadav.co@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#94A3B8]">
                <Laptop className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-semibold text-[#F8FAFC]">Availability</span>
                <span className="text-[11px] md:text-sm text-[#94A3B8]">Available for internships & collaborations</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form (60%) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="bg-[#0D1117] border border-[#30363D] rounded-xl md:rounded-[14px] p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-5">
              <div>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Name"
                  className="w-full bg-[#0D1117] border border-[#30363D] focus:border-[#64748B] focus:outline-none text-[#F8FAFC] placeholder-[#64748B] rounded-lg px-3 md:px-4 py-2.5 md:py-3.5 text-xs md:text-sm transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Email"
                  className="w-full bg-[#0D1117] border border-[#30363D] focus:border-[#64748B] focus:outline-none text-[#F8FAFC] placeholder-[#64748B] rounded-lg px-3 md:px-4 py-2.5 md:py-3.5 text-xs md:text-sm transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full bg-[#0D1117] border border-[#30363D] focus:border-[#64748B] focus:outline-none text-[#F8FAFC] placeholder-[#64748B] rounded-lg px-3 md:px-4 py-2.5 md:py-3.5 text-xs md:text-sm transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your message..."
                  className="w-full bg-[#0D1117] border border-[#30363D] focus:border-[#64748B] focus:outline-none text-[#F8FAFC] placeholder-[#64748B] rounded-lg px-3 md:px-4 py-2.5 md:py-3.5 text-xs md:text-sm transition-all duration-300 resize-none md:rows-5"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full px-4 md:px-6 py-3 md:py-4 rounded-lg bg-black hover:bg-[#111111] border border-[#1F1F1F] text-[#F8FAFC] font-medium text-xs md:text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
