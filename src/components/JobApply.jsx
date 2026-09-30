import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import { CheckCircle2, Send, Upload } from 'lucide-react';
import careerImg from '../assets/career_engineer_1789710523840.png';

export default function JobApply() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resumeUrl: '' // In a real app this might be a File object
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/jobOpenings/${jobId}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error('Job opening not found.');
          throw new Error('Failed to load job details.');
        }
        const data = await res.json();
        
        if (data.status !== 'Active') {
          throw new Error('This job opening is no longer accepting applications.');
        }

        setJob(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resumeUrl: e.target.files[0].name, resumeFile: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const submitData = new FormData();
      submitData.append('jobId', job._id);
      submitData.append('jobRole', job.jobRole);
      submitData.append('position', job.jobRole);
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('experience', formData.experience);
      submitData.append('coverLetter', formData.coverLetter);
      
      if (formData.resumeFile) {
        submitData.append('resumeFile', formData.resumeFile);
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/career`, {
        method: 'POST',
        body: submitData // Fetch automatically sets the correct multipart/form-data headers
      });

      if (!res.ok) throw new Error('Failed to submit application');
      
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(err.message || 'An error occurred while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-white min-h-[60vh] flex items-center justify-center">
        <div className="text-slate-500 font-medium">Loading application form...</div>
      </section>
    );
  }

  if (error || !job) {
    return (
      <section className="bg-white min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="text-red-600 font-medium bg-red-50 px-6 py-4 rounded-xl border border-red-100">
          {error || 'Job opening not found.'}
        </div>
        {error === 'This job opening is no longer accepting applications.' ? (
          <Link to="/careers" className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors">
            View Current Openings
          </Link>
        ) : (
          <Link to="/careers" className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors">
            Back to Careers
          </Link>
        )}
      </section>
    );
  }

  return (
    <section className="bg-slate-50 border-t border-slate-200 min-h-screen pb-20">
      <PageHeader title={`Apply for ${job.jobRole}`} breadcrumb={`Careers / ${job.jobRole} / Apply`} bgImage={careerImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Application submitted successfully!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your application for <strong>{job.jobRole}</strong> has been received. Our HR team will review your profile and contact you shortly.
                  </p>
                  <div className="mt-8">
                    <Link to="/careers" className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm inline-block">
                      Back to Careers
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
                      Application Form
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Please fill out the details below to apply for the position of {job.jobRole}.
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-3 text-xs text-red-700 bg-red-100 rounded-xl border border-red-200">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text" name="fullName" required
                        value={formData.fullName} onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email" name="email" required
                        value={formData.email} onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                      <input
                        type="tel" name="phone" required
                        value={formData.phone} onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Experience *</label>
                      <input
                        type="text" name="experience" required
                        value={formData.experience} onChange={handleInputChange}
                        placeholder="e.g. 5 Years"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Resume (CV) *</label>
                    <div className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition-colors relative overflow-hidden">
                      <input
                        type="file" name="resumeFile" required
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Upload size={18} className="text-blue-600" />
                        <span className="truncate">
                          {formData.resumeUrl ? formData.resumeUrl : 'Upload your resume (PDF, DOCX, JPG, PNG)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Cover Letter (Optional)</label>
                    <textarea
                      name="coverLetter" rows={5}
                      value={formData.coverLetter} onChange={handleInputChange}
                      placeholder="Tell us why you are a great fit for this role..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all mt-4 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Job Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg sticky top-32">
              <h3 className="text-xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] border-b border-slate-100 pb-4">
                Job Summary
              </h3>
              
              <div className="space-y-5">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Job Title</div>
                  <div className="text-sm font-bold text-slate-900">{job.jobRole}</div>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-sm font-bold text-slate-900">{job.location}</div>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Employment Type</div>
                  <div className="text-sm font-bold text-slate-900">{job.employmentType}</div>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Experience</div>
                  <div className="text-sm font-bold text-slate-900">{job.experience}</div>
                </div>

                {job.industry && (
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Industry / Department</div>
                    <div className="text-sm font-bold text-slate-900">{job.industry}</div>
                  </div>
                )}

                {job.salary && (
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Salary</div>
                    <div className="text-sm font-bold text-emerald-600">{job.salary}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
