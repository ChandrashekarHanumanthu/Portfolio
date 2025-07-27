import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const skills = [
    { name: "Java", level: 90, color: "from-amber-500 to-amber-600", icon: "", category: "Backend" },
    { name: "Spring Boot", level: 85, color: "from-amber-500 to-amber-600", icon: "", category: "Backend" },
    { name: "React.js", level: 80, color: "from-sky-500 to-sky-600", icon: "", category: "Frontend" },
    { name: "JavaScript", level: 85, color: "from-sky-500 to-sky-600", icon: "", category: "Frontend" },
    { name: "HTML/CSS", level: 90, color: "from-sky-500 to-sky-600", icon: "", category: "Frontend" },
    { name: "JPA/Hibernate", level: 80, color: "from-emerald-500 to-emerald-600", icon: "", category: "Database" },
    { name: "MySQL", level: 75, color: "from-emerald-500 to-emerald-600", icon: "", category: "Database" },
    { name: "PostgreSQL", level: 80, color: "from-emerald-500 to-emerald-600", icon: "", category: "Database" },
    { name: "Python", level: 75, color: "from-indigo-500 to-indigo-600", icon: "", category: "Languages" },
    { name: "Odoo", level: 85, color: "from-violet-500 to-violet-600", icon: "", category: "ERP" },
    { name: "XML", level: 75, color: "from-rose-500 to-rose-600", icon: "", category: "Markup" },
    { name: "REST APIs", level: 90, color: "from-amber-500 to-amber-600", icon: "", category: "Backend" },
    { name: "Git", level: 85, color: "from-indigo-500 to-indigo-600", icon: "", category: "Tools" },
    { name: "Custom Dashboards", level: 80, color: "from-sky-500 to-sky-600", icon: "", category: "Frontend" }
  ];

  const categories = [
    { name: "Backend Development", color: "from-amber-500 to-amber-600", icon: "" },
    { name: "Frontend Development", color: "from-sky-500 to-sky-600", icon: "" },
    { name: "Database & ORM", color: "from-emerald-500 to-emerald-600", icon: "" },
    { name: "ERP & Business Solutions", color: "from-violet-500 to-violet-600", icon: "" },
    { name: "Languages & Tools", color: "from-indigo-500 to-indigo-600", icon: "" }
  ];

  const SkillCard = ({ skill, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut"
          }
        });
      }
    }, [controls, inView, index]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-start space-x-3">
            <div className={`text-2xl text-white/90 mt-0.5 ${skill.category === 'Backend' ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
              {skill.icon}
            </div>
            <div>
              <div>
                <h3 className="text-lg font-semibold text-white/95 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <span className={`text-xs px-2.5 py-1 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700/70`}>
                  {skill.category}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-blue-300">
              {skill.level}%
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">
              {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Intermediate"}
            </span>
          </div>
        </div>
        
        {/* Skill Bar */}
        <div className="relative w-full bg-slate-800/70 rounded-full h-1.5 overflow-hidden mt-4 mb-1">
          <motion.div 
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ 
              duration: 1.5, 
              delay: index * 0.1, 
              ease: "easeOut" 
            }}
          />
        </div>
        

      </motion.div>
    );
  };

  const SkillCategory = ({ category }) => {
    const skillsInCategory = skills.filter(skill => {
      if (category.name === "Backend Development") {
        return ["Java", "Spring Boot", "JPA/Hibernate", "REST APIs"].includes(skill.name);
      } else if (category.name === "Frontend Development") {
        return ["React.js", "JavaScript", "HTML/CSS"].includes(skill.name);
      } else if (category.name === "Database & ORM") {
        return ["MySQL", "PostgreSQL"].includes(skill.name);
      } else if (category.name === "ERP & Business Solutions") {
        return ["Odoo", "XML", "Custom Dashboards"].includes(skill.name);
      } else if (category.name === "Languages & Tools") {
        return ["Python", "Git"].includes(skill.name);
      }
      return false;
    });

    return (
      <div className="mb-12">
        <div className="flex items-center mb-8">
          <div className={`text-3xl mr-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {category.icon}
          </div>
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {category.name}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsInCategory.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Technical Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiencies across various domains of software development
          </p>
          
          {/* Skill Level Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-2"></div>
              <span className="text-slate-400">Expert (90-100%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full mr-2"></div>
              <span className="text-slate-400">Advanced (80-89%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mr-2"></div>
              <span className="text-slate-400">Proficient (70-79%)</span>
            </div>
          </div>
        </motion.div>

        {/* Categorized Skills */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <SkillCategory key={category.name} category={category} />
          ))}
        </div>

        {/* Technology Tags Cloud */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-slate-800/50"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.05,
                  type: 'spring',
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { 
                    duration: 0.2,
                    type: 'spring',
                    stiffness: 300,
                    damping: 10
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
                className="bg-white/5 text-white/90 px-5 py-3 rounded-lg text-sm font-medium shadow-lg shadow-black/10 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;