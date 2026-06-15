import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Layout, 
  Gear, 
  TerminalWindow,
  Globe,
  GitBranch,
  Coffee
} from '@phosphor-icons/react';

const SkillCard = ({ name, category, icon: Icon, className = "" }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between hover:bg-zinc-900/80 hover:border-purple-500/50 transition-all duration-500 group ${className}`}
    >
      <div className="flex justify-between items-start mb-12">
        <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors">
          <Icon size={32} weight="duotone" />
        </div>
        <span className="text-[10px] tracking-[0.2em] font-bold text-zinc-500 uppercase">
          {category}
        </span>
      </div>
      
      <div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">{name}</h3>
        <div className="w-12 h-1 bg-zinc-800 group-hover:w-full group-hover:bg-purple-500 transition-all duration-700" />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="skills" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 text-balance">
            Technical <span className="text-zinc-600">Arsenal</span>
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Bridging the gap between robust backend systems and cinematic user interfaces 
            with a specialized stack designed for performance and scale.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          <SkillCard 
            name="Java / Spring Boot" 
            category="Backend" 
            icon={Coffee} 
            className="md:col-span-2 lg:col-span-2 md:row-span-2"
          />
          <SkillCard 
            name="React.js / Recharts" 
            category="Frontend" 
            icon={Layout} 
            className="md:col-span-2 lg:col-span-2"
          />
          <SkillCard 
            name="MySQL / PostgreSQL" 
            category="Database" 
            icon={Database} 
            className="md:col-span-2"
          />
          <SkillCard 
            name="Odoo / Python" 
            category="ERP & Logic" 
            icon={Gear} 
            className="md:col-span-2"
          />
          <SkillCard 
            name="JavaScript / ES6+" 
            category="Core" 
            icon={TerminalWindow} 
            className="md:col-span-2"
          />
          <SkillCard 
            name="RESTful Architecture" 
            category="Integration" 
            icon={Globe} 
            className="md:col-span-2"
          />
          <SkillCard 
            name="Git / Version Control" 
            category="Tools" 
            icon={GitBranch} 
            className="md:col-span-2"
          />
          <SkillCard 
            name="HTML5 / CSS3 / Tailwind" 
            category="Foundations" 
            icon={Code} 
            className="md:col-span-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
