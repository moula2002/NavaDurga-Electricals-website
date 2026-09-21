import React from 'react';
import PageHeader from './PageHeader';
import substationImg from '../assets/gallery/mep_system.png';
import bgImg from '../assets/electrician_hero_1789710416079.png';


export default function MepMaintenanceService() {
  return (
    <div id="service-mep-maint" className="bg-white py-16 border-t border-slate-200">
      <PageHeader title="MEP Maintenance Work" breadcrumb="Services / MEP Maintenance" bgImage={bgImg} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Comprehensive MEP maintenance services to ensure safe, efficient and uninterrupted operation.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Electrical Maintenance</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Plumbing Maintenance</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> HVAC & Fire Safety Systems</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Preventive & Breakdown Maintenance</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Annual Maintenance Contracts (AMC)</li>
            </ul>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm">
              <img src={substationImg} alt="MEP Maintenance" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans']">Comprehensive Scope of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Preventive Maintenance</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scheduled audits, thermal scanning of panels, cleaning of filters, and routine health checks of electrical, plumbing, and HVAC systems to prevent unexpected breakdowns and extend equipment lifespan.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Breakdown Repair (24/7)</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rapid response team for emergency power failures, critical plumbing leaks, or HVAC malfunctioning. We ensure minimum downtime for your commercial operations or residential complexes.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Our Execution Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Asset Tagging', desc: 'Cataloging all MEP assets to create a baseline for maintenance.' },
              { step: '02', title: 'Schedule Planning', desc: 'Creating a custom AMC calendar tailored to equipment usage.' },
              { step: '03', title: 'Routine Audits', desc: 'Executing periodic checks and logging health parameters.' },
              { step: '04', title: 'Actionable Reports', desc: 'Providing detailed monthly MIS reports with performance metrics.' }
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
              { q: 'What is included in an Annual Maintenance Contract (AMC)?', a: 'Our AMC includes regular preventive maintenance visits, priority breakdown support, and detailed MIS reporting for all electrical, plumbing, and fire safety systems.' },
              { q: 'Do you offer 24/7 support?', a: 'Yes, our emergency response team is available 24/7 for critical breakdown situations.' },
              { q: 'Can you handle existing setups not installed by you?', a: 'Absolutely. We conduct an initial health audit of your existing systems and take over the maintenance seamlessly.' }
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
