import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from './PageHeader';
import bgImg from '../assets/substation_image_1789710679202.png';
import imgCommercial from '../assets/projects/commercial_building.jpg';
import imgIndustrial from '../assets/projects/industrial_electrical.jpg';
import imgResidential from '../assets/projects/residential_apartment.jpg';
import imgInstitutional from '../assets/projects/institutional_project.jpg';
import imgSubstation from '../assets/projects/ht_substation.jpg';
import imgMep from '../assets/projects/mep_installation.jpg';
import imgPlumbing from '../assets/projects/plumbing_work.jpg';
import imgFacility from '../assets/projects/facility_management.jpg';


export default function Portfolio({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'residential', label: 'Residential' },
    { id: 'institutional', label: 'Institutional' },
  ];

  const projects = [
    { id: 1, title: 'Commercial Building', category: 'commercial', location: 'Bangalore', image: imgCommercial },
    { id: 2, title: 'Industrial Electrical Work', category: 'industrial', location: 'Tumkur', image: imgIndustrial },
    { id: 3, title: 'Residential Apartment', category: 'residential', location: 'Bangalore', image: imgResidential },
    { id: 4, title: 'Institutional Project', category: 'institutional', location: 'Karnataka', image: imgInstitutional },
    { id: 5, title: 'HT Substation', category: 'industrial', location: 'Mysore', image: imgSubstation },
    { id: 6, title: 'MEP Installation', category: 'commercial', location: 'Bangalore', image: imgMep },
    { id: 7, title: 'Plumbing Work', category: 'residential', location: 'Hassan', image: imgPlumbing },
    { id: 8, title: 'Facility Management', category: 'commercial', location: 'Bangalore', image: imgFacility },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="bg-slate-50 border-t border-slate-200 overflow-hidden">
      <PageHeader title="Our Projects" breadcrumb="Projects" bgImage={bgImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="bg-white overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between cursor-pointer"
                style={{ borderRadius: '40px 10px 40px 10px' }}
              >
                <div className="h-40 overflow-hidden bg-slate-100 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1 bg-white relative z-10">
                  <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
