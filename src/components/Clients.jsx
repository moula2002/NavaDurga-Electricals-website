import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from './PageHeader';
import bgImg from '../assets/building_facade_1789710711412.png';
import infosysLogo from '../assets/clients/infosys.png';
import wiproLogo from '../assets/clients/wipro.png';
import halLogo from '../assets/clients/hal.png';
import bemlLogo from '../assets/clients/beml.png';
import kptclLogo from '../assets/clients/kptcl.png';
import belLogo from '../assets/clients/bel.png';
import bhelLogo from '../assets/clients/bhel.png';
import ltLogo from '../assets/clients/lt.png';
import embassyLogo from '../assets/clients/embassy.png';
import phoenixLogo from '../assets/clients/phoenix.png';
import prestigeLogo from '../assets/clients/prestige.png';
import brigadeLogo from '../assets/clients/brigade.png';
import gokLogo from '../assets/clients/gok.svg';
import railwaysLogo from '../assets/clients/railways.svg';
import drdoLogo from '../assets/clients/drdo.svg';
import bioconLogo from '../assets/clients/biocon.svg';

export default function Clients({ isHome = false }) {
  const clients = [
    { name: 'Infosys', logo: infosysLogo },
    { name: 'Wipro', logo: wiproLogo },
    { name: 'HAL', logo: halLogo },
    { name: 'BEML', logo: bemlLogo },
    { name: 'KPTCL', logo: kptclLogo },
    { name: 'Bharat Electronics', logo: belLogo },
    { name: 'BHEL', logo: bhelLogo },
    { name: 'L&T Construction', logo: ltLogo },
    { name: 'Embassy Group', logo: embassyLogo },
    { name: 'Phoenix Group', logo: phoenixLogo },
    { name: 'Prestige Group', logo: prestigeLogo },
    { name: 'Brigade Group', logo: brigadeLogo },
    { name: 'Government of Karnataka', logo: gokLogo },
    { name: 'Indian Railways', logo: railwaysLogo },
    { name: 'DRDO', logo: drdoLogo },
    { name: 'Biocon', logo: bioconLogo },
  ];

  return (
    <section id="clients" className="bg-slate-50 border-t border-slate-200 overflow-hidden">
      {!isHome && <PageHeader title="Our Clients" breadcrumb="Clients" bgImage={bgImg} />}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? 'py-12' : 'py-16'}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-slate-600 text-sm font-medium">
            We are proud to serve industry leaders, commercial developers, and high-rise builders across Bangalore and South India.
          </p>
        </motion.div>

        {isHome ? (
          <div className="relative overflow-hidden w-full flex py-4">
            {/* Left/Right Fade Masks */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex space-x-6 min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center group w-56 h-32 hover:shadow-md transition-all"
                  style={{ borderRadius: '25px 8px 25px 8px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-sm font-bold text-slate-800 text-center">{client.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center group hover:-translate-y-1 hover:shadow-md transition-all"
                style={{ borderRadius: '25px 8px 25px 8px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-sm font-bold text-slate-800 text-center">{client.name}</span>
              </motion.div>
            ))}
          </div>
        )}

        {!isHome && (
          <>
            {/* Success Metrics */}
            <div className="mt-24 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { stat: '100+', label: 'Projects Completed' },
                  { stat: '50+', label: 'Maintenance Contracts' },
                  { stat: '15+', label: 'Years of Experience' },
                  { stat: '0', label: 'Safety Incidents' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-600 p-6 rounded-2xl text-center text-white shadow-lg">
                    <div className="text-3xl font-black font-['Plus_Jakarta_Sans'] mb-1">{item.stat}</div>
                    <div className="text-xs font-semibold opacity-90 uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-24">
              <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">What Our Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { quote: "Navadurga Electricals executed our entire HT/LT installation flawlessly. Their adherence to safety and timelines is commendable.", client: "Project Manager, L&T Construction" },
                  { quote: "We rely on them for 24/7 MEP maintenance. They are quick to respond and always have the right technical solutions.", client: "Facility Head, Sobha Developers" },
                  { quote: "The plumbing and electrical designs provided were highly detailed and helped us get CEIG approvals without any hassle.", client: "Director, Brigade Group" }
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative">
                    <div className="text-blue-200 text-4xl font-serif absolute top-4 left-4">"</div>
                    <p className="text-slate-600 text-sm leading-relaxed mt-4 italic mb-4 relative z-10">
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-slate-100 pt-4">
                      <h4 className="font-bold text-slate-900 text-xs">{testimonial.client}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
