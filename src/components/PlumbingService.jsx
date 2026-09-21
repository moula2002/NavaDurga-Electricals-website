import React from 'react';
import PageHeader from './PageHeader';
import plumbingImg from '../assets/gallery/plumbing_system.png';
import bgImg from '../assets/plumbing_pipes_1789710473426.png';


export default function PlumbingService() {
  return (
    <div id="service-plumbing" className="bg-slate-50 py-16 border-t border-slate-200">
      <PageHeader title="Plumbing Contractor" breadcrumb="Services / Plumbing" bgImage={bgImg} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We provide reliable plumbing solutions for buildings, industries and infrastructure projects.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Water Supply System</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Drainage & Sanitary Works</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Fire Fighting Plumbing</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Installation & Maintenance</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Commercial & Residential Projects</li>
            </ul>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm">
              <img src={plumbingImg} alt="Plumbing Contractor Pipes" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans']">Comprehensive Scope of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Water Supply & Drainage</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Design and execution of internal and external water supply systems, hydro-pneumatic pumping systems, RO plants, and comprehensive drainage systems including STP connections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Sanitary & Fixtures</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Installation of high-end sanitary fixtures, CP fittings, and concealed flush tanks for premium commercial buildings and residential apartments with precise alignment and leak-proof testing.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Our Execution Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Plumbing Layout Design', desc: 'Creating optimal routing plans for water and drainage lines.' },
              { step: '02', title: 'Material Selection', desc: 'Procurement of high-grade UPVC, CPVC, and cast iron pipes.' },
              { step: '03', title: 'Concealed & Open Piping', desc: 'Precision installation with proper sloping and clamping.' },
              { step: '04', title: 'Pressure Testing', desc: 'Hydro-testing all lines to ensure zero leakage before handover.' }
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
              { q: 'Do you handle commercial multi-story plumbing?', a: 'Yes, we specialize in high-rise building plumbing, including pressure boosting systems and gravity-fed networks.' },
              { q: 'What materials do you use?', a: 'We use industry-leading brands for CPVC, UPVC, and PPR pipes, ensuring durability and compliance with standards.' },
              { q: 'Do you design STP and WTP systems?', a: 'Yes, we integrate Sewage Treatment Plants (STP) and Water Treatment Plants (WTP) into the main plumbing architecture.' }
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
