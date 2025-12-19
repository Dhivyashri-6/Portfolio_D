import React, { useState } from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCalendar, FiDownload } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleDownloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/documents/resume.pdf';
    link.download = 'Dhivyashri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'kkdhivyashri@gmail.com',
      href: 'mailto:kkdhivyashri@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 8072288679',
      href: 'tel:+918072288679'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Namakkal, TamilNadu',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Dhivyashri-6', color: 'bg-gray-700' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/k-k-dhivyashri-a76988291/', color: 'bg-blue-600' },
    { icon: FiMail, href: 'mailto:kkdhivyashri@gmail.com', color: 'bg-emerald-500' }
  ];

  return (
    <div id="contact" className="px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] -z-10" />

      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: i % 3 === 0 ? 'rgba(168, 85, 247, 0.2)' : 
                         i % 3 === 1 ? 'rgba(216, 180, 254, 0.2)' : 'rgba(192, 132, 252, 0.2)'
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-10">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                Get in <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">Touch</span>
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact Information</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 bg-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-xl border-2 border-white/20 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{info.title}</h4>
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-gray-200 font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-zinc-900 border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:bg-zinc-800 transition-all duration-300`}
                      >
                        <IconComponent className="text-lg" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-2xl border-2 border-white/20 p-8 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:border-purple-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <FiMail className="text-purple-500" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <FiMail className="text-purple-500" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <FiMail className="text-purple-500" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

                            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-500 text-white font-medium rounded-lg hover:from-purple-700 hover:via-fuchsia-700 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-purple-500/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center text-sm"
                >
                  Failed to send message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
