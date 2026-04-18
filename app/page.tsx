"use client";

import { motion, Variants } from "framer-motion";
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
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1] as const,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

// Variant for elements that animate when they come into view
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-24 lg:py-32 px-6">
        {/* Visual Sophistication: High Contrast Grid (DaisyUI Light Style) */}
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(circle_at_top_right,rgba(87,10,242,0.07)_0%,transparent_70%)]" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto"
        >
          <div className="max-w-6xl">
            {/* Eyebrow Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-block px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-8"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Policy · Technology · Data Strategy
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-10 leading-[0.9] text-foreground"
            >
              Scaling Markets <br className="hidden lg:block" />
              with{" "}
              <span className="text-primary">
                Data-Driven
              </span>{" "}
              Strategy
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-14 max-w-4xl leading-relaxed font-medium tracking-tight"
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
                className="group relative px-10 py-5 bg-primary text-primary-foreground font-bold rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-3 shadow-xl shadow-primary/20 overflow-hidden"
              >
                <span className="relative">Inquire for Consulting</span>
                <ArrowRight
                  size={20}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="https://www.bitawd.com"
                target="_blank"
                className="px-10 py-5 bg-white border border-muted hover:border-primary/50 text-foreground font-bold rounded-2xl transition-all flex items-center justify-center group shadow-sm"
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

      {/* 2. Strategic Initiatives Section */}
      <section className="container mx-auto px-6">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 space-y-4 md:space-y-0"
        >
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
              Institutional Platforms
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Strategic Initiatives
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative p-10 bg-white border border-muted rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all"
          >
            <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors hidden sm:block">
              <TrendingUp size={160} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Globe2 size={32} />
              </div>
              <h4 className="text-3xl font-bold mb-4 tracking-tight">
                Bitawd: Economic Intelligence
              </h4>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
                A high-fidelity digital twin of the Ethiopian economy. I
                architected this platform to synthesize 15+ years of
                macroeconomic indicators into institutional-grade analytical
                tools.
              </p>
              <Link
                href="https://www.bitawd.com"
                target="_blank"
                className="inline-flex items-center text-primary font-bold hover:underline text-lg group"
              >
                Access Economic Insights{" "}
                <ChevronRight
                  size={20}
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
            className="group relative p-10 bg-white border border-muted rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all"
          >
            <div className="absolute top-0 right-0 p-8 text-accent/5 group-hover:text-accent/10 transition-colors hidden sm:block">
              <ShieldCheck size={160} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                <BarChart3 size={32} />
              </div>
              <h4 className="text-3xl font-bold mb-4 tracking-tight">
                JemirUp: Data-Driven Startup Validator
              </h4>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
                An AI-based validation framework for early-stage ventures. It
                synthesizes hyper-local market data and sectoral benchmarks to
                provide data-driven go/no-go analysis for local entrepreneurs.
              </p>
              <Link
                href="https://www.jemirup.com"
                target="_blank"
                className="inline-flex items-center text-accent font-bold hover:underline text-lg group"
              >
                Validate Startup Ideas{" "}
                <ChevronRight
                  size={20}
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
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 block">
              Published Research
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Insights & Analysis
            </h3>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-primary font-bold hover:underline text-lg group tracking-tight"
          >
            View all publications{" "}
            <ArrowRight
              size={20}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: "Price Shocks & Food Security",
              desc: "Empirical analysis of food security dynamics in the face of short-term price volatility in Ethiopia.",
              tags: ["Price Analytics", "Food Security", "Volatility"],
              link: "https://link.springer.com/article/10.1007/s12571-015-0467-4",
              color: "primary"
            },
            {
              title: "Agri-Finance & Credit Access",
              desc: "Evaluating the nexus between institutional credit access and agricultural scaling in coffee-growing regions.",
              tags: ["Capital Access", "Agri-Finance", "Market Risk"],
              link: "https://eea-et.org/wp-content/uploads/2025/09/7TH_vol-II.pdf",
              color: "secondary"
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 bg-white border border-muted rounded-[2rem] hover:shadow-xl transition-all flex flex-col group"
            >
              <div className={`w-14 h-14 bg-${project.color}/10 rounded-2xl flex items-center justify-center text-${project.color} mb-8`}>
                <FileText size={32} />
              </div>
              <h4 className="text-3xl font-bold mb-4 leading-tight tracking-tight">
                {project.title}
              </h4>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed flex-grow font-medium">
                {project.desc}
              </p>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-muted">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-3 py-1 bg-muted rounded-full text-muted-foreground uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-primary hover:scale-110 transition-transform p-2 bg-white border border-muted rounded-full shadow-sm"
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
        <div className="bg-secondary/5 border-2 border-dashed border-secondary/20 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl mx-auto leading-[1.1]">
              Let’s explore how we can{" "}
              <span className="text-primary italic">work together</span>.
            </h3>
            <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              I’m always open to discussing new challenges and seeing how my
              background in economics and data systems can support your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-12 py-6 bg-secondary text-secondary-foreground font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-secondary/20 relative group"
            >
              <span className="relative">Start a Conversation</span>
              <ArrowRight
                size={22}
                className="relative group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
