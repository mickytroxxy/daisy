
import React from 'react';
import { ICONS } from '../constants';

const Services: React.FC = () => {
  const serviceDetails = [
    {
      title: "Solar & Energy Infrastructure",
      subtitle: "Power Your Business Any Day",
      icon: ICONS.Energy,
      details: [
        "Tier-1 Solar Panels & Mounting",
        "Industrial Li-Ion Battery Banks",
        "Professional On-Site Installation",
        "System Health Remote Monitoring"
      ],
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800",
      cta: "Request Quote"
    },
    {
      title: "Apple for Business",
      subtitle: "Mobile Fleet Management",
      icon: ICONS.Apple,
      details: [
        "Certified MacBook & iPad Sales",
        "Business Manager (ABM) Setup",
        "MDM Software Integration",
        "Professional Device Deployment"
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      cta: "Configure Fleet"
    },
    {
      title: "Super Computing (HPC)",
      subtitle: "Unmatched Processing Power",
      icon: ICONS.Supercomputer,
      details: [
        "HPC Cluster Sales & Setup",
        "AI/ML Server Maintenance",
        "Thermal Management Solutions",
        "Scalable Data Infrastructure"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      cta: "Technical Specs"
    },
    {
      title: "Print & Managed IT",
      subtitle: "Efficiency Guaranteed",
      icon: ICONS.IT,
      details: [
        "Next-Day On-Site Repairs",
        "Managed Print Systems",
        "Cybersecurity & Networking",
        "Cloud Data Migration"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      cta: "Get Support"
    }
  ];

  return (
    <div className="py-20 bg-slate-50 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-[#76bc21]/10 text-[#76bc21] rounded-full text-xs font-black uppercase tracking-widest mb-6">Hardware & Expertise</div>
          <h1 className="text-5xl sm:text-7xl font-black text-[#003366] mb-6 tracking-tighter leading-none">Premium Solutions</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Daisy Solutions provides the enterprise hardware and specialist installations that keep South Africa's top businesses running.
          </p>
        </div>

        <div className="space-y-24">
          {serviceDetails.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 h-96 lg:h-auto overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent"></div>
              </div>
              <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-16 h-16 bg-[#76bc21] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#76bc21]/30">
                    {service.icon("w-8 h-8")}
                  </div>
                  <div>
                    <div className="text-[#76bc21] text-xs font-black uppercase tracking-widest mb-1">{service.subtitle}</div>
                    <h2 className="text-4xl font-black text-[#003366] tracking-tight">{service.title}</h2>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <div className="w-2.5 h-2.5 bg-[#76bc21] rounded-full mr-4 mt-1.5 flex-shrink-0"></div>
                      <span className="font-light text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button className="bg-[#003366] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                    {service.cta}
                  </button>
                  <button className="border-2 border-slate-100 text-slate-400 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                    Download Info Pack
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
