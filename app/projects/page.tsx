"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code, Search } from "lucide-react";
import projects from "../projects_data";
import { useState } from "react";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Archive</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Technical Research & <span className="text-accent">Prototypes</span>.</h1>
          
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search research topics (e.g. 'Macroeconomics', 'Python', 'AI')..."
              className="w-full bg-card border border-muted/20 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-card border border-muted/10 rounded-3xl p-8 hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Code size={24} />
                </div>
                <div className="flex space-x-2">
                  {project.code && (
                    <a 
                      href={project.code} 
                      target="_blank" 
                      className="p-2 bg-background border border-muted/10 rounded-lg hover:text-primary transition-colors"
                      title="View Source Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="p-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all"
                    title="Read Full Publication"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-muted/10">
                <a 
                  href={project.link} 
                  target="_blank"
                  className="inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors"
                >
                  Read Case Study <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground">No technical research found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
