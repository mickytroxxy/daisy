
import React from 'react';
import { APP_NAME } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-in fade-in duration-500">
      <div className="mb-16">
        <h1 className="text-5xl sm:text-7xl font-black text-[#003366] mb-4 tracking-tighter">Privacy Policy</h1>
        <div className="h-3 w-32 bg-[#76bc21] rounded-full"></div>
      </div>

      <div className="space-y-20 text-slate-600 leading-relaxed text-lg">
        <section>
          <h2 className="text-3xl font-black text-[#003366] mb-8 tracking-tight">Standard Commitment</h2>
          <p className="font-light">
            {APP_NAME} respects your privacy and is committed to protecting it. This policy describes how we collect, use, and store data when you use our website or the Daisy Service Booker Android application.
          </p>
        </section>

        {/* Mobile App Specific Section */}
        <section className="p-10 bg-[#003366]/5 border-l-8 border-[#76bc21] rounded-r-[3rem]">
          <h2 className="text-3xl font-black text-[#003366] mb-8 tracking-tight">Mobile App Compliance (Android)</h2>
          <div className="space-y-8">
            <p className="font-bold text-slate-900 italic">Notice for Google Play Store Users:</p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#76bc21] rounded-lg flex-shrink-0 mt-1 mr-4 flex items-center justify-center text-white font-bold text-xs">1</div>
                <span><strong>Minimal Data Storage:</strong> Our app does not require persistent account creation. We only store temporary data necessary to fulfill your specific service booking.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#76bc21] rounded-lg flex-shrink-0 mt-1 mr-4 flex items-center justify-center text-white font-bold text-xs">2</div>
                <span><strong>Transparent Permissions:</strong> We request microphone access only for AI voice queries and camera access only for uploading photos of faulty hardware. Permissions can be revoked at any time.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#76bc21] rounded-lg flex-shrink-0 mt-1 mr-4 flex items-center justify-center text-white font-bold text-xs">3</div>
                <span><strong>No Third-Party Sharing:</strong> Your service request data is never shared with third-party marketers. It stays within the Daisy Solutions secure infrastructure.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-xl font-black text-[#003366] mb-6 uppercase tracking-widest text-xs">What We Collect</h3>
            <ul className="space-y-4 font-light">
              <li className="flex items-center"><div className="w-2 h-2 bg-[#76bc21] rounded-full mr-4"></div> Name & Work Email</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#76bc21] rounded-full mr-4"></div> Physical Site Address</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#76bc21] rounded-full mr-4"></div> Hardware Serial Numbers</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#76bc21] rounded-full mr-4"></div> AI Chat Logs (Anonymous)</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-xl font-black text-[#003366] mb-6 uppercase tracking-widest text-xs">What We NEVER Collect</h3>
            <ul className="space-y-4 font-light">
              <li className="flex items-center"><div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div> Credit Card Numbers</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div> Social Media Access</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div> Private Browser Data</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div> Passive Microphone Listening</li>
            </ul>
          </div>
        </section>

        <section className="pt-10 border-t border-slate-100">
          <h2 className="text-3xl font-black text-[#003366] mb-6 tracking-tight">Your Rights (POPIA)</h2>
          <p className="font-light">
            Under the South African Protection of Personal Information Act (POPIA), you have full control over your data. You may request deletion of your service history or update your contact information by emailing our Data Officer at <span className="text-[#76bc21] font-bold">privacy@daisysolutions.co.za</span>.
          </p>
        </section>

        <div className="bg-slate-900 text-white p-12 rounded-[3rem] text-center">
            <h3 className="text-2xl font-black mb-4">Security Infrastructure</h3>
            <p className="text-slate-400 font-light mb-0">Our backend uses military-grade AES-256 encryption for all data at rest and during transit between your mobile device and our helpdesk systems.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
