import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Zap, Droplets, Wrench, Compass, Building2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from './PageHeader';

import imgElectrification from '../assets/service_electrification.png';
import imgPlumbing from '../assets/plumbing_pipes_1789710473426.png';
import imgMgmt from '../assets/service_mgmt.png';
import imgDesign from '../assets/service_design.png';
import imgSubstation from '../assets/substation_image_1789710679202.png';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'electrical', label: 'HT/LT Electrical' },
    { id: 'plumbing', label: 'Plumbing Works' },
    { id: 'mep_maintenance', label: 'M.E.P. Maintenance' },
    { id: 'mep_designing', label: 'M.E.P. Designing' },
    { id: 'facility_mgmt', label: 'M.E.P. Facility Management' },
  ];

  const officialServices = [
    {
      id: 'ht-lt',
      category: 'electrical',
      title: 'HT/LT Electrical Contractor',
      subtitle: 'Govt. Authorised Class-I Transformer, Substation & Power Distribution',
      image: imgElectrification,
      icon: Zap,
      path: '/services/ht-lt',
      features: ['Transformer Installation', 'Substation Erection', 'HT Switchgear & Cable Laying']
    },
    {
      id: 'plumbing',
      category: 'plumbing',
      title: 'Plumbing Contractor',
      subtitle: 'Commercial & Industrial Heavy Duty Piping Systems',
      image: imgPlumbing,
      icon: Droplets,
      path: '/services/plumbing',
      features: ['Water Supply & Drainage', 'Pumping Station Lines', 'Sanitary Installations']
    },
    {
      id: 'mep-maintenance',
      category: 'mep_maintenance',
      title: 'M.E.P. Maintenance Work',
      subtitle: '24/7 Preventive & Emergency MEP AMC Maintenance',
      image: imgMgmt,
      icon: Wrench,
      path: '/services/mep-maintenance',
      features: ['Routine MEP Audits', 'Electrical & HVAC Care', 'Emergency Breakdown Repair']
    },
    {
      id: 'mep-designing',
      category: 'mep_designing',
      title: 'M.E.P. Designing',
      subtitle: 'CAD Blueprints, Electrical Load Schemes & Mechanical Layouts',
      image: imgDesign,
      icon: Compass,
      path: '/services/mep-designing',
      features: ['Building Electrical Schemes', 'Plumbing & Drainage CAD', 'Lighting & Power Layouts']
    },
    {
      id: 'facility-management',
      category: 'facility_mgmt',
      title: 'M.E.P. Facility Management',
      subtitle: 'Complete Building Utilities & Infrastructure Management',
      image: imgSubstation,
      icon: Building2,
      path: '/services/facility-management',
      features: ['Building Management Systems', 'On-Site Engineering Staff', 'Power Quality Optimization']
    }
  ];

  const filteredServices = activeTab === 'all'
    ? officialServices
    : officialServices.filter(s => s.category === activeTab);

  const location = useLocation();
  const isPage = location.pathname === '/services';

  return (
    <section id="services" className={`bg-slate-50 border-slate-200 overflow-hidden ${!isPage ? 'border-t py-16' : 'pb-16'}`}>
      {isPage && (
        <PageHeader title="Our Services" breadcrumb="Services" bgImage={imgDesign} />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2 font-['Plus_Jakarta_Sans']">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
              What We Do Best
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all text-xs font-bold shrink-0 self-start md:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Tab Navigation Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-b border-slate-200 mb-10"
        >
          <nav className="flex space-x-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-1 text-sm font-semibold transition-colors whitespace-nowrap border-b-2 ${
                    isActive
                      ? 'border-blue-600 text-blue-600 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </motion.div>

        {/* 5 Official Service Cards Grid */}
        <div className="relative">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((item) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    key={item.id}
                    className="group flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all overflow-hidden justify-between"
                    style={{ borderRadius: '40px 10px 40px 10px' }}
                  >
                    <div>
                      {/* Card Top Image Block */}
                      <div className="relative rounded-t-2xl overflow-hidden bg-slate-100 aspect-[16/10]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Link
                            to={item.path}
                            className="px-4 py-2 rounded-lg bg-white text-slate-900 font-bold text-xs shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            Explore Service Specs →
                          </Link>
                        </div>
                      </div>

                      {/* Card Content & Icon Header */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0 shadow-xs">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors font-['Plus_Jakarta_Sans']">
                              {item.title}
                            </h3>
                            <p className="text-[11px] text-slate-500 font-semibold">{item.subtitle}</p>
                          </div>
                        </div>

                        {/* Service Feature Highlights */}
                        <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                          {item.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="p-5 pt-0">
                      <Link
                        to={item.path}
                        className="w-full py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-xs font-bold flex items-center justify-center gap-1.5 group/btn"
                      >
                        <span>View Full Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Decorative Curvy Arrow in the Empty Right Space */}
          {!isPage && (
            <div className="hidden lg:flex flex-col items-center justify-center absolute right-8 bottom-12 opacity-70 pointer-events-none">
              <span className="text-[11px] font-bold text-blue-500 tracking-wider uppercase mb-1">
                Scroll Down
              </span>
              <svg
                className="w-20 h-28 text-blue-500 animate-bounce"
                viewBox="0 0 80 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              >
                <path d="M 20 10 Q 70 40 40 100" />
                <path d="M 28 88 L 40 100 L 52 88" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
