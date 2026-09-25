import React from 'react';
import PageHeader from './PageHeader';
import solarImg from '../assets/solar_inverter_installation.jpg';

export default function SolarInverterService() {
  return (
    <div id="service-solar-inverter" className="bg-white py-16 border-t border-slate-200">
      <PageHeader 
        title="Solar & Inverter Installations" 
        breadcrumb="Services / Solar & Inverter" 
        bgImage={solarImg} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We deliver turnkey Solar Panel Power Systems and Heavy-Duty Solar Inverter Installation services for commercial, industrial, residential, and government projects. From site feasibility audits to net-metering approvals and battery backup setups, we ensure clean, sustainable, and cost-effective energy solutions.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> On-Grid, Off-Grid & Hybrid Solar Systems</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Commercial & Industrial Solar Power Plants</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> High-Efficiency Solar Inverters & Lithium/Tubular Battery Setup</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> BESCOM / Government Net-Metering Approval Assistance</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Rooftop Solar Panel Structure Fabrication & Cabling</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">✓</span> Solar Health Check & Preventive Maintenance (AMC)</li>
            </ul>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm">
              <img src={solarImg} alt="Solar and Inverter Installation" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans']">Comprehensive Scope of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Solar PV Rooftop Power Plants</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Design and installation of high-yield Mono-PERC / Bifacial solar panels for commercial roofs, factories, institutional buildings, and apartment complexes. Optimized stringing and surge protection to maximize generation.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Inverter & Energy Backup Systems</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete installation of string inverters, central inverters, micro-inverters, and heavy-duty industrial UPS systems. Integration with advanced battery storage for uninterrupted 24/7 power backup.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Our Execution Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Solar Audit', desc: 'Roof shadow analysis, load calculation, and ROI feasibility study.' },
              { step: '02', title: 'Custom Engineering', desc: 'Selecting optimal panel capacity, inverter rating, and mounting design.' },
              { step: '03', title: 'Installation & Cabling', desc: 'Precision structure mounting, electrical wiring, and inverter commissioning.' },
              { step: '04', title: 'Grid Sync & Approval', desc: 'Net-metering installation, DISCOM sync, and safety testing.' }
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
              { 
                q: 'What is the difference between On-Grid and Off-Grid solar systems?', 
                a: 'On-Grid solar connects directly to the electricity grid and exports excess power via net-metering. Off-Grid solar uses battery storage to provide standalone power independent of the power grid.' 
              },
              { 
                q: 'Do you assist with DISCOM / BESCOM net-metering approvals?', 
                a: 'Yes! We handle the end-to-end documentation, testing, and approval process with local electricity boards (BESCOM, etc.) for seamless net-meter synchronization.' 
              },
              { 
                q: 'What capacity solar and inverter system is required for my facility?', 
                a: 'Our engineering team conducts a thorough load audit of your monthly electricity consumption to design a customized system capacity (e.g., 5kW to 500kW+) tailored to your exact energy demands.' 
              },
              { 
                q: 'Do you offer AMC for solar panel maintenance and cleaning?', 
                a: 'Yes, we provide Annual Maintenance Contracts (AMC) that cover regular solar panel cleaning, inverter diagnostics, cable health checks, and performance monitoring.' 
              }
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
