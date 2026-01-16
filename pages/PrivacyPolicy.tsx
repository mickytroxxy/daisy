
import React from 'react';
import { APP_NAME } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-5xl font-black text-[#003366] mb-4">Privacy Policy</h1>
        <div className="h-2 w-32 bg-[#76bc21]"></div>
      </div>

      <div className="space-y-16 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Introduction</h2>
          <p>
            {APP_NAME} respects your privacy and is committed to protecting it. This policy describes the types of information we may collect from you and our practices for collecting, using, and maintaining that information.
          </p>
        </section>

        {/* Mobile App Specific Section */}
        <section className="p-8 bg-indigo-50/50 border border-[#003366]/10 rounded-[2.5rem]">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Mobile App Compliance</h2>
          <div className="space-y-4">
            <p className="font-bold text-slate-900">For users of our Android Application:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-5 h-5 bg-[#76bc21] rounded flex-shrink-0 mt-1 mr-3"></div>
                <span><strong>No Persistent Login:</strong> Our mobile app operates on a request-basis. We do not store long-term user accounts or social profiles.</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 bg-[#76bc21] rounded flex-shrink-0 mt-1 mr-3"></div>
                <span><strong>Device Permissions:</strong> We only request microphone and camera permissions if you choose to use the AI voice assistant or upload photos of your hardware issues.</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 bg-[#76bc21] rounded flex-shrink-0 mt-1 mr-3"></div>
                <span><strong>Data Processing:</strong> Service requests and AI interactions are processed through encrypted channels and are only used to fulfill your specific booking.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl">
            <h3 className="text-lg font-black text-[#003366] mb-4 uppercase tracking-wider">What We Collect</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#76bc21] rounded-full mr-3"></div> Contact Details (Booking only)</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#76bc21] rounded-full mr-3"></div> Hardware Location</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#76bc21] rounded-full mr-3"></div> Error Logs & Descriptions</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#76bc21] rounded-full mr-3"></div> Device Type (Apple/Windows/Server)</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl">
            <h3 className="text-lg font-black text-[#003366] mb-4 uppercase tracking-wider">What We DON'T Collect</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div> Personal Financial Files</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div> Browsing History</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div> Contacts or Messages</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div> Background GPS Tracking</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Data Usage</h2>
          <p>
            The information you provide is used exclusively to fulfill your service requests, manage your account at Daisy Solutions, and provide you with information about your services. We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section className="p-8 border border-slate-100 rounded-3xl">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Security</h2>
          <p>
            We implement industry-standard security measures, including encryption and secure socket layers, to protect your data during transmission. Access to your information is restricted to authorized Daisy personnel who require it to perform their professional duties.
          </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Your Rights</h2>
            <p>
                Under the Protection of Personal Information Act (POPIA), you have the right to access, correct, or request the deletion of your personal data held by us. For any such requests, please contact our Information Officer at legal@daisysolutions.co.za.
            </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
