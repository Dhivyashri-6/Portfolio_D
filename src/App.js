import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import MouseTrail from './components/MouseTrail';
import TextLoader from './components/TextLoader';
import CodingProfiles from './components/CodingProfiles';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-black text-white">
      {/* Text Loader */}
      {isLoading && <TextLoader onComplete={handleLoadingComplete} />}
      
      {/* Mouse Trail Effect */}
      <MouseTrail />

      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="snap-container">
        
        {/* Hero Section */}
        <section id="home" className="snap-section bg-black relative">
          <Hero />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>
        
        {/* Coding Profiles Section */}
        <section id="profiles" className="snap-section bg-zinc-900 relative">
          <CodingProfiles />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="snap-section bg-black relative">
          <div className="container max-w-6xl mx-auto px-6">
            <Skills />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>

        {/* Education Section */}
        <section id="education" className="snap-section bg-zinc-900 relative">
          <div className="container max-w-6xl mx-auto px-6">
            <Education />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="snap-section bg-black relative">
          <Projects />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="snap-section bg-zinc-900 relative">
          <Gallery />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>
        
        {/* Certifications Section */}
        <section id="certifications" className="snap-section bg-black relative">
          <Certifications />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="snap-section bg-zinc-900 relative">
          <Achievements />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="snap-section bg-black">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="bg-black py-6 text-center border-t border-zinc-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-purple-500 font-medium">Dhivyashri</span>. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
