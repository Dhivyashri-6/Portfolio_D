import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { SiMongodb, SiOracle, SiGithub, SiAngular } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'MongoDB Associate',
      issuer: 'MongoDB University',
      icon: SiMongodb,
      date: '2024',
      description: 'Comprehensive training in MongoDB database development.',
      skills: ['MongoDB', 'NoSQL'],
      certificateUrl: '/certificates/mongodb-associate.pdf',
      color: 'text-green-500'
    },
    {
      id: 2,
      title: 'Oracle APEX Cloud',
      issuer: 'Oracle',
      icon: SiOracle,
      date: '2024',
      description: 'Professional certification in Oracle APEX cloud-based development.',
      skills: ['Oracle APEX', 'Cloud'],
      certificateUrl: '/certificates/oracle-apex.pdf',
      color: 'text-red-500'
    },
    {
      id: 3,
      title: 'GitHub Foundations',
      issuer: 'GitHub',
      icon: SiGithub,
      date: '2024',
      description: 'Certification in GitHub essentials and version control.',
      skills: ['Git', 'GitHub'],
      certificateUrl: '/certificates/github-foundations.pdf',
      color: 'text-white'
    },
    {
      id: 4,
      title: 'Angular Foundations',
      issuer: 'Infosys Springboard',
      icon: SiAngular,
      date: '2024',
      description: 'Training on Angular fundamentals and components.',
      skills: ['Angular', 'TypeScript'],
      certificateUrl: '/certificates/angular-foundations.pdf',
      color: 'text-red-600'
    }
  ];

  return (
    <div id="certifications" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] -z-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Professional <span className="text-purple-500">Certifications</span>
          </h2>
          <div className="h-1 w-16 bg-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-48 bg-zinc-900 border-2 border-white/20 rounded-xl overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:border-purple-500/50"
            >
              {/* Default State */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className={`w-12 h-12 mb-3 rounded-full bg-zinc-800 flex items-center justify-center ${cert.color}`}>
                  <cert.icon className="text-2xl" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-xs text-zinc-400">{cert.issuer}</p>
              </div>

              {/* Hover/Touch State */}
              <div className="absolute inset-0 bg-purple-900/95 p-4 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <p className="text-xs text-white mb-3 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-purple-200 transition-colors border border-white/20 px-3 py-1.5 rounded-full"
                >
                  View <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
