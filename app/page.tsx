"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  FileText,
  ExternalLink,
  BarChart3,
} from "lucide-react";

// Refined animation variants for premium consulting feel
const baseTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

// Variant for elements that animate when they come into view
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 md:space-y-32 pb-24 md:pb-32">
      {/* 1. Premium Consulting Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden py-24 lg:py-32 px-6">
        {/* Visual Sophistication: Subtle Mesh Glow & Grid Pattern */}
        <div className="absolute inset-0 -z-10 bg-[#0a0a0a]">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto"
        >
          <div className="max-w-6xl">
            {/* Personal Greeting / Eyebrow */}
            <motion.span
              variants={itemVariants}
              className="inline-block text-primary font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
            >
              Data/AI Strategy Advisor
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-10 leading-[0.9] text-foreground"
            >
              Scaling Markets <br className="hidden lg:block" />
              with <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                Data-Driven
              </span> Strategy
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-muted-foreground mb-14 max-w-4xl leading-relaxed font-normal tracking-tight"
            >
              I bridge the gap between raw information and measurable returns
              through high-level economic insights, strategic valuation of
              information assets, and custom analytical infrastructure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
            >
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-primary/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Inquire for Consulting</span>
                <ArrowRight
                  size={20}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="https://www.bitawd.com"
                target="_blank"
                className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 text-foreground font-bold rounded-xl transition-all flex items-center justify-center group"
              >
                <span>Explore Bitawd</span>
                <ChevronRight
                  size={20}
                  className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* 2. Strategic Initiatives Section (Formerly Ventures) */}
      <section className="container mx-auto px-6">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 space-y-4 md:space-y-0"
        >
          <div>
            <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">
              Institutional Platforms
            </span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Strategic Initiatives
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative p-8 sm:p-10 bg-card border border-muted/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors hidden sm:block">
              <TrendingUp size={140} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Globe2 size={28} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                Bitawd: Economic Intelligence
              </h4>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                A high-fidelity digital twin of the Ethiopian economy. I
                architected this platform to synthesize 15+ years of
                macroeconomic indicators into institutional-grade analytical
                tools.
              </p>
              <Link
                href="https://www.bitawd.com"
                target="_blank"
                className="inline-flex items-center text-primary font-bold hover:underline text-base group"
              >
                Access Economic Insights{" "}
                <ChevronRight
                  size={18}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ...((fadeInUpVariants.visible as TargetAndTransition)
                .transition || {}),
              delay: 0.1,
            }}
            className="group relative p-8 sm:p-10 bg-card border border-muted/10 rounded-3xl overflow-hidden hover:border-accent/30 transition-all shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 text-accent/10 group-hover:text-accent/20 transition-colors hidden sm:block">
              <ShieldCheck size={140} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <BarChart3 size={28} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                JemirUp: Local Data Driven Startup Validator
              </h4>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                An AI-based validation framework for early-stage ventures. 
                It synthesizes hyper-local market data and sectoral benchmarks
                to provide data-driven go/no-go analysis for local entrepreneurs.
              </p>
              <Link
                href="https://www.jemirup.com"
                target="_blank"
                className="inline-flex items-center text-accent font-bold hover:underline text-base group"
              >
                Validate Startup Ideas{" "}
                <ChevronRight
                  size={18}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* 3. Research Projects & Articles Section */}
      <section className="container mx-auto px-6">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 space-y-4 md:space-y-0"
        >
          <div>
            <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">
              Published Research
            </span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Insights & Analysis
            </h3>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-primary font-bold hover:underline text-base group tracking-tight"
          >
            View all publications{" "}
            <ArrowRight
              size={18}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: "Price Shocks & Food Security",
              desc: "Empirical analysis of food security dynamics in the face of short-term price volatility in Ethiopia.",
              tags: ["Price Analytics", "Food Security", "Volatility modeling"],
              link: "https://link.springer.com/article/10.1007/s12571-015-0467-4",
            },
            {
              title: "Agri-Finance & Credit Access",
              desc: "Evaluating the nexus between institutional credit access and agricultural scaling in coffee-growing regions.",
              tags: ["Capital Access", "Agri-Finance", "Market Risk"],
              link: "https://eea-et.org/wp-content/uploads/2025/09/7TH_vol-II.pdf",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                ...((fadeInUpVariants.visible as TargetAndTransition)
                  .transition || {}),
                delay: i * 0.1,
              }}
              className="p-8 sm:p-10 bg-card border border-muted/10 rounded-3xl hover:border-primary/30 transition-all flex flex-col shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <FileText size={28} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight tracking-tight">
                {project.title}
              </h4>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed flex-grow">
                {project.desc}
              </p>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-muted/10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-3 py-1 bg-muted/10 rounded-full text-muted-foreground uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-primary hover:text-primary/80 transition-colors p-2 hover:bg-primary/5 rounded-full"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Final CTA */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="bg-card border border-muted/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_0%,transparent_100%)]" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              Let’s explore how we can{" "}
              <span className="text-primary">work together</span>.
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              I’m always open to discussing new challenges and seeing how my
              background in economics and data systems can support your goals.
              Feel free to reach out for a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 relative group"
            >
              <span className="relative">Get in Touch</span>
              <ArrowRight
                size={22}
                className="relative group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </motion.div>{" "}
    </div>
  );
}
