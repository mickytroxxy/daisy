
import React from 'react';
import { APP_NAME } from '../constants';

const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-in fade-in duration-500">
      <div className="bg-[#003366]/5 border-l-8 border-[#76bc21] p-8 mb-16 rounded-r-2xl">
        <h2 className="text-2xl font-black text-[#003366] mb-2 uppercase tracking-tight">AI & Human Oversight Policy</h2>
        <p className="text-slate-600 font-light">
          Transparency is at the heart of our service commitment.
        </p>
      </div>

      <article className="prose prose-slate lg:prose-xl max-w-none">
        <h1 className="text-4xl font-black text-[#003366] mb-8">AI Disclaimer</h1>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          The {APP_NAME} app utilizes artificial intelligence (AI) to enhance the user experience and streamline service requests. It is important to understand how this technology is used and what its limitations are.
        </p>

        <section className="space-y-12">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-[#003366] mb-4">1. AI for Triage & Support</h3>
            <p className="text-slate-600">
              We use AI to help categorize, prioritize, and summarize your service requests. This allows our team to respond faster and ensures the right technician is assigned to your specific business problem.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-[#003366] mb-4">2. Human Verification Required</h3>
            <p className="text-slate-600">
              No technical solution is finalized solely by AI. Every request processed through the app is reviewed by a Daisy human professional before a final service contract or dispatch is confirmed.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-[#003366] mb-4">3. Accuracy Disclaimer</h3>
            <p className="text-slate-600">
              AI-generated summaries or suggestions can sometimes be inaccurate. Users should review all AI-summarized outputs for accuracy before submitting a request. Daisy Solutions is not liable for errors resulting from unverified AI-generated content.
            </p>
          </div>
        </section>

        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>Policy Version: 1.2.0 (South Africa)</p>
          <p>Effective Date: June 01, 2024</p>
        </div>
      </article>
    </div>
  );
};

export default Disclaimer;
