import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const projects = [
  // Professional Projects (current job)
  {
    title: "PTKCS Company Portal",
    description: "Developing and maintaining the official PTKCS company portal, focusing on responsive UI, performance optimization, and scalable architecture.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://placehold.co/400x300/4F46E5/ffffff?text=PTKCS+Portal",
    category: "professional",
    type: "Full Stack",
    link: "https://www.ptkcs.com/"
  },
  {
    title: "KCS Tech Company Portal",
    description: "Enhancing and building features for the KCS Tech corporate portal, including secure authentication, dynamic content modules, and API integrations.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://placehold.co/400x300/06B6D4/ffffff?text=KCS+Tech+Portal",
    category: "professional",
    type: "Full Stack",
    link: "https://kcs-tech.com/"
  },

  // Internship Projects
  {
    title: "Odoo CRM Customization",
    description: "Customized CRM and Project modules in Odoo with enhanced dashboards, workflow automation, and business-specific features for enterprise clients.",
    technologies: ["Odoo", "PostgreSQL", "JavaScript", "XML", "Python"],
    image: "https://placehold.co/400x300/7C3AED/ffffff?text=Odoo+CRM",
    category: "internship",
    type: "Full Stack",
    link: "#"
  },
  {
    title: "Odoo Project Module Enhancement",
    description: "Developed advanced reporting features and customized dashboards for Project module in Odoo, improving project tracking and team collaboration.",
    technologies: ["Odoo", "PostgreSQL", "JavaScript", "XML", "Python"],
    image: "https://placehold.co/400x300/059669/ffffff?text=Project+Module",
    category: "internship",
    type: "Full Stack",
    link: "#"
  },

  // Personal Projects
  {
    title: "Travel Website",
    description: "Dynamic, full-stack travel booking platform enabling users to search destinations, select travel dates, and complete bookings via interactive UI.",
    technologies: ["React.js", "CSS", "Java", "Spring Boot", "MySQL"],
    image: "https://placehold.co/400x300/6366F1/ffffff?text=Travel+Website",
    category: "personal",
    type: "Full Stack",
    link: "https://travelwebsitefrontend.onrender.com/"
  },
  {
    title: "Covid Dashboard",
    description: "Responsive Covid Dashboard with confirmed, active, recovered and deceased cases in India state-wise with multiple graph views.",
    technologies: ["React.js", "Recharts", "JavaScript", "HTML", "CSS"],
    image: "https://placehold.co/400x300/8B5CF6/ffffff?text=Covid+Dashboard",
    category: "personal",
    type: "Frontend",
    link: "https://covid19tracker.ccbp.tech/"
  },
  {
    title: "Todos Application",
    description: "A productivity-focused todo app with a user-friendly interface and local storage support for persistent tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://placehold.co/400x300/EF4444/ffffff?text=Todo+App",
    category: "personal",
    type: "Frontend",
    link: "https://todoappp.ccbp.tech/"
  },

  // Academic Projects
  {
    title: "Facial Emotion Recognition",
    description: "Real-time emotion recognition using CNNs for facial expression detection, enhanced with image normalization and edge detection.",
    technologies: ["Python", "AI", "Deep Learning", "CNN"],
    image: "https://placehold.co/400x300/F59E0B/ffffff?text=Emotion+AI",
    category: "academic",
    type: "AI/ML",
    link: "#"
  },
  {
    title: "Cricket Team Application",
    description: "Spring Boot REST APIs for managing players and matches with CRUD operations, integrated with SQL for data persistence.",
    technologies: ["Java", "Spring Boot", "JPA", "Hibernate", "SQL"],
    image: "https://placehold.co/400x300/06B6D4/ffffff?text=Cricket+App",
    category: "academic",
    type: "Backend",
    link: "#"
  }
];

const tabs = [
  { id: "professional", name: "🏢 Professional Projects", count: projects.filter(p => p.category === "professional").length },
  { id: "internship", name: "📝 Internship Projects", count: projects.filter(p => p.category === "internship").length },
  { id: "personal", name: "💡 Personal Projects", count: projects.filter(p => p.category === "personal").length },
  { id: "academic", name: "🎓 Academic Projects", count: projects.filter(p => p.category === "academic").length }
];


  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 w-full bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-slate-300">
            A showcase of my journey across professional, personal, and academic development
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <ul className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span>{tab.name}</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.id 
                      ? 'bg-purple-500/30' 
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-black/10 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.type === 'Full Stack' ? 'from-purple-600 to-pink-600' : project.type === 'Frontend' ? 'from-cyan-600 to-blue-600' : project.type === 'Backend' ? 'from-green-600 to-emerald-600' : 'from-yellow-600 to-orange-600'}`}>
                  {project.type}
                </div>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.category === 'professional' ? 'from-emerald-600 to-green-600' : project.category === 'personal' ? 'from-blue-600 to-cyan-600' : 'from-indigo-600 to-purple-600'}`}>
                  {project.category === 'professional' ? 'Professional' : project.category === 'personal' ? 'Personal' : 'Academic'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== "#" && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No projects found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-400 mb-2">No projects found</h3>
            <p className="text-slate-500">Check back later for more projects in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;