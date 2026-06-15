import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] aspect-[4/5] md:aspect-[3/4] group overflow-hidden bg-zinc-900">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-cinematic"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent p-8 flex flex-col justify-end">
        <div className="mb-4">
          <span className="text-xs font-bold tracking-[0.2em] text-purple-500 uppercase mb-2 block">
            {project.type}
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {project.title}
          </h3>
          <p className="text-zinc-400 line-clamp-2 mb-6">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-[10px] border border-zinc-700 px-2 py-1 rounded text-zinc-300 uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        {project.link && project.link !== "#" && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm font-bold border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors"
          >
            VIEW CASE STUDY
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  const projects = [
    {
      title: "PTKCS Portal",
      description: "Enterprise portal for PTKCS focusing on responsive UI and performance optimization.",
      technologies: ["React.js", "JavaScript", "Tailwind", "Node.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      type: "Professional",
      link: "https://www.ptkcs.com/"
    },
    {
      title: "KCS Tech Portal",
      description: "Corporate portal featuring secure authentication and dynamic content modules.",
      technologies: ["React.js", "Tailwind", "MongoDB", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      type: "Professional",
      link: "https://kcs-tech.com/"
    },
    {
      title: "Odoo CRM Customization",
      description: "Customized CRM and Project modules with enhanced business workflow automation.",
      technologies: ["Odoo", "PostgreSQL", "Python", "XML"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      type: "Internship",
      link: "#"
    },
    {
      title: "Travel Platform",
      description: "Full-stack travel booking platform with interactive UI and secure payments.",
      technologies: ["Spring Boot", "MySQL", "React", "Java"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
      type: "Personal",
      link: "https://travelwebsitefrontend.onrender.com/"
    },
    {
      title: "Covid Dashboard",
      description: "Responsive tracker with Indian state-wise cases and multiple graph views.",
      technologies: ["React.js", "Recharts", "JavaScript"],
      image: "https://images.unsplash.com/photo-1584118624012-df456d49ecaa?auto=format&fit=crop&q=80&w=800",
      type: "Personal",
      link: "https://covid19tracker.ccbp.tech/"
    },
    {
      title: "Facial Emotion Recognition",
      description: "Real-time AI emotion detection using CNNs for facial expression analysis.",
      technologies: ["Python", "AI", "CNN", "Deep Learning"],
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
      type: "Academic",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="relative h-[400vh] bg-zinc-950" ref={targetRef}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Selected <span className="text-zinc-600">Works</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              A collection of enterprise solutions and personal experiments 
              pushing the boundaries of web development.
            </p>
          </div>
          <div className="hidden md:block text-zinc-600 text-xs tracking-[0.4em] font-bold uppercase mb-4">
            Scroll to explore →
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
