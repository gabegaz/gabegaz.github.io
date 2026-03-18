"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  BarChart3, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  TrendingUp, 
  Briefcase, 
  ChevronRight,
  Database,
  ArrowRight
} from "lucide-react";
import projects from "./projects_data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  // Filter and order specific projects for the "Recent Projects" sidebar
  const featuredProjectTitles = ["Data Strategy", "PyStata"];
  const featuredProjects = projects.filter(p => featuredProjectTitles.includes(p.title))
    .sort((a, b) => featuredProjectTitles.indexOf(a.title) - featuredProjectTitles.indexOf(b.title));

  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* 1. The "Dual-Core" Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Cpu size={14} />
              <span>Strategic Architecture & Market Intelligence</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              Bridging Technical Architecture and <span className="text-primary">Economic Strategy</span> to Scale Markets.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              20+ years of operationalizing data across agriculture, finance, and macroeconomic policy. 
              I build strategic systems that transform complex data into actionable institutional intelligence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group shadow-xl shadow-primary/25"
              >
                <span>Inquire for Consulting</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="https://www.bitawd.com" 
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-card border border-muted/20 hover:border-primary/50 text-foreground font-bold rounded-full transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Bitawd</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The "Ventures" Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Core Ventures</h2>
            <h3 className="text-4xl font-bold">Proof of Capability</h3>
          </div>
          <p className="text-muted-foreground max-w-md">
            Production-grade AI and data tools designed to solve high-stakes business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            {...fadeInUp}
            className="group relative p-8 bg-card border border-muted/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
              <TrendingUp size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Globe2 size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Bitawd</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Strategic Command Center for CEOs. A comprehensive data analytics platform designed to provide institutional-grade insights into market dynamics.
              </p>
              <Link href="https://www.bitawd.com" target="_blank" className="inline-flex items-center text-primary font-bold hover:underline">
                View Platform <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="group relative p-8 bg-card border border-muted/10 rounded-3xl overflow-hidden hover:border-accent/30 transition-all shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 text-accent/10 group-hover:text-accent/20 transition-colors">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Cpu size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Startup Validator</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A Data-Driven De-risking Engine. Utilizing multi-agent AI systems to validate business models against real-world economic constraints.
              </p>
              <Link href="#" className="inline-flex items-center text-accent font-bold hover:underline">
                Explore Engine <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The "Consulting Expertise" Grid */}
      <section className="bg-card/30 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Expertise</h2>
            <h3 className="text-4xl font-bold mb-6">Strategic Solutions for Business Outcomes</h3>
            <p className="text-muted-foreground text-lg">
              Leveraging decades of research and data work to build systems that help organizations navigate the complexities of emerging markets.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Database className="text-primary" />,
                title: "Data-Driven Operations",
                desc: "Optimizing internal workflows with custom analytics and automated decision pipelines."
              },
              {
                icon: <BarChart3 className="text-primary" />,
                title: "Market Intelligence",
                desc: "Deep-dive research and predictive modeling on the Ethiopian macroeconomic landscape."
              },
              {
                icon: <Cpu className="text-primary" />,
                title: "AI Integration",
                desc: "Deploying multi-agent research systems to drive institutional efficiency and de-risk growth."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-8 bg-background border border-muted/10 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-8">Ready to operationalize your data?</h3>
            <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">
              I'm available for high-impact strategic consulting.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-primary font-bold rounded-full hover:scale-105 transition-all shadow-2xl"
            >
              <span>Schedule an Executive Consultation</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
