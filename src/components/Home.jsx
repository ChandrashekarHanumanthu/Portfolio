import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin,FaArrowRight } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Python', level: 75 },
  ];

  const projects = [
    // {
    //   title: 'Store Management Portal',
    //   description: 'A full-stack application for managing inventory, invoices, and products with user authentication.',
    //   tags: ['React', 'Spring Boot', 'Material UI', 'jsPDF'],
    //   link: '#projects'
    // },
    {
      title: 'Odoo CRM Customization',
      description: 'Customized CRM and Project modules in Odoo with enhanced dashboards and workflow automation.',
      tags: ['Odoo', 'PostgreSQL', 'JavaScript', 'XML'],
      link: '#projects'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    }
  ];

  return (
    <div className="space-y-32 md:space-y-48">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
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
                    'Java Full Stack Developer',
                    2000,
                    'Odoo Specialist',
                    2000,
                    'Spring Boot Expert',
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
                I'm a Java Full Stack Developer specializing in enterprise applications. Currently at Kapil Technologies, 
                I work with the Odoo framework using XML, PostgreSQL, JavaScript, and Python, while maintaining my expertise in Java, Spring Boot, and React.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link 
                  to="/projects" 
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center"
                >
                  View My Work
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="group bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-900/30 hover:text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center"
                >
                  Contact Me
                  <HiOutlineMail className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div 
                className="flex justify-center lg:justify-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a 
                  href="https://github.com/ChandrashekarHanumanthu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 group"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com/in/chandrashekar-hanumanthu-1329232b3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 group"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 group"
                  aria-label="Email"
                  title="Email Me"
                >
                  <HiOutlineMail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </Link>
                <Link 
                  to="/resume" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 group"
                  aria-label="Resume"
                  title="View Resume"
                >
                  <BsFillPersonLinesFill className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </Link>
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
      {/* About Preview */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm a Java Full Stack Developer with expertise in Spring Boot and React. 
            Currently at Kapil Technologies, I work on Odoo software development using XML, 
            PostgreSQL, JavaScript, and Python for modules customization.
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center text-purple-400 hover:text-white group"
          >
            Learn more about me
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      {/* Skills Snapshot */}
      <section id="skills" className="bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl text-center hover:bg-gray-800/80 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700/50 rounded-full flex items-center justify-center text-2xl">
                  {skill.name[0]}
                </div>
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/skills" 
              className="inline-flex items-center text-purple-400 hover:text-white group"
            >
              View all skills
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      {/* Projects Preview */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-r from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                <div className="text-5xl">
                  {project.title.includes('Odoo') ? '⚙️' : index % 2 === 0 ? '📊' : '🌐'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-purple-400 hover:text-white group"
          >
            View all projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      {/* Contact CTA */}
      <section id="contact" className="bg-gray-900/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you!
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Get In Touch
            <HiOutlineMail className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;