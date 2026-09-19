import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../assets/electrician_hero_1789710416079.png';
import bgBannerImg from '../assets/electrical_hero_bg.png';
import { ArrowRight } from 'lucide-react';

export default function Banner({ onOpenQuoteModal }) {
  const bulletPoints = [
    'HT/LT Electrical Contractor',
    'Plumbing Contractor',
    'MEP Maintenance Work',
    'MEP Designing',
    'Facility Management',
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="banner" className="relative pt-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Clear High-Quality Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgBannerImg}
          alt="Electrical Power Infrastructure Background"
          className="w-full h-full object-cover object-center opacity-85 filter brightness-105 contrast-105"
        />
        {/* Soft Left Fade Mask to Keep Text Perfectly Readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/30" />
      </div>
      {/* Background Subtle Electrical Grid Decor */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-repeat bg-center"
        style={{
          backgroundImage: `radial-gradient(#2563eb 0.75px, transparent 0.75px), linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }}
      />

      {/* Soft Light Blue Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      {/* Upper Main Hero Banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 md:pt-6 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 space-y-6"
          >
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-600 tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans']">
              POWERING A <br />
              <span className="text-sky-500">BETTER TOMORROW</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-slate-800 font-bold text-sm sm:text-base">
              Govt. Authorised Class I Electrical Contractor <br />
              for a Safer, Smarter & Sustainable Future
            </motion.p>

            <motion.ul variants={itemVariants} className="space-y-2.5 pt-2">
              {bulletPoints.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-all shadow-md flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-white border border-blue-600 text-blue-600 font-bold text-xs hover:bg-blue-50 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Hero Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-5 relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md w-full group">
              <img
                src={heroImg}
                alt="Navadurga Electricals Engineer"
                className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Reliable Solutions Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl max-w-[170px] text-right"
              >
                <span className="block text-xs font-black text-slate-900 leading-tight">
                  Reliable Electrical Solutions
                </span>
                <span className="block text-[10px] font-bold text-blue-600 mt-0.5">
                  for Every Project
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Dark Blue Metrics Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#002f6c] text-white py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex flex-col items-center justify-center space-y-1"
              >
                <span className="text-2xl sm:text-3xl font-black font-['Plus_Jakarta_Sans']">{stat.value}</span>
                <span className="text-xs text-sky-200 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
