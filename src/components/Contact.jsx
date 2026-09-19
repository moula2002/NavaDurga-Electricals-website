import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageHeader from './PageHeader';
import { Phone, Mail, MapPin, FileText, Send, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';
import bgImg from '../assets/electrician_hero_1789710416079.png';


export default function Contact() {
  const form = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'HT/LT Electrical Contractor',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // NOTE: Replace these strings with your actual EmailJS credentials
      await emailjs.sendForm(
        'service_ni2jqa6',
        'template_or5yklj',
        form.current,
        '1z0TW7uHFzIIwvJP5'
      );
      
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'HT/LT Electrical Contractor',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-slate-50 border-t border-slate-200">
      <PageHeader title="Contact Us" breadcrumb="Contact" bgImage={bgImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Contact Information & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-2">
                Get In Touch
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Connect directly with our engineering management for site visits, official quotations, or project tenders.
              </p>
            </div>

            <div className="space-y-3.5 text-xs font-semibold text-slate-700">
              <a href="tel:7338559119" className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-500 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <PhoneCallIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Call Us Directly</div>
                  <div className="text-sm font-black text-slate-900">7338559119</div>
                </div>
              </a>

              <a href="https://wa.me/917349034720" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">WhatsApp Inquiry</div>
                  <div className="text-sm font-black text-emerald-600">7349034720</div>
                </div>
              </a>

              <a href="mailto:electricalsnavadurga@gmail.com" className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-500 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Official Email</div>
                  <div className="text-xs font-bold text-slate-900">electricalsnavadurga@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Registered Office</div>
                  <div className="text-xs font-medium text-slate-800 leading-snug">
                    No. 433, 11th Block, 2nd 'D' Main, Second Stage, Nagarabhavi, Bangalore - 560072.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 font-mono text-[11px] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <span>GSTIN : <strong className="text-blue-600 font-bold">29DWLPS9412J1ZP</strong></span>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-slate-900 rounded-2xl p-6 text-white shadow-lg">
                <h4 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Business Hours</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-400">Monday - Saturday</span>
                    <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between text-slate-500">
                    <span>Sunday</span>
                    <span>Closed (Emergency Only)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you for reaching out. Chethan (C.E.O) or our technical project team will respond to your query shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors mt-4 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
                      Send Us A Message
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Fill out the form below and we will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-blue-600 focus:bg-white focus:outline-none"
                      >
                        <option>HT/LT Electrical Contractor</option>
                        <option>Plumbing Contractor</option>
                        <option>MEP Maintenance Work</option>
                        <option>MEP Designing</option>
                        <option>Facility Management</option>
                        <option>Building MEP Erection</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Message / Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your requirements or site details..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans'] text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'Do you charge for site visits and quotations?', a: 'Initial site visits and high-level estimations are generally free. Detailed BOQ preparations might incur a nominal charge which is adjusted against the final project cost.' },
              { q: 'How fast can your team deploy for an emergency repair?', a: 'For our AMC clients, we guarantee a response time of under 2 hours for critical breakdowns in the Bangalore region.' },
              { q: 'Do you take up projects outside Karnataka?', a: 'While our primary operations are in Karnataka, we do undertake large-scale commercial and industrial projects across South India.' },
              { q: 'What is the typical warranty period for your work?', a: 'We standardly provide a 1-year defect liability period (DLP) on our workmanship, with material warranties as per OEM guidelines.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Embedded Location Map */}
      <div className="w-full h-[400px] md:h-[500px] bg-slate-200 relative border-t border-slate-200">
        <iframe
          title="Navadurga Electricals Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.083163773722!2d77.509893!3d12.966468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c5c99999999%3A0x9999999999999999!2sNagarabhavi%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
