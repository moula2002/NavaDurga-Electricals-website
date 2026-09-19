import React from 'react';
import PageHeader from './PageHeader';
import bgImg from '../assets/building_facade_1789710711412.png';

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Terms & Conditions" breadcrumb="Terms & Conditions" bgImage={bgImg} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 space-y-8 font-medium">
        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">2. Service Description</h2>
          <p>
            Navadurga Electricals provides electrical contracting, MEP design, plumbing, and facility management services. Quotations and estimates provided via this website or over phone/email are subject to final site inspection and official contract agreements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">3. Intellectual Property Rights</h2>
          <p>
            The website and its original content, features, and functionality are owned by Navadurga Electricals and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall Navadurga Electricals, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, specifically the jurisdiction of Bangalore, Karnataka, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
