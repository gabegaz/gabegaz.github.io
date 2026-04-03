"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Search,
} from "lucide-react";
import projects from "../projects_data";
import { useState, useMemo } from "react";

// Refined animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { 
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
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

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-tight text-foreground">
            Research Articles & <span className="text-primary italic">Analytical Tools</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed tracking-tight font-normal">
            A specialized collection of market intelligence, econometric modeling, and digital infrastructure strategies designed to de-risk growth in high-stakes environments.
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search by topic, tag, or technology..."
              className="w-full bg-card border border-muted/20 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary transition-all text-base shadow-sm backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.title}
                variants={fadeInUp}
                className="group bg-card border border-muted/10 rounded-3xl p-8 sm:p-10 hover:border-primary/30 transition-all flex flex-col h-full shadow-sm hover:shadow-md relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex space-x-2">
                    {project.code && (
                      <a 
                        href={project.code} 
                        target="_blank" 
                        className="p-3 bg-background border border-muted/10 rounded-xl hover:text-primary transition-colors shadow-sm"
                        title="View Source Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest px-3 py-1 border border-muted/10 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">
                  {project.title}
                </h3>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1 bg-muted/10 rounded-full text-muted-foreground font-medium uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-muted/10">
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors group/link"
                  >
                    {project.category === "Technical Tools & Prototypes" ? "View Project" : "Read Full Publication"} 
                    <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24 md:py-32">
            <div className="inline-flex p-6 bg-muted/10 rounded-full mb-8 text-muted-foreground">
              <Search size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">No results found</h3>
            <p className="text-muted-foreground text-lg max-w-sm mx-auto leading-relaxed">
              We couldn&apos;t find any projects or research matching &quot;{searchTerm}&quot;. Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}