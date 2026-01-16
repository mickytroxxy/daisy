
import React from 'react';
import { ICONS } from '../constants';

const Services: React.FC = () => {
  const serviceDetails = [
    {
      title: "Renewable Solar Energy",
      icon: ICONS.Energy,
      details: [
        "Tier-1 Solar Panel Sales",
        "Hybrid Inverter Installations",
        "Industrial Battery Backups",
        "Zero-Outage Energy Audits"
      ],
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Apple Ecosystems",
      icon: ICONS.Apple,
      details: [
        "MacBook & iPad Fleet Sales",
        "MDM (Mobile Device Management) Setup",
        "Professional On-Site Installation",
        "Daisy Certified Support"
      ],
      image: "https://images.unsplash.com/photo-1510519133417-2ad0c3a0028b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Super Computing & Servers",
      icon: ICONS.Supercomputer,
      details: [
        "High Performance Clusters (HPC)",
        "Enterprise Server Deployment",
        "AI/ML Data Infrastructure",
        "24/7 Server Room Monitoring"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Managed IT & Print",
      icon: ICONS.IT,
      details: [
        "Any-Day Professional Support",
        "Cybersecurity & Firewall Management",
        "Cost-Effective Managed Print",
        "Cloud Migration Services"
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="py-20 bg-slate-50 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-black text-[#003366] mb-6 tracking-tight tracking-tighter">Premium Hardware & Services</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            From renewable energy to high-performance computing, Daisy provides the hardware and expertise to push your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {serviceDetails.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-5 mb-8">
                  <div className="w-14 h-14 bg-[#76bc21] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#76bc21]/20">
                    {service.icon("w-7 h-7")}
                  </div>
                  <h2 className="text-3xl font-black text-[#003366] leading-tight">{service.title}</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-600 text-lg">
                      <div className="w-2 h-2 bg-[#76bc21] rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 flex space-x-4">
                  <button className="bg-[#003366] text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                    Request Quote
                  </button>
                  <button className="border border-slate-200 text-slate-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                    Spec Sheet
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
