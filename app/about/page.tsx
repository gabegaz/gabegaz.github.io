"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  MessageSquare,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

// Premium motion constants
const baseTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Visual Sophistication: Subtle Mesh Glow & Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Profile Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-32 md:mb-48"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="relative lg:w-fit shrink-0"
          >
            <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-[2rem] overflow-hidden z-10 shadow-2xl">
              <Image
                src="/04-removebg2.png"
                alt="Getachew Abegaz"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative background elements for the image */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-0" />
          </motion.div>

          <div className="flex-1 text-center lg:text-left max-w-4xl">            

            <motion.p 
              variants={fadeInUpVariants}
              className="text-lg md:text-2xl text-muted-foreground mb-12 leading-relaxed tracking-tight font-normal"
            >
              Hi! I am Getachew Ahmed Abegaz. I specialize in turning raw data into strategic value. With over 20 years of experience, I bridge the gap between fragmented information and measurable returns through high-level economic insights, the strategic valuation of information assets, and the architecture of custom analytical infrastructure for high-stakes decision environments.
            </motion.p>

            <motion.div 
              variants={fadeInUpVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg tracking-tight">Economic Policy</h4>
                  <p className="text-sm text-muted-foreground">Strategic Market Analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg tracking-tight">Computer Science</h4>
                  <p className="text-sm text-muted-foreground">Digital Infrastructure for Insights</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <a
                href="https://www.linkedin.com/in/gabegaz/"
                target="_blank"
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:text-primary hover:border-primary/50 transition-all"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:getabegaz@gmail.com"
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:text-primary hover:border-primary/50 transition-all"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://wa.me/251911480370"
                target="_blank"
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:text-primary hover:border-primary/50 transition-all"
              >
                <MessageSquare size={22} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Research Bridge */}
        <section className="mb-32 md:mb-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="bg-card border border-white/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03)_0%,transparent_100%)]" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
              <div className="max-w-2xl">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed tracking-tight">
                  Explore my collection of market intelligence, econometric modeling, and digital infrastructure strategies designed to de-risk growth in high-stakes environments.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 shrink-0"
              >
                <span>View Full Portfolio</span>
                <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Contact Bridge */}
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
              Let’s explore how we can <span className="text-primary">work together</span>.
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
      </motion.div>      </div>
    </div>
  );
}
