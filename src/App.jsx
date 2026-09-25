import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import HtLtService from './components/HtLtService';
import PlumbingService from './components/PlumbingService';
import MepMaintenanceService from './components/MepMaintenanceService';
import MepDesigningService from './components/MepDesigningService';
import FacilityManagementService from './components/FacilityManagementService';
import PwdCivilContractorService from './components/PwdCivilContractorService';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Enquiry from './components/Enquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

// Home Page layout aggregating main highlights
function HomePage({ onOpenQuoteModal, onSelectProject }) {
  return (
    <>
      <Banner onOpenQuoteModal={onOpenQuoteModal} />
      <Services />
      <About />
      <Portfolio onSelectProject={onSelectProject} />
      <Clients isHome={true} />
      <Testimonials />
    </>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [modalType, setModalType] = useState('quote');

  const handleOpenQuoteModal = () => {
    setSelectedData({
      title: 'Get Official Electrical & MEP Estimate',
      subtitle: 'Govt. Authorised Class I Electrical Contractor',
      description: 'Consult directly with Chethan (C.E.O) for site inspection, HT/LT electrical load calculation, plumbing scope, or building MEP erection pricing.',
      features: [
        'Direct Consultation with CEO Chethan (7338559119)',
        'Class I Govt Licensed & Approved Contracting',
        'Transparent Quotation for HT/LT & Building MEP',
        'Official Address: Nagarabhavi, Bangalore-560072'
      ]
    });
    setModalType('quote');
    setModalOpen(true);
  };

  const handleSelectProject = (project) => {
    setSelectedData(project);
    setModalType('portfolio');
    setModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-['Inter'] relative selection:bg-blue-600 selection:text-white flex flex-col justify-between">
        {/* Fixed Top Navigation Header */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onSelectProject={handleSelectProject}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ht-lt" element={<HtLtService />} />
            <Route path="/services/plumbing" element={<PlumbingService />} />
            <Route path="/services/mep-maintenance" element={<MepMaintenanceService />} />
            <Route path="/services/mep-designing" element={<MepDesigningService />} />
            <Route path="/services/facility-management" element={<FacilityManagementService />} />
            <Route path="/services/pwd-civil-contractor" element={<PwdCivilContractorService />} />
            <Route path="/projects" element={<Portfolio onSelectProject={handleSelectProject} />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Standalone Floating Action Buttons at Bottom Right */}
        <FloatingContact />

        {/* Modal */}
        <DetailModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          data={selectedData}
          type={modalType}
        />
      </div>
    </Router>
  );
}
