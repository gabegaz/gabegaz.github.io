"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Search, BookOpen, Briefcase, Cpu, ShieldAlert, BarChart3 } from "lucide-react";
import projects, { Project } from "../projects_data";
import { useState, useMemo } from "react";

const categoryIcons: Record<string, any> = {
  "Market Intelligence & Capital Strategy": BarChart3,
  "Digital Economy & Technology": Cpu,
  "Macroeconomic Risk & Volatility Analysis": ShieldAlert,
  "Specialized Sectoral Depth (Agriculture/Finance)": BookOpen,
  "Technical Tools": Briefcase,
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const projectsByCategory = useMemo(() => {
    const grouped: Record<string, Project[]> = {};
    filteredProjects.forEach(project => {
      if (!grouped[project.category]) {
        grouped[project.category] = [];
      }
      grouped[project.category].push(project);
    });
    return grouped;
  }, [filteredProjects]);

  const categories = Object.keys(projectsByCategory);

  return (
    <div className="pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-2">Portfolio & Archive</h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
            Research Articles & <span className="text-accent">Technical Tools</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            A collection of strategic and market intelligence, econometric modeling, and technical articles.
          </p>
          
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Search by topic, tag, or technology..."
              className="w-full bg-card border border-muted/20 rounded-xl sm:rounded-2xl pl-11 pr-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-all text-sm sm:text-base shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {categories.length > 0 ? (
          <div className="space-y-16 md:space-y-24">
            {categories.map((category, catIndex) => {
              const Icon = categoryIcons[category] || BookOpen;
              return (
                <section key={category} className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 border-b border-muted/10 pb-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">{category}</h2>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projectsByCategory[category].map((project, index) => (
                      <motion.div 
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-card border border-muted/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary/30 transition-all flex flex-col h-full shadow-sm hover:shadow-md"
                      >
                        <div className="flex justify-between items-start mb-6">
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
                          </div>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] sm:text-xs px-3 py-1 bg-muted/10 rounded-full text-muted-foreground font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-muted/10">
                          <a 
                            href={project.link} 
                            target="_blank"
                            className="inline-flex items-center text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors group/link"
                          >
                            {project.category === "Technical Tools & Prototypes" ? "View Project" : "Read Full Publication"} 
                            <ExternalLink size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 md:py-32">
            <div className="inline-flex p-4 bg-muted/10 rounded-full mb-6 text-muted-foreground">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">No results found</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              We couldn't find any projects or research matching "{searchTerm}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
