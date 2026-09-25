import React from 'react';
import PageHeader from './PageHeader';
import pwdImg from '../assets/pwd_civil_contractor.jpg';
import bgImg from '../assets/pwd_civil_contractor.jpg';


export default function PwdCivilContractorService() {
  return (
    <div id="service-pwd-civil" className="bg-white py-16 border-t border-slate-200">
      <PageHeader title="PWD Civil Contractor" breadcrumb="Services / PWD Civil" bgImage={bgImg} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We carry out comprehensive Civil Maintenance Services for PWD, government, commercial, and industrial facilities, ensuring structural integrity, safety, and longevity of the infrastructure.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Building Repair & Restoration</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Road & Pavement Maintenance</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Waterproofing Solutions</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Structural Reinforcement</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Drainage & Pipeline Overhaul</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Routine Civil Upkeep</li>
            </ul>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm">
              <img src={pwdImg} alt="PWD Civil Construction Site" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans']">Comprehensive Scope of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Comprehensive Building Maintenance</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expertise in executing large-scale repair and maintenance works for government offices, educational institutions, and hospitals. This includes painting, masonry repairs, and roof restoration.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Infrastructure Upkeep</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Regular maintenance of public infrastructure like state highways, retaining walls, and urban road networks to ensure they remain safe and functional year-round.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Our Execution Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Detailed evaluation of structural damages and maintenance needs.' },
              { step: '02', title: 'Maintenance Planning', desc: 'Resource allocation, material sourcing, and schedule preparation.' },
              { step: '03', title: 'Execution & Repair', desc: 'Deployment of skilled teams for timely and effective repairs.' },
              { step: '04', title: 'Quality Check', desc: 'Rigorous inspection of completed works to ensure longevity.' }
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
              { q: 'Do you provide AMC (Annual Maintenance Contracts) for civil works?', a: 'Yes, we offer comprehensive AMCs for regular upkeep of commercial and government buildings.' },
              { q: 'What types of maintenance projects do you handle?', a: 'We handle everything from minor structural repairs and waterproofing to large-scale pavement and infrastructure restoration.' },
              { q: 'Are you authorized for government PWD maintenance?', a: 'Absolutely. We are a Govt. authorized contractor fully licensed to execute PWD civil maintenance projects.' }
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
