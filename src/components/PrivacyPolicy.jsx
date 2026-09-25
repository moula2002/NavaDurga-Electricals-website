import React from 'react';
import PageHeader from './PageHeader';
import bgImg from '../assets/building_facade_1789710711412.png';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Privacy Policy" breadcrumb="Privacy Policy" bgImage={bgImg} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 space-y-8 font-medium">
        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">1. Introduction</h2>
          <p>
            Welcome to Navadurga Electricals. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">2. The Data We Collect About You</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">3. How We Use Your Personal Data</h2>
          <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (such as providing an electrical quotation).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">5. Contact Details</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br /><br />
            <strong>Navadurga Electricals</strong><br />
            No. 433, 11th Block, 2nd 'D' Main, Second Stage, Nagarabhavi, Bangalore - 560072.<br />
            Email: info@navadurgaelectricals.com<br />
            Phone: +91 73385 91198
          </p>
        </section>
      </div>
    </div>
  );
}
