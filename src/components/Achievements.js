import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const achievements = [
    {
      id: 1,
      title: 'Prompt Legacy Prize',
      caption: "MINKSY'24 Symposium",
      description: 'Won II Prize in the Prompt Legacy event organized by the AI Association.',
      image: '/certificates/image_prompting.jpg',
      date: '2024',
      category: 'Competition'
    },
    {
      id: 2,
      title: 'Paper Presentation',
      caption: 'ACME 2K25 Symposium',
      description: 'Secured III prize in the Paper Presentation event at the Inter Department Technical Symposium ACME 2K25.',
      image: '/certificates/metaverse.jpg',
      date: '2025',
      category: 'Competition'
    },
    {
      id: 3,
      title: 'Paper Presentation',
      caption: "SIGNIN'25 Symposium",
      description: 'Secured I / II / III place in the Paper Presentation event at the Intra-Department Technical Symposium SIGNIN\'25.',
      image: '/certificates/signin.jpg',
      date: '2023',
      category: 'Competition'
    },
    {
      id: 4,
      title: 'Hackathon Winner',
      caption: 'SIH-Internal Hackathon 2025',
      description: 'Won FIRST Prize in the Software/Hardware category as part of team CREW-X for Problem Statement ID SIH25013.',
      image: '/certificates/sih_internal.jpg',
      date: '2025',
      category: 'Competition'
    },
    {
      id: 5,
      title: 'Academic Excellence Award',
      caption: 'Top 5% performer',
      description: 'Awarded with Academic Excellence Award for top 5% holders for the year 2024-25',
      image: '/api/placeholder/600/400',
      date: '2025',
      category: 'Design'
    },
    {
      id: 6,
      title: 'Academic Excellence',
      caption: 'Perfect 10 GPA',
      description: 'Secured a perfect 10 GPA out of 10 in the  Second Semester Exams during First Year IT.',
        image: '/certificates/gpa_10.jpg',
      date: '2024',
      category: 'Academic'
    }
  ];

  return (
    <div className="container max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Achievements <span className="text-purple-500">& Awards</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recognition and milestones from my journey in technology and development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-zinc-900 border-2 border-white/20 rounded-2xl p-5 hover:bg-zinc-900 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:border-purple-500/50"
          >
            <div className="flex flex-col gap-4">
                {/* Thumbnail */}
                <div 
                  className="w-full h-40 rounded-xl overflow-hidden border border-white/10 relative group-hover:border-purple-500/30 transition-colors cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-xs text-purple-400 font-medium mb-1">{item.caption}</p>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded bg-zinc-900/50">
                        {item.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <span className="inline-block px-2 py-1 rounded-full bg-zinc-800 text-[10px] text-gray-300 border border-zinc-700 group-hover:border-purple-500/30 transition-colors">
                    {item.category}
                  </span>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 rounded-full p-3 transition-all z-50"
            >
              <FiX size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Achievement Full View"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
