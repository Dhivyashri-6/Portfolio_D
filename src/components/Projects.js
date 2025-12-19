// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Voicescript-Transforming India's oral traditions",
      description: 'Full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.',
      image: process.env.PUBLIC_URL + '/images/projects/voicescript.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Dhivyashri-6/voicescript.git',
      live: 'https://voicescript-one.vercel.app/',
      color: 'group-hover:border-purple-500/50'
    },
    {
      id: 2,
      title: 'PhishGuard',
      description: 'PhishGuard instantly analyzes URLs and email links, providing real-time warnings to protect you from phishing scams and malicious websites.',
      image: process.env.PUBLIC_URL + '/images/projects/PhishGuard.jpg',
      technologies: ['React', 'OpenAI', 'Socket.io', 'Python'],
      github: 'https://github.com/Dhivyashri-6/Portfolio_D.git',
      live: 'https://portfolio-d-amber.vercel.app/',
      color: 'group-hover:border-blue-500/50'
    },
    {
      id: 3,
      title: 'Blood Connect',
      description: 'A platform connecting blood donors with those in need, featuring real-time notifications and location tracking.',
      image: process.env.PUBLIC_URL + '/images/projects/bloodconnect.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Dhivyashri-6/blood_donation_platform.git',
      live: 'https://blood-donation-platform-xi.vercel.app/ ',
      color: 'group-hover:border-red-500/50'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and achievements with interactive animations.',
      image: process.env.PUBLIC_URL + '/images/projects/portfolio.jpg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Dhivyashri-6/Portfolio_D.git',
      live: 'https://portfolio-d-amber.vercel.app/',
      color: 'group-hover:border-purple-500/50'
    },
    {
      id: 5,
      title: 'Startup Portal',
      description: 'A comprehensive portal for startups to register, manage their profiles, and connect with investors.',
      image: process.env.PUBLIC_URL + '/images/projects/startup.jpg',
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/Dhivyashri-6/Startup_Registration_portal.git',
      live: 'https://startup-portal-demo.com',
      color: 'group-hover:border-orange-500/50'
    },
    {
      id: 6,
      title: 'Efficient Array Extrema: A DAA Approach',
      description: 'Analyzes the complexity and time trade-offs of Brute-force, Presorting-based, and Divide-and-Conquer algorithms for finding the minimum and maximum elements in an array.',
      image: process.env.PUBLIC_URL + '/images/projects/daa.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
      github: 'https://github.com/Dhivyashri-6/DAA-MINIPROJECT.git',
      live: ' https://dhivyashri-6.github.io/DAA-MINIPROJECT/',
      color: 'group-hover:border-emerald-500/50'
    }
  ];

  return (
    <div id="projects" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] -z-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-zinc-900 border-2 border-white/20 rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:border-purple-500/50`}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </a>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 rounded-md bg-zinc-800 text-xs text-zinc-300 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 rounded-md bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-zinc-800">
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-white hover:text-purple-400 transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
