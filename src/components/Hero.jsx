import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const images = [
        // Add any images you might use in the hero section
      ];
      
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              opacity: 0.1 + Math.random() * 0.2,
              scale: 0.5 + Math.random() * 1.5,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              rotate: [null, 360 + Math.random() * 360],
            }}
            transition={{
              duration: 30 + Math.random() * 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-800/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Chandrashekar</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Odoo Developer',
                  2000,
                  'Java/Spring Boot Expert',
                  2000,
                  'React Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              />
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I build exceptional digital experiences using modern web and ERP technologies. 
              Currently working as a Full Stack Developer at Kapil Technologies, specializing in Odoo development, Java/Spring Boot, and React applications.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#projects" 
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center"
              >
                View My Work
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="group bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-900/30 hover:text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center"
              >
                Contact Me
                <HiOutlineMail className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label="Email"
                title="Email Me"
              >
                <HiOutlineMail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#resume" 
                className="text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label="Resume"
                title="View Resume"
              >
                <BsFillPersonLinesFill className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-purple-500/20 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:opacity-0 transition-opacity duration-500"></div>
                {/* Replace with your image */}
                <div className="absolute inset-1 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Chandrashekar Hanumanthu</h3>
                    <p className="text-purple-300">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
              <div className="absolute -z-20 -top-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-1">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;