import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import careerImg from '../assets/career_engineer_1789710523840.png';

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/jobOpenings/${id}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error('Job opening not found.');
          throw new Error('Failed to load job details.');
        }
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (loading) {
    return (
      <section className="bg-white min-h-[60vh] flex items-center justify-center">
        <div className="text-slate-500 font-medium">Loading job details...</div>
      </section>
    );
  }

  if (error || !job) {
    return (
      <section className="bg-white min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="text-red-600 font-medium bg-red-50 px-6 py-4 rounded-xl border border-red-100">
          {error || 'Job opening not found.'}
        </div>
        <Link to="/careers" className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors">
          Back to Careers
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 border-t border-slate-200 min-h-screen pb-20">
      <PageHeader title={job.jobRole} breadcrumb="Careers / Job Details" bgImage={careerImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">{job.jobRole}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-1.5"><span className="text-lg">📍</span> {job.location}</span>
              <span className="flex items-center gap-1.5"><span className="text-lg">💼</span> {job.employmentType}</span>
              <span className="flex items-center gap-1.5"><span className="text-lg">🧰</span> {job.experience}</span>
              <span className="flex items-center gap-1.5"><span className="text-lg">📅</span> Posted {new Date(job.createdAt).toLocaleDateString('en-GB')}</span>
            </div>
          </div>
          <Link 
            to={`/careers/${job._id}/apply`} 
            className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-md shrink-0"
          >
            Apply Now
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Job Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] border-b border-slate-100 pb-4">JOB DESCRIPTION</h3>
              <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                {job.jobDescription}
              </div>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && job.responsibilities[0] !== '' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h3 className="text-xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] border-b border-slate-100 pb-4">RESPONSIBILITIES</h3>
                <ul className="space-y-4">
                  {job.responsibilities.map((resp, idx) => resp.trim() !== '' && (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && job.requirements[0] !== '' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h3 className="text-xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] border-b border-slate-100 pb-4">REQUIREMENTS</h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => req.trim() !== '' && (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <span className="text-blue-600 text-lg leading-none mt-0.5">•</span>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Additional Information */}
            {job.additionalInformation && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h3 className="text-xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] border-b border-slate-100 pb-4">ADDITIONAL INFORMATION</h3>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                  {job.additionalInformation}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Job Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sticky top-32">
              <h3 className="text-xl font-black text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] border-b border-slate-100 pb-4">JOB SUMMARY</h3>
              
              <div className="space-y-5">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Job Title</div>
                  <div className="text-sm font-bold text-slate-900">{job.jobRole}</div>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Job Type</div>
                  <div className="text-sm font-bold text-slate-900">{job.employmentType}</div>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Experience</div>
                  <div className="text-sm font-bold text-slate-900">{job.experience}</div>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-sm font-bold text-slate-900">{job.location}</div>
                </div>

                {job.salary && (
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Salary</div>
                    <div className="text-sm font-bold text-emerald-600">{job.salary}</div>
                  </div>
                )}

                {job.industry && (
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Industry</div>
                    <div className="text-sm font-bold text-slate-900">{job.industry}</div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link 
                  to={`/careers/${job._id}/apply`} 
                  className="w-full block text-center px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-md"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
