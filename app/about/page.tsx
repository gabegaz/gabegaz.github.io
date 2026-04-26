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
  duration: 1.2,
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
      {/* Visual Sophistication: High Contrast Grid */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center,rgba(87,10,242,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Profile Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-32 md:mb-48"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="relative lg:w-fit shrink-0"
          >
            <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-[2.5rem] overflow-hidden z-10 bg-transparent">
              <Image
                src="/04-removebg2.png"
                alt="Getachew Abegaz"
                fill
                className="object-cover mix-blend-multiply"
                priority
              />
            </div>
            {/* Decorative background elements for the image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-0" />
          </motion.div>

          <div className="flex-1 text-center lg:text-left max-w-4xl">            
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
            >
              Getachew <span className="text-primary italic">Abegaz</span>
            </motion.h2>

            <motion.p 
              variants={fadeInUpVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed tracking-tight font-medium"
            >
              Hi! I am Getachew Ahmed Abegaz. I specialize in turning raw data into strategic value. With over 20 years of experience, I bridge the gap between fragmented information and measurable returns through high-level economic insights and scalable architecture.
            </motion.p>

            <motion.div 
              variants={fadeInUpVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
            >
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-muted">
                <div className="p-3 bg-primary/5 rounded-xl text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg tracking-tight">Economic Policy</h4>
                  <p className="text-sm text-muted-foreground font-medium">Strategic Market Analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-muted">
                <div className="p-3 bg-accent/5 rounded-xl text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg tracking-tight">Computer Science</h4>
                  <p className="text-sm text-muted-foreground font-medium">Digital Infrastructure</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/gabegaz/" },
                { icon: <Mail size={22} />, href: "mailto:getabegaz@gmail.com" },
                { icon: <MessageSquare size={22} />, href: "https://wa.me/251911480370" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="p-5 bg-white border border-muted rounded-2xl hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
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
            className="bg-accent/5 border-2 border-dashed border-accent/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,205,190,0.05)_0%,transparent_100%)]" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
              <div className="max-w-2xl">
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed tracking-tight font-medium">
                  Explore my collection of market intelligence, econometric modeling, and digital infrastructure strategies.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-accent text-accent-foreground font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-accent/20 shrink-0"
              >
                <span>View Full Portfolio</span>
                <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="bg-white border border-muted rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(87,10,242,0.02),transparent_100%)]" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl mx-auto leading-tight">
                Let’s explore how we can <span className="text-primary italic">work together</span>.
              </h3>
              <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                I’m always open to discussing new challenges and seeing how my 
                background in economics and data systems can support your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-12 py-6 bg-primary text-primary-foreground font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/20 relative group"
              >
                <span className="relative">Get in Touch</span>
                <ArrowRight
                  size={22}
                  className="relative group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
