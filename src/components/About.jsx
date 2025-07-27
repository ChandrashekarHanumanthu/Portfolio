import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    },
  };

  const education = [
    {
      degree: "Industry Ready Certification in Java Full-Stack Development",
      institution: "Nxtwave Disruptive Technologies",
      period: "Jun 2023 – May 2025",
      details: "Comprehensive full-stack development program focusing on Java, Spring Boot, React, and modern web technologies.",
      icon: "🎓"
    },
    {
      degree: "B.Tech, Computer Science and Engineering",
      institution: "Vikas College Of Engineering and Technology",
      period: "2019 – 2023",
      details: "Bachelor of Technology with focus on software development, algorithms, and computer systems.",
      icon: "💻"
    },
    {
      degree: "Intermediate, MPC",
      institution: "Viswa Sri Haygreeva Jr College",
      period: "2017 – 2019",
      details: "Mathematics, Physics, and Chemistry stream with strong foundation in scientific principles.",
      icon: "📚"
    }
  ];

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Kapil Technologies",
      period: "Jul 2025 – Present",
      location: "Hyderabad, Telangana, India",
      type: "Full-time",
      icon: "💼",
      achievements: [
        "Continuing work on Odoo software development with technology stack including PostgreSQL, XML, Python and JavaScript",
        "Developing and maintaining CRM and Project modules with custom business logic and workflow automation",
        "Creating customized dashboards and reports to meet specific client requirements and business needs",
        "Implementing UI/UX improvements and performance optimizations for better user experience",
        "Collaborating with cross-functional teams to deliver end-to-end solutions using Odoo framework"
      ]
    },
    {
      title: "Technical Intern",
      company: "Kapil Technologies",
      period: "May 2025 – Jun 2025",
      location: "Hyderabad, Telangana, India",
      type: "Internship",
      icon: "🔬",
      achievements: [
        "Gained hands-on experience in Odoo software development with technology stack including PostgreSQL, XML, Python and JavaScript",
        "Worked extensively on CRM and Project modules, understanding their architecture and customization capabilities",
        "Developed custom dashboards and reports to visualize key business metrics and performance indicators",
        "Learned Odoo framework architecture and best practices for module development and customization",
        "Participated in code reviews and collaborated with senior developers to improve development skills"
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Try Logic Soft Solutions AP Private Limited",
      period: "Jun 2022 – Aug 2022",
      location: "Vijayawada, Andhra Pradesh, India",
      type: "Internship",
      icon: "🐍",
      achievements: [
        "Gained hands-on experience in core Python programming concepts including data types, control structures, functions, and object-oriented programming",
        "Developed mini projects such as a calculator application and student grade management system",
        "Strengthened coding skills and learned to develop clean, efficient, and well-structured code",
        "Acquired knowledge in basic file handling, exception management, and participated in code reviews to improve debugging and logical thinking abilities"
      ]
    }
  ];

  const leadershipExperience = [
    {
      title: "Team Leader",
      project: "Facial Emotion Recognition using AI – Deep Learning",
      period: "Sep 2022 – Mar 2023",
      location: "Vijayawada, Andhra Pradesh",
      icon: "🤖",
      achievements: [
        "Led a team of 4 members, coordinating tasks and ensuring timely completion of project milestones.",
        "Directed the development and implementation of real-time emotion detection using Convolutional Neural Networks (CNNs) to process facial expressions.",
        "Designed and tested image normalization and edge detection algorithms to improve recognition accuracy.",
        "Managed documentation and provided technical guidance, overseeing integration with live camera feeds for real-time emotion recognition."
      ]
    }
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "hanumanthuchandrashekar972@gmail.com",
      icon: "✉️",
      link: "mailto:hanumanthuchandrashekar972@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 8500394181",
      icon: "📱",
      link: "tel:+918500394181"
    },
    {
      label: "Location",
      value: "Hyderabad, Telangana",
      icon: "📍"
    },
    {
      label: "Languages",
      value: "English, Telugu",
      icon: "🌐"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 w-full bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="flex flex-col gap-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Me Section */}
          <motion.div variants={fadeIn}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-center"
              variants={item}
            >
              About Me
            </motion.h2>
            <motion.div className="max-w-4xl mx-auto space-y-6 text-slate-300 text-lg leading-relaxed" variants={container}>
              <motion.p variants={item}>
                I'm a passionate <span className="text-purple-300 font-medium">Full Stack Developer</span> with expertise in
                <span className="text-cyan-300 font-medium"> Java, Spring Boot, React, and Odoo</span> frameworks. While I'm currently
                specializing in <span className="text-green-300 font-medium">Odoo development</span> at <span className="text-pink-300 font-medium">Kapil Technologies</span>,
                my strong foundation in <span className="text-blue-300 font-medium">Java Full-Stack development</span> with Spring Boot and React
                provides me with a comprehensive understanding of modern application architecture.
              </motion.p>
              <motion.p variants={item}>
                My technical expertise spans multiple domains - from <span className="text-purple-300">enterprise ERP solutions with Odoo</span>
                using PostgreSQL, XML, and JavaScript, to <span className="text-cyan-300">building robust backend services with Java and Spring Boot</span>,
                and <span className="text-green-300">creating dynamic user interfaces with React</span>. This diverse skill set allows me to approach
                problems from multiple perspectives and deliver comprehensive solutions.
              </motion.p>
              <motion.p variants={item}>
                When I'm not coding, I enjoy <span className="text-pink-300">playing cricket</span> and exploring new technologies. I'm always
                looking for opportunities to learn and grow as a developer.
              </motion.p>
            </motion.div>
            {/* Contact Information */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto" variants={container}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-slate-800 hover:border-purple-500/30 transition-all group"
                  variants={item}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.1)' }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      {info.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-purple-300 transition-colors break-words break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white break-words">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Work Experience Section */}
          <motion.div variants={fadeIn}>
            <motion.h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-2 justify-center" variants={item}>
              <span className="text-green-400">💼</span> Work Experience
            </motion.h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/30 transition-all group"
                  variants={item}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.1)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl mt-1 group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg font-semibold text-green-300">{exp.title}</h4>
                        <span className="text-xs bg-green-900/50 text-green-300 px-3 py-1 rounded-full">{exp.period}</span>
                      </div>
                      <p className="text-slate-300 font-medium mt-1">{exp.company}</p>
                      <p className="text-slate-400 text-sm mt-1">{exp.location} · {exp.type}</p>
                      <ul className="mt-3 space-y-2 pl-1">
                        {exp.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="text-slate-300 text-sm flex items-start group/achievement">
                            <span className="text-green-400 mr-2 group-hover/achievement:text-green-400 transition-colors">•</span>
                            <span className="group-hover/achievement:text-white transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={fadeIn}>
            <motion.h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-2 justify-center" variants={item}>
              <span className="text-purple-400">🎓</span> Education
            </motion.h3>
            <div className="space-y-6 max-w-4xl mx-auto relative">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all group relative overflow-hidden"
                  variants={item}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.1)' }}
                >
                  <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-purple-500 border-2 border-purple-300 z-10"></div>
                  {index !== education.length - 1 && (
                    <div className="absolute left-7 top-8 h-full w-0.5 bg-purple-400/30 -z-10"></div>
                  )}
                  <div className="flex items-start gap-4 pl-6">
                    <div className="text-3xl mt-1 group-hover:scale-110 transition-transform flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300">{edu.degree}</h4>
                      <p className="text-slate-300">{edu.institution}</p>
                      <p className="text-purple-400/80 text-sm mt-1">{edu.period}</p>
                      <p className="text-slate-400 text-sm mt-2 leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Leadership Experience Section */}
          <motion.div variants={fadeIn}>
            <motion.h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-2 justify-center" variants={item}>
              <span className="text-pink-400">🚀</span> Leadership Experience
            </motion.h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {leadershipExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-pink-500/30 transition-all group"
                  variants={item}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl mt-1 group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg font-semibold text-pink-300">{exp.title}</h4>
                        <span className="text-xs bg-pink-900/50 text-pink-300 px-3 py-1 rounded-full">{exp.period}</span>
                      </div>
                      <p className="text-slate-300 font-medium mt-1">{exp.project}</p>
                      <p className="text-slate-400 text-sm mt-1">{exp.location}</p>
                      <ul className="mt-3 space-y-2 pl-1">
                        {exp.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="text-slate-300 text-sm flex items-start group/achievement">
                            <span className="text-purple-400 mr-2 group-hover/achievement:text-pink-400 transition-colors">•</span>
                            <span className="group-hover/achievement:text-white transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;