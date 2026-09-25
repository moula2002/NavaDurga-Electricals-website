import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon, FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './Icons';

export default function Footer() {
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
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <footer className="relative bg-[#0B1120] text-slate-300 pt-16 pb-8 overflow-hidden">
      {/* Subtle Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent" />

      {/* Soft Glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800/80 text-sm"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="p-2.5 bg-white rounded-xl inline-block shadow-sm">
              <Logo size="small" />
            </div>
            <p className="text-[12px] text-slate-400 leading-relaxed max-w-[250px]">
              Navadurga Electricals is a Govt. Authorised Class I Electrical Contractor, delivering reliable and high-quality electrical & MEP solutions for over a decade.
            </p>

            <div className="pt-3">
              <p className="font-mono text-[10px] text-slate-500 mb-3 uppercase tracking-wider">GSTIN : 29DWLPS9412J1ZP</p>
              <div className="flex gap-2.5">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> Projects</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> Contact</Link></li>
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Our Services</h4>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              <li><Link to="/services/ht-lt" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> HT/LT Electrical</Link></li>
              <li><Link to="/services/plumbing" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> Plumbing Systems</Link></li>
              <li><Link to="/services/mep-maintenance" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> MEP Maintenance</Link></li>
              <li><Link to="/services/mep-designing" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> MEP Designing</Link></li>
              <li><Link to="/services/facility-management" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500 text-lg leading-none">&bull;</span> Facility Management</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Contact Info</h4>
            <ul className="space-y-3 text-slate-400 font-medium text-xs">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <PhoneCallIcon className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <span className="hover:text-white transition-colors cursor-pointer">+91 73385 91198</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                </div>
                <span className="hover:text-white transition-colors cursor-pointer">+91 73490 34720</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <span className="hover:text-white transition-colors cursor-pointer">info@navadurgaelectricals.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <span className="leading-relaxed">No. 433, 11th Block, 2nd 'D' Main, Second Stage, Nagarabhavi, Bangalore - 560072.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3"
        >
          <div>&copy; {new Date().getFullYear()} Navadurga Electricals. All Rights Reserved.</div>
          <div className="flex items-center gap-4 font-medium mr-8 lg:mr-32">
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)} className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
