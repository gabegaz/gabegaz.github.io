"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Linkedin, Globe, ArrowRight, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: "Strategic Consulting",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);
    
    try {
      // NOTE: Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      // You can get one for free at https://formspree.io/
      const response = await fetch("https://formspree.io/f/mwvralwb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          organization: "",
          inquiry: "Strategic Consulting",
          message: ""
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || "There was an issue submitting your inquiry. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the submission service. Please check your connection.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
              Initiate a <span className="text-primary">Strategic</span> Consultation.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how we can operationalize your data and scale your business architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">
            <div className="lg:col-span-2 space-y-10 md:space-y-12">
              <motion.div {...fadeInUp}>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Direct Channels</h3>
                <div className="space-y-4 md:space-y-6">
                  <a href="mailto:getabegaz@gmail.com" className="flex items-center space-x-4 group">
                    <div className="p-3 md:p-4 bg-card border border-muted/10 rounded-xl md:rounded-2xl group-hover:border-primary/50 transition-colors">
                      <Mail size={20} className="text-primary md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-mono">Email</p>
                      <p className="font-bold text-sm md:text-base text-balance break-all">getabegaz@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/251911480370" target="_blank" className="flex items-center space-x-4 group">
                    <div className="p-3 md:p-4 bg-card border border-muted/10 rounded-xl md:rounded-2xl group-hover:border-primary/50 transition-colors">
                      <MessageSquare size={20} className="text-primary md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-mono">WhatsApp</p>
                      <p className="font-bold text-sm md:text-base">+251 911 480 370</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/gabegaz/" target="_blank" className="flex items-center space-x-4 group">
                    <div className="p-3 md:p-4 bg-card border border-muted/10 rounded-xl md:rounded-2xl group-hover:border-primary/50 transition-colors">
                      <Linkedin size={20} className="text-primary md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-mono">LinkedIn</p>
                      <p className="font-bold text-sm md:text-base">in/gabegaz</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Engagement Scope</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Standard response time: 24-48 hours.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Global availability. Base of operations: Ethiopia.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Specialized in Ethiopian and Emerging Markets.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-card border border-muted/10 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-background border border-muted/20 rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@organization.com"
                      className="w-full bg-background border border-muted/20 rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Institutional or Corporate Entity"
                    className="w-full bg-background border border-muted/20 rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">Nature of Inquiry</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-background border border-muted/20 rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none text-sm"
                      value={formData.inquiry}
                      onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                    >
                      <option>Consulting</option>
                      <option>Bitawd Intelligence Platform</option>
                      <option>Other / Advisory</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                      <ArrowRight size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">Message / Brief</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide a high-level summary..."
                    className="w-full bg-background border border-muted/20 rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {submitted && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 font-bold text-sm text-center"
                  >
                    Message sent successfully! I will get back to you soon.
                  </motion.p>
                )}

                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 font-bold text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 bg-primary text-primary-foreground font-bold rounded-lg md:rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                  {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
