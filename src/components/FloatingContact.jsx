import React from 'react';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Call Icon Button */}
      <a
        href="tel:7338591198"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-600/40 hover:bg-blue-700 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Call Us Directly"
      >
        <PhoneCallIcon className="w-5 h-5 text-white" />
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
          Call Us (+91 73385 91198)
        </span>
      </a>

      {/* Official WhatsApp Icon Button */}
      <a
        href="https://wa.me/917349034720"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/40 hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
          WhatsApp Inquiry
        </span>
      </a>
    </div>
  );
}
