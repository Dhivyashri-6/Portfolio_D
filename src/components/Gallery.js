import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { FiExternalLink, FiEye, FiPlay, FiX } from 'react-icons/fi';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const figmaWorks = [
    {
      id: 1,
      title: 'GrowthSpace App UI',
      image: '/images/gallery/growthspace.jpg',
      type: 'image',
      link: 'https://www.figma.com/design/mRb5jHNfua4EUe6Qwn8T0E/growthspace-Day2?node-id=0-1&t=w224pJX3q6gSJ6cL-1'
    },
    {
      id: 2,
      title: 'Jewelry Website UI',
      image: '/images/gallery/jewel website day-1.jpg',
      type: 'image',
      link: 'https://www.figma.com/proto/pZiXZahxOVfOR8Vp9QYcFh/jewel-website-day-1?page-id=0%3A1&node-id=32-3&p=f&viewport=136%2C-87%2C0.26&t=ZA5u6lx18lGr4z5i-1&scaling=scale-down&content-scaling=fixed'
    },
    {
      id: 3,
      title: 'Vanilla UI ',
      image: '/images/gallery/vannila.jpg',
      type: 'video',
      videoUrl: '/images/gallery/cakes_figma.mp4', // Replace with actual video URL
      link: 'https://www.figma.com/design/QephMAKMfRQvFurOzVNxQB/Untitled?node-id=1-74&t=UQcn7igx9ioZ6Ims-1'
    },
    {
      id: 4,
      title: 'Landscape Photography',
      image: '/images/gallery/landscape.jpg',
      type: 'video',
      videoUrl: '/images/gallery/nature_figma.mp4', // Replace with actual video URL
      link: 'https://www.figma.com/design/gMPPwz9qBlVpSkEeBoA8lT/Untitled?node-id=0-1&t=tobTY1kOBa0TDkal-1'
    }
  ];

  return (
    <div id="gallery" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] -z-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Design <span className="text-purple-500">Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {figmaWorks.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card Container */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-black border border-white/20 group-hover:border-purple-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
              >
                
                {/* Image Wrapper with Glow */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' && (
                      <button 
                        onClick={() => setSelectedItem(item)}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer hover:bg-white/30"
                      >
                        <FiPlay className="text-white text-3xl ml-1" />
                      </button>
                    )}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  </div>
                </div>

                {/* Link Section Below Thumbnail */}
                <div className="p-4 bg-zinc-900/50 border-t border-zinc-800 flex justify-between items-center group-hover:bg-zinc-900 transition-colors duration-300">
                  <span className="text-zinc-400 text-sm group-hover:text-white transition-colors">
                    {item.type === 'video' ? 'Watch Video' : 'View Design'}
                  </span>
                  <div className="flex gap-3">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition-all duration-300"
                      title="Open Link"
                    >
                      <FiExternalLink />
                    </a>
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer"
                    >
                      {item.type === 'video' ? <FiPlay /> : <FiEye />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedItem(null)}
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
              {selectedItem.type === 'video' ? (
                <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
