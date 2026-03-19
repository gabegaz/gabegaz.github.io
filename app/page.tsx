"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Globe2,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  FileText,
  ExternalLink,
  BarChart3,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="flex flex-col space-y-16 md:space-y-24 pb-16 md:pb-24">
      {/* 1. The "Dual-Core" Hero Section - Updated for Full Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-12 lg:py-24 px-4 sm:px-6 pt-12 md:pt-4 lg:pt-4 pb-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]"
            >
              Scaling <span className="text-primary">Markets</span> with
              Data-Driven <span className="text-primary">Strategy</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl leading-relaxed"
            >
              Bridging technical architecture and economic insights to build
              scalable risk-mitigation systems and drive financial inclusion across emerging markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group shadow-xl shadow-primary/25 text-sm sm:text-base"
              >
                <span>Inquire for Consulting</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="https://www.bitawd.com"
                target="_blank"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-card border border-muted/20 hover:border-primary/50 text-foreground font-bold rounded-full transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Explore Bitawd</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Strategic Initiatives Section (Formerly Ventures) */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 space-y-4 md:space-y-0">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Strategic Initiatives
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            {...fadeInUp}
            className="group relative p-6 sm:p-8 bg-card border border-muted/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-primary/30 transition-all shadow-sm"
          >
            <div className="absolute top-0 right-0 p-4 sm:p-8 text-primary/10 group-hover:text-primary/20 transition-colors hidden sm:block">
              <TrendingUp size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center text-primary mb-4 sm:mb-6">
                <Globe2 size={24} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Bitawd: Strategic Intelligence
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                A personal initiative to digitize and decode the Ethiopian economy. I architected this 
                platform to transform 15 years of macroeconomic data into a cohesive analytical tool.
              </p>
              <Link
                href="https://www.bitawd.com"
                target="_blank"
                className="inline-flex items-center text-primary font-bold hover:underline text-sm sm:text-base"
              >
                Explore Economic Insights <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="group relative p-6 sm:p-8 bg-card border border-muted/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-accent/30 transition-all shadow-sm"
          >
            <div className="absolute top-0 right-0 p-4 sm:p-8 text-accent/10 group-hover:text-accent/20 transition-colors hidden sm:block">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center text-accent mb-4 sm:mb-6">
                <BarChart3 size={24} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Market Risk Validator
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                An automated diagnostic tool designed to de-risk market entry. It synthesizes regulatory 
                requirements and economic indicators to provide institutional go/no-go analysis.
              </p>
              <div className="flex items-center text-accent font-bold text-sm sm:text-base cursor-default">
                Internal Strategic Tool <span className="mx-2 text-muted-foreground/30">|</span> In-Development
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Research Projects & Articles Section */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 space-y-4 md:space-y-0">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Research Projects & Articles
            </h3>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-primary font-bold hover:underline text-sm sm:text-base group"
          >
            See all research{" "}
            <ArrowRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Price Shocks & Food Security",
              desc: "The Short-term Impact of Price Shocks on Food Security—Evidence from Ethiopia.",
              tags: ["Price Analytics", "Food Security", "Inflation Shocks"],
              link: "https://link.springer.com/article/10.1007/s12571-015-0467-4",
            },
            {
              title: "Agri-Finance & Credit Access",
              desc: "Poverty and Access to Credit in Rural Ethiopia: Empirical Evidence from Coffee-Growing Households.",
              tags: ["Access to Finance", "Agri-Finance"],
              link: "https://eea-et.org/wp-content/uploads/2025/09/7TH_vol-II.pdf",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-8 bg-card border border-muted/10 rounded-2xl sm:rounded-3xl hover:border-primary/30 transition-all flex flex-col shadow-sm"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center text-primary mb-4 sm:mb-6">
                <FileText size={24} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                {project.title}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                {project.desc}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-muted/10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-1 bg-muted/10 rounded text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="mt-10 md:mt-32 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 text-xl md:text-2xl font-bold hover:text-primary transition-colors group"
        >
          <span>Ready for a Strategic Partnership?</span>
          <ArrowRight
            size={24}
            className="group-hover:translate-x-2 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}