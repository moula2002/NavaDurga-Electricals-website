import React, { useState } from 'react';
import PageHeader from './PageHeader';
import bgImg from '../assets/building_facade_1789710711412.png';
import imgSubstationPanel from '../assets/gallery/ht_substation_panel.jpg';
import imgIndustrialWiring from '../assets/projects/facility_team.jpg';
import imgCpvcPiping from '../assets/gallery/cpvc_piping.jpg';
import imgHvacDucting from '../assets/gallery/hvac_mep_ducting.jpg';
import imgSiteInspection from '../assets/gallery/site_inspection.jpg';
import imgTechnicians from '../assets/gallery/licensed_technicians.jpg';
import imgTransformer from '../assets/gallery/transformer_testing.jpg';
import imgHydroPumps from '../assets/gallery/hydro_pumps.jpg';
import imgBlueprints from '../assets/gallery/mep_blueprints.jpg';
import imgCableLaying from '../assets/gallery/cable_laying.jpg';
import imgFacilityManagement from '../assets/gallery/facility_management.png';
import imgMepSystem from '../assets/gallery/mep_system.png';
import imgElectricalWorks from '../assets/gallery/electrical_works.png';
import imgPlumbingSystem from '../assets/gallery/plumbing_system.png';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'electrical', label: 'Electrical' },
    { id: 'plumbing', label: 'Plumbing' },
    { id: 'mep', label: 'MEP' },
    { id: 'site', label: 'Site Work' },
    { id: 'team', label: 'Team' },
  ];

  const galleryItems = [
    { id: 1, title: 'HT Substation Panel', category: 'electrical', image: imgSubstationPanel },
    { id: 2, title: 'Industrial Wiring Erection', category: 'electrical', image: imgIndustrialWiring },
    { id: 3, title: 'CPVC Water Riser Piping', category: 'plumbing', image: imgCpvcPiping },
    { id: 4, title: 'HVAC & MEP Ducting', category: 'mep', image: imgHvacDucting },
    { id: 5, title: 'Site Inspection & Audits', category: 'site', image: imgSiteInspection },
    { id: 6, title: 'On-site Licensed Technicians', category: 'team', image: imgTechnicians },
    { id: 7, title: 'Substation Transformer Testing', category: 'electrical', image: imgTransformer },
    { id: 8, title: 'Building Hydro-Pneumatic Pumps', category: 'plumbing', image: imgHydroPumps },
    { id: 9, title: 'MEP Engineering Blueprints', category: 'mep', image: imgBlueprints },
    { id: 10, title: 'Commercial Fitout Cable Laying', category: 'site', image: imgCableLaying },
    { id: 11, title: 'Commercial Facility Management', category: 'team', image: imgFacilityManagement },
    { id: 12, title: 'Advanced MEP Systems', category: 'mep', image: imgMepSystem },
    { id: 13, title: 'Industrial Electrical Works', category: 'electrical', image: imgElectricalWorks },
    { id: 14, title: 'Precision Plumbing System', category: 'plumbing', image: imgPlumbingSystem },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="bg-white border-t border-slate-200">
      <PageHeader title="Gallery" breadcrumb="Gallery" bgImage={bgImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-slate-200 shadow-sm bg-slate-100 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                <span className="text-[11px] font-bold text-white leading-tight">{item.title}</span>
                <span className="text-[9px] font-semibold text-cyan-300 uppercase tracking-wider">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
