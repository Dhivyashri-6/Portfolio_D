import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech IT',
      institution: 'Kongu Engineering College, Perundurai',
      year: '2023-2027',
      score: 'CGPA: 9.41',
      status: 'current'
    },
    {
      id: 2,
      degree: 'HSC',
      institution: 'Kongunadu Senior Secondary School(CBSE), Velagoundampatti',
      year: '2022-2023',
      score: '90%',
      status: 'completed'
    },
    {
      id: 3,
      degree: 'SSLC',
      institution: 'Kongunadu Matric Higher Secondary School, Velagoundampatti',
      year: '2020-2021',
      score: 'Pass',
      status: 'completed'
    }
  ];

  return (
    <div className="w-full relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
          Education <span className="text-purple-500">Journey</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      </motion.div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-purple-500/50 hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <FiBook className="text-xl" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{item.degree}</h3>
                      <p className="text-zinc-400 font-medium">{item.institution}</p>
                    </div>
                    <span className="mt-2 md:mt-0 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold">
                      {item.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-zinc-500 mt-4 pt-4 border-t border-zinc-800/50">
                    <span className="flex items-center gap-2">
                      <FiCalendar className="text-purple-500" /> {item.year}
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 border border-zinc-700 group-hover:border-purple-500/30 transition-colors">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
