import React from 'react';
import PageHeader from './PageHeader';
import substationImg from '../assets/substation_image_1789710679202.png';
import bgImg from '../assets/service_mgmt.png';


export default function FacilityManagementService() {
  return (
    <div id="service-facility" className="bg-white py-16 border-t border-slate-200">
      <PageHeader title="Facility Management" breadcrumb="Services / Facility Management" bgImage={bgImg} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              End-to-end facility management services to keep your premises safe, efficient and well-maintained.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Electrical & Plumbing Support</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Building Maintenance</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Housekeeping Services</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Security & Surveillance Support</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Customized AMC Plans</li>
            </ul>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm">
              <img src={substationImg} alt="Facility Management" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans']">Comprehensive Scope of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Integrated Utility Management</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete oversight and operation of building utilities including HT/LT panels, DG sets, HVAC plants, STP/WTP, and fire-fighting systems ensuring zero-downtime operations.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Manpower Deployment</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Provisioning of highly trained and certified on-site engineers, skilled technicians, and support staff to handle day-to-day operations and preventive maintenance schedules.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Our Execution Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Site Handover Assessment', desc: 'Detailed audit of existing infrastructure before taking over.' },
              { step: '02', title: 'SOP Development', desc: 'Creating Standard Operating Procedures for all equipment.' },
              { step: '03', title: 'Resource Deployment', desc: 'Deploying qualified engineers and setting up a control desk.' },
              { step: '04', title: 'Daily Monitoring', desc: 'Continuous tracking of utility consumption and system health.' }
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
              { q: 'What types of properties do you manage?', a: 'We manage large IT parks, commercial high-rises, industrial factories, and premium residential townships.' },
              { q: 'Are your on-site technicians certified?', a: 'Yes, all our deployed personnel are strictly verified and hold necessary technical certifications and licenses (like wireman license).' },
              { q: 'Do you guarantee uptime?', a: 'Yes, our facility management SLAs are designed to ensure 99.9% uptime for critical MEP infrastructure.' }
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
