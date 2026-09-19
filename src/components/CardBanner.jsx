import React from 'react';
import Logo from './Logo';
import { Mail, MapPin, Zap, FileText } from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';

export default function CardBanner({ onOpenQuoteModal }) {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-2xl shadow-blue-900/10 relative overflow-hidden group my-8">
      {/* Background Subtle Gradient Wave */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/60 via-sky-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-2xl pointer-events-none" />

      {/* Card Header Top Row */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-slate-100 gap-4 relative z-10">
        {/* CEO Title */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-xl bg-slate-900 text-white shadow-md">
            <span className="text-sm font-black text-white font-['Plus_Jakarta_Sans'] tracking-wide">CHETHAN</span>
            <span className="text-xs text-sky-400 font-extrabold ml-2">C.E.O</span>
          </div>
        </div>

        {/* Spiritual Blessing Line */}
        <div className="px-5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#004899] text-xs sm:text-sm font-bold tracking-wide text-center">
          || Sri Guru Rayara Krupe ||
        </div>

        {/* Quick Phone Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:7338559119"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all text-xs font-bold shadow-sm"
          >
            <PhoneCallIcon className="w-3.5 h-3.5" />
            <span>7338559119</span>
          </a>
          <a
            href="https://wa.me/917349034720"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all text-xs font-bold shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>7349034720</span>
          </a>
        </div>
      </div>

      {/* Logo & Tagline */}
      <div className="my-8 text-center space-y-4 relative z-10">
        <div className="flex justify-center">
          <Logo size="large" />
        </div>

        {/* Tagline Pill */}
        <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 shadow-md text-white text-sm sm:text-base font-bold tracking-wide">
          (Govt. Authorised Class I Electrical Contractor)
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-slate-50 border border-blue-100 relative z-10">
        <div className="md:col-span-3 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Zap className="w-10 h-10 animate-spark" />
          </div>
        </div>

        <div className="md:col-span-9 space-y-2">
          <h4 className="text-xs font-bold text-blue-700 uppercase tracking-widest flex items-center gap-2">
            <span>Our Key Services:</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-800 font-semibold">
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>HT/LT Electrical Contractor</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>Plumbing Contractor</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>M.E.P. Maintenance Work</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>M.E.P. Designing</span>
            </li>
            <li className="flex items-center gap-2 sm:col-span-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>M.E.P. Facility Management</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Highlight Ribbon */}
      <div className="mt-6 p-3.5 rounded-xl bg-gradient-to-r from-blue-700 via-sky-600 to-blue-700 text-white text-center text-xs sm:text-sm font-extrabold tracking-wide shadow-md relative z-10">
        (We Carried out All Building M.E.P. Erection and Maintenance work)
      </div>

      {/* Address & GST Footer */}
      <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs text-slate-700 relative z-10">
        <div className="md:col-span-6 flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <span className="font-medium">
            <strong className="text-slate-900">No. 433, 11th Block, 2nd 'D' Main</strong>, Second Stage, Nagarabhavi, Bangalore-560072.
          </span>
        </div>

        <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600 shrink-0" />
            <a href="mailto:electricalsnavadurga@gmail.com" className="hover:text-blue-600 font-bold text-slate-900">
              electricalsnavadurga@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 font-mono text-[11px] font-bold">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>GSTIN: 29DWLPS9412J1ZP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
