import React, { useState } from 'react';
import PageHeader from './PageHeader';
import buildingBanner from '../assets/building_facade_1789710711412.png';
import bgImg from '../assets/electrical_hero_bg.png';


export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'HT/LT Electrical Contractor',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          serviceRequired: formData.projectType,
          description: formData.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', projectType: 'HT/LT Electrical Contractor', message: '' });
      } else {
        alert(data.message || 'Error submitting enquiry.');
      }
    } catch (err) {
      console.warn('Backend connection error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="bg-slate-50 border-t border-slate-200">
      <PageHeader title="Enquiry" breadcrumb="Enquiry" bgImage={bgImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          {/* Left Form */}
          <div className="md:col-span-7 p-6 sm:p-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
              Send Us Your Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-600"
                  >
                    <option>HT/LT Electrical Contractor</option>
                    <option>Plumbing Contractor</option>
                    <option>MEP Maintenance Work</option>
                    <option>MEP Designing</option>
                    <option>Facility Management</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Message*</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-md"
              >
                Submit Enquiry →
              </button>
            </form>
          </div>

          {/* Right Banner Graphic */}
          <div className="md:col-span-5 relative min-h-[300px] flex items-center justify-center p-8 bg-slate-900 text-white overflow-hidden">
            <img
              src={buildingBanner}
              alt="Navadurga Infrastructure"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10 text-center space-y-3">
              <h4 className="text-2xl sm:text-3xl font-black font-['Plus_Jakarta_Sans'] leading-tight">
                Let's Build <br /> Something Great <br /> Together
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
