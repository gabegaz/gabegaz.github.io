"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MessageSquare, ArrowRight, Award, BookOpen, GraduationCap } from 'lucide-react';
import expertise from './expertise';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden relative z-10 shadow-2xl">
              <Image
                src="/04-removebg.png"
                alt="Getachew Abegaz"
                width={224}
                height={224}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 -scale-x-100"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>

          <div className="flex-1">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Synthesizing <span className="text-primary">Data</span> & <span className="text-accent">Economics</span>.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I am Getachew Abegaz, a data strategist specializing in the intersection of Computer Science and Economic Analysis. With 20+ years of experience, I guide organizations, investors, and policymakers through the complexities of emerging markets.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">MSc Comp. Science</h4>
                    <p className="text-sm text-muted-foreground">Technical Architecture</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">MSc Economics</h4>
                    <p className="text-sm text-muted-foreground">Strategic Analysis</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/gabegaz/" target="_blank" className="p-3 bg-card border border-muted/20 rounded-full hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:getabegaz@gmail.com" className="p-3 bg-card border border-muted/20 rounded-full hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://wa.me/251911480370" target="_blank" className="p-3 bg-card border border-muted/20 rounded-full hover:text-primary transition-colors">
                  <MessageSquare size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Deep Expertise Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-muted/10 pb-8">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Capabilities</h2>
              <h3 className="text-4xl font-bold">Deep Expertise</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card border border-muted/10 rounded-3xl hover:border-primary/20 transition-all"
              >
                <div className="mb-6 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {index === 0 ? <BookOpen size={24} /> : <Award size={24} />}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Bridge */}
        <div className="mt-32 text-center">
          <Link href="/contact" className="inline-flex items-center space-x-2 text-2xl font-bold hover:text-primary transition-colors group">
            <span>Ready for a Strategic Partnership?</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Simple Link helper for this file
import Link from 'next/link';
