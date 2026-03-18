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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, this would send to a backend or service
    alert(`Thank you for your inquiry, ${formData.name}. I will review your request shortly.`);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Initiate a <span className="text-primary">Strategic</span> Consultation.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how we can operationalize your data and scale your business architecture.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div {...fadeInUp}>
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Direct Channels</h3>
                <div className="space-y-6">
                  <a href="mailto:getabegaz@gmail.com" className="flex items-center space-x-4 group">
                    <div className="p-4 bg-card border border-muted/10 rounded-2xl group-hover:border-primary/50 transition-colors">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">Email</p>
                      <p className="font-bold">getabegaz@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/251911480370" target="_blank" className="flex items-center space-x-4 group">
                    <div className="p-4 bg-card border border-muted/10 rounded-2xl group-hover:border-primary/50 transition-colors">
                      <MessageSquare size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">WhatsApp</p>
                      <p className="font-bold">+251 911 480 370</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/gabegaz/" target="_blank" className="flex items-center space-x-4 group">
                    <div className="p-4 bg-card border border-muted/10 rounded-2xl group-hover:border-primary/50 transition-colors">
                      <Linkedin size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">LinkedIn</p>
                      <p className="font-bold">in/gabegaz</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Engagement Scope</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock size={18} className="text-muted-foreground mt-1" />
                    <p className="text-sm text-muted-foreground">Standard response time: 24-48 hours.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-muted-foreground mt-1" />
                    <p className="text-sm text-muted-foreground">Global availability. Base of operations: Ethiopia.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe size={18} className="text-muted-foreground mt-1" />
                    <p className="text-sm text-muted-foreground">Specialized in Ethiopian and Emerging Markets.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-card border border-muted/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-background border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@organization.com"
                      className="w-full bg-background border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Institutional or Corporate Entity"
                    className="w-full bg-background border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Nature of Inquiry</label>
                  <select 
                    className="w-full bg-background border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
                    value={formData.inquiry}
                    onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                  >
                    <option>Strategic Consulting</option>
                    <option>Data Infrastructure Audit</option>
                    <option>Market Intelligence Report</option>
                    <option>Bitawd / Startup Validator</option>
                    <option>Other / Advisory</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message / Brief</label>
                  <textarea 
                    rows={5}
                    placeholder="Provide a high-level summary of your requirements..."
                    className="w-full bg-background border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
