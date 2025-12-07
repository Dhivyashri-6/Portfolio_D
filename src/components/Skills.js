import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava
} from 'react-icons/fa';
import { 
  SiJavascript, SiPython, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, 
  SiGit, SiVisualstudiocode, SiFigma,
  SiCplusplus, SiC, SiAngular,
  SiHtml5, SiCss3, SiTailwindcss, SiFlask,
  SiSpring
} from 'react-icons/si';

const Skills = () => {
  const allSkills = [
    // Programming
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    // Frontend
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    // Backend
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    
    // Tools
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
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
          Skills & <span className="text-purple-500">Technologies</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative flex flex-col items-center justify-center p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:border-purple-500/50 hover:bg-zinc-900 transition-all duration-500 backdrop-blur-sm"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon with Glow */}
            <div className="relative z-10 mb-3 p-3 rounded-full bg-black/50 group-hover:bg-black/80 transition-colors duration-300 ring-1 ring-white/5 group-hover:ring-purple-500/30 shadow-lg group-hover:shadow-purple-500/20">
              <skill.icon 
                className="text-3xl transition-transform duration-300 group-hover:scale-110" 
                style={{ color: skill.color, filter: `drop-shadow(0 0 2px ${skill.color})` }}
              />
            </div>
            
            <span className="text-sm text-zinc-400 font-medium text-center relative z-10 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
