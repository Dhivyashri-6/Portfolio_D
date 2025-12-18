import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const titles = ["Full Stack Developer", "UI/UX Designer"];
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div id="home" className="min-h-[60vh] flex items-center justify-center relative overflow-hidden px-6 py-12">
      {/* Background Elements - Scaled down */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] rounded-full bg-fuchsia-600/10 blur-[80px]" />
        
        {/* Glowing Fireflies / Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-purple-500' : 'bg-white'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              boxShadow: i % 2 === 0 ? '0 0 10px rgba(168, 85, 247, 0.6)' : '0 0 10px rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              y: [0, Math.random() * -150 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="container max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-purple-400 text-xs font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-1">
            <h2 className="text-lg text-gray-400 font-light">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
              Dhivyashri
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mt-2 text-2xl md:text-3xl font-medium min-h-[1.2em]">
                {text}
                <span className="animate-pulse text-gray-400">|</span>
              </span>
            </h1>
          </div>

          <p className="text-base text-gray-400 max-w-md leading-relaxed">
            Passionate and motivated professional seeking to contribute to
innovative projects and grow professionally. Eager to apply creativity,
problem-solving, and technical skills to deliver impactful results
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors"
            >
              Let's Connect <FiArrowRight />
            </motion.button>
            
            <motion.a
              href={process.env.PUBLIC_URL + "/documents/Dhivyashri_Resume.pdf"}
              download="Dhivyashri_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border border-zinc-700 text-white rounded-full font-bold text-sm flex items-center gap-2 hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              Resume <FiDownload />
            </motion.a>
          </div>

          <div className="flex gap-5 pt-6 border-t border-zinc-800/50">
            <SocialLink href="https://github.com/Dhivyashri-6" icon={<FiGithub size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/k-k-dhivyashri-a76988291/" icon={<FiLinkedin size={20} />} />
            <SocialLink href="https://leetcode.com/u/Dhivyashri-IT/" icon={<SiLeetcode size={20} />} />
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[400px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden border-2 border-purple-500/50 bg-zinc-900/50 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-500">
             {/* Abstract Background in Card */}
             <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/80 z-0" />
             
             <img 
               src={process.env.PUBLIC_URL + '/images/profile/dhivyashri.jpg'}
               alt="Dhivyashri"
               className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
             />

             {/* Floating Badge */}
             <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl z-10">
               <div className="flex justify-between items-center">
                 <div>
                   <p className="text-[10px] text-gray-400 uppercase tracking-wider">OPEN FOR WORK</p>
                   <p className="text-white font-medium text-sm">B.Tech IT</p>
                 </div>
                 <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                   <span className="font-bold text-[10px]">DS</span>
                 </div>
               </div>
             </div>
          </div>
          
          {/* Decorative Elements behind image */}
          <div className="absolute -z-10 top-1/4 -right-8 w-16 h-16 bg-purple-500 rounded-full blur-2xl opacity-20" />
          <div className="absolute -z-10 bottom-1/4 -left-8 w-24 h-24 bg-fuchsia-500 rounded-full blur-2xl opacity-20" />
        </motion.div>

      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-purple-400 transition-colors"
  >
    {icon}
  </a>
);

export default Hero;
