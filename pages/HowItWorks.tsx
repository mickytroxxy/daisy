
import React from 'react';
import { ICONS } from '../constants';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Identify Your Service Needs",
      description: "Open the Daisy Service Booker app and select the category of service you require—whether it's connectivity, print, energy, or IT support.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "02",
      title: "AI-Assisted Triaging",
      description: "Provide a brief description of your issue or requirement. Our built-in AI assistant helps categorize and prioritize your request based on urgency and technical requirements.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "03",
      title: "Expert Verification & Dispatch",
      description: "A Daisy human specialist reviews your request to ensure all details are accurate. A technician or account manager is then dispatched or scheduled to assist you.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="py-20 bg-white animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-black text-[#003366] mb-6">Service Booking Simplified</h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Experience the efficiency of modern service management with our 3-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-slate-100 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-2xl font-black text-[#76bc21] mb-8 group-hover:border-[#76bc21] transition-all shadow-lg">
                {step.id}
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 border border-slate-100 shadow-sm">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
