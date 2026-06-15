import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="text-purple-500 font-mono text-sm">{number}</span>
    <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider">{title}</h3>
    <div className="flex-1 h-[1px] bg-zinc-800" />
  </div>
);

const ExperienceItem = ({ title, company, period, achievements }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-16 last:mb-0"
  >
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
      <h4 className="text-2xl font-display font-bold text-white">{title}</h4>
      <span className="text-zinc-500 font-mono text-sm">{period}</span>
    </div>
    <p className="text-purple-400 font-medium mb-6">{company}</p>
    <ul className="space-y-4">
      {achievements.map((item, i) => (
        <li key={i} className="text-zinc-400 leading-relaxed pl-6 relative">
          <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-purple-500/50 rounded-full" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Kapil Technologies",
      period: "Jul 2025 – Present",
      achievements: [
        "Architecting enterprise portals using React.js and Spring Boot.",
        "Developing performant RESTful microservices for high-traffic environments.",
        "Crafting cinematic user experiences with modern CSS and animation libraries."
      ]
    },
    {
      title: "Technical Intern (Odoo)",
      company: "Kapil Technologies",
      period: "May 2025 – Jun 2025",
      achievements: [
        "Developed custom business logic for Odoo ERP modules using Python and XML.",
        "Engineered PostgreSQL data migrations and schema optimizations.",
        "Built custom visualization dashboards for enterprise resource tracking."
      ]
    }
  ];

  return (
    <section id="about" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9]">
              The <br /> <span className="text-zinc-600">Story</span>.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8 text-balance">
              I’m a developer who believes the most powerful software 
              is built at the intersection of robust architecture and 
              delightful user experience.
            </p>
            <div className="flex flex-col gap-4 text-zinc-500 font-mono text-sm">
              <p>📍 Hyderabad, India</p>
              <p>☕ Powered by Code & Coffee</p>
              <p>🏏 Cricket Enthusiast</p>
            </div>
          </div>

          {/* Content Scroll */}
          <div className="lg:col-span-7">
            <div className="mb-32">
              <SectionHeader number="01" title="Philosophy" />
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                My approach to development is centered on clean code and 
                scalability. I don't just build features; I build 
                ecosystems that grow with the user.
              </p>
            </div>

            <div className="mb-32">
              <SectionHeader number="02" title="Experience" />
              {experiences.map((exp, i) => (
                <ExperienceItem key={i} {...exp} />
              ))}
            </div>

            <div>
              <SectionHeader number="03" title="Education" />
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    Industry Ready Certification in Java Full-Stack
                  </h4>
                  <p className="text-zinc-500">Nxtwave Disruptive Technologies · 2023 – 2025</p>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    B.Tech, Computer Science and Engineering
                  </h4>
                  <p className="text-zinc-500">Vikas College Of Engineering · 2019 – 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
