import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-zinc-950 pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-purple-500" />
              <span className="text-purple-400 font-medium tracking-widest text-xs uppercase">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-8 text-white text-balance"
            >
              Creative <span className="text-zinc-500">Full Stack</span> <br />
              Developer<span className="text-purple-500">.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
              <div className="max-w-md">
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  I'm Chandrashekar, a developer dedicated to crafting immersive 
                  digital experiences through modern web technologies and 
                  enterprise-scale solutions.
                </p>
              </div>
              
              <div className="text-2xl md:text-3xl font-medium text-purple-400/80 italic">
                <TypeAnimation
                  sequence={[
                    'Java Expert', 2000,
                    'React Specialist', 2000,
                    'Odoo Developer', 2000,
                    'Problem Solver', 2000,
                  ]}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <Link 
                to="/projects"
                className="group relative px-8 py-4 bg-white text-black font-bold overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10">EXPLORE WORK</span>
                <FaArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
              
              <div className="flex items-center gap-6 px-4">
                <a href="https://github.com/ChandrashekarHanumanthu" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/chandrashekar-hanumanthu-1329232b3" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative background element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Simplified Previews or further sections can go here */}
      <section className="py-32 bg-zinc-900/30">
        <div className="container mx-auto px-6 text-center">
           <Link to="/about" className="group text-4xl md:text-6xl font-display font-medium hover:text-purple-400 transition-colors">
              THE STORY <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
