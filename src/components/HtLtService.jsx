import React from 'react';
import PageHeader from './PageHeader';
import substationImg from '../assets/substation_image_1789710679202.png';
import bgImg from '../assets/service_electrification.png';


export default function HtLtService() {
  return (
    <div id="service-ht-lt" className="bg-white py-16 border-t border-slate-200">
      <PageHeader title="HT/LT Electrical Contractor" breadcrumb="Services / HT/LT" bgImage={bgImg} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We undertake HT/LT electrical installation, testing, commissioning and maintenance for industrial, commercial and residential projects.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> HT/LT Panel Installation</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Substation & Transformer Works</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Cable Laying & Termination</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Building Wirings</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Testing & Commissioning</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Annual Maintenance</li>
            </ul>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm">
              <img src={substationImg} alt="HT/LT Electrical Contractor Substation" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans']">Comprehensive Scope of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">High Tension (HT) Services</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Design and erection of HT yards, structural installations, double pole structures, and laying of HT cables. We handle everything from CEIG approvals to final commissioning of power distribution setups.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Low Tension (LT) Services</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete LT panel board installation, switchgears, DBs, internal wiring, and end-to-end power distribution for large residential complexes, commercial IT parks, and factories.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Our Execution Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Detailed analysis of load requirements and physical site constraints.' },
              { step: '02', title: 'Design & Approval', desc: 'Preparation of CAD drawings and obtaining CEIG/BESCOM approvals.' },
              { step: '03', title: 'Erection & Wiring', desc: 'Safe installation of transformers, panels, and structured cable laying.' },
              { step: '04', title: 'Testing & Handover', desc: 'Rigorous testing under load conditions followed by official handover.' }
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
              { q: 'Do you handle Govt/BESCOM approvals?', a: 'Yes, as a Govt. Authorised Class I contractor, we handle end-to-end liaison work including CEIG approvals and BESCOM sanctioning.' },
              { q: 'What safety standards do you follow?', a: 'We strictly adhere to IS (Indian Standards) and IE (Indian Electricity) rules for all our HT/LT installations ensuring 100% compliance and safety.' },
              { q: 'Do you provide AMC after installation?', a: 'Yes, we offer comprehensive Annual Maintenance Contracts (AMC) to ensure your substations and panels run without breakdown.' }
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
