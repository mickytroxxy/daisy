
import React, { useState } from 'react';
import { APP_NAME } from '../constants';

const Support: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-black text-[#003366] mb-8 tracking-tighter">Get in Touch</h1>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Need urgent technical support? Our helpdesk is available to ensure your business remains operational 24/7.
          </p>
          
          <div className="space-y-10">
            <div className="flex group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#76bc21] group-hover:bg-[#76bc21] group-hover:text-white transition-all shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold text-[#003366]">National Helpdesk</h3>
                <p className="text-slate-500 text-lg">0861 1 DAISY (32479)</p>
              </div>
            </div>

            <div className="flex group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#76bc21] group-hover:bg-[#76bc21] group-hover:text-white transition-all shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold text-[#003366]">Head Office</h3>
                <p className="text-slate-500 text-lg">Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-[#003366]/5 border border-slate-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-[#76bc21]/10 rounded-full flex items-center justify-center text-[#76bc21] mx-auto mb-8">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-[#003366] mb-4">Request Received</h2>
                <p className="text-slate-500 text-lg">A service consultant will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-[#76bc21] font-black uppercase tracking-widest text-sm hover:underline">New Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 uppercase mb-2">Company Name</label>
                    <input required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#76bc21] outline-none" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 uppercase mb-2">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#76bc21] outline-none" placeholder="help@acme.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase mb-2">Service Category</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#76bc21] outline-none">
                    <option>Print Solutions</option>
                    <option>Connectivity & Voice</option>
                    <option>Energy Solutions</option>
                    <option>IT Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase mb-2">Message</label>
                  <textarea required rows={5} className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#76bc21] outline-none resize-none" placeholder="Tell us more about your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#76bc21] text-white font-black py-5 rounded-2xl text-lg hover:bg-[#65a31c] shadow-xl shadow-[#76bc21]/20 transition-all active:scale-[0.98]">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
