import React from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';

export default function DetailModal({ isOpen, onClose, data, type }) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10 mb-6">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            {type === 'service' ? 'Service Specifications' : 'Contract Details'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
            {data.title}
          </h3>
          {data.subtitle && (
            <p className="text-sm font-bold text-blue-600">{data.subtitle}</p>
          )}
          {data.client && (
            <p className="text-xs text-slate-500 font-mono font-medium">Location / Client: {data.client}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
          {data.description}
        </p>

        {/* Scope Checklist */}
        {data.features && (
          <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Contract Scope & Deliverables</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CEO Quick Call Banner */}
        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold text-slate-900">Direct Consultation with Chethan (C.E.O)</div>
            <div className="text-xs text-slate-600">Call for immediate site inspection & estimate</div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:7338591198"
              className="px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-blue-700 transition-colors"
            >
              <PhoneCallIcon className="w-3.5 h-3.5" />
              <span>73385 91198</span>
            </a>
            <a
              href="https://wa.me/917349034720"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#20ba5a] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-200"
          >
            Close
          </button>
          <Link
            to="/contact"
            onClick={onClose}
            className="glow-button inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
          >
            <span>Request Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
