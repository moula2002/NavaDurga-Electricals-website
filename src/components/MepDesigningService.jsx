import React from 'react';
import PageHeader from './PageHeader';
import mepBlueprintImg from '../assets/mep_blueprint_1789710498568.png';
import bgImg from '../assets/mep_blueprint_1789710498568.png';


export default function MepDesigningService() {
  return (
    <div id="service-mep-design" className="bg-slate-50 py-16 border-t border-slate-200">
      <PageHeader title="MEP Designing" breadcrumb="Services / MEP Designing" bgImage={bgImg} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We provide professional MEP designing solutions using modern tools and industry standards.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Electrical System Design</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Plumbing System Design</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> HVAC System Design</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Energy Efficient Solutions</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Compliance with Industry Standards</li>
            </ul>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm">
              <img src={mepBlueprintImg} alt="MEP Blueprint Design" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans']">Comprehensive Scope of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Electrical Load & Layouts</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Precise calculation of electrical load, designing of single line diagrams (SLD), and comprehensive CAD layouts for lighting, power, and earthing systems tailored for high-efficiency operation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Plumbing & HVAC Schematics</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Detailed blueprints for water supply sizing, drainage slopes, STP integration, and HVAC ducting layouts using the latest CAD and BIM modeling software for clash-free execution.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Our Execution Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Requirement Gathering', desc: 'Understanding architectural constraints and client utility needs.' },
              { step: '02', title: 'Drafting & Load Calculation', desc: 'Creating initial schematics and sizing calculations.' },
              { step: '03', title: 'Clash Detection', desc: 'Using 3D modeling to prevent structural and utility clashes.' },
              { step: '04', title: 'Good for Construction', desc: 'Issuing finalized GFC (Good for Construction) drawings.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative z-10 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-black text-blue-100 mb-4">{item.step}</div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: 'Do you provide BOQ (Bill of Quantities) along with designs?', a: 'Yes, our design package includes comprehensive BOQs to help you estimate precise project costs.' },
              { q: 'What software do you use for designing?', a: 'We use industry-standard software like AutoCAD, Revit MEP, and ETABS for accurate and scalable designing.' },
              { q: 'Can you get the designs approved by local authorities?', a: 'Yes, our designs are created keeping CEIG, BESCOM, and BBMP guidelines in mind, ensuring swift approvals.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
