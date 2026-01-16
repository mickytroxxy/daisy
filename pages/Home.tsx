
import React from 'react';
import { ICONS, APP_NAME } from '../constants';
import { Link } from 'react-router-dom';
import AIServiceAdvisor from '../components/AIServiceAdvisor';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#003366] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#76bc21] skew-x-[-20deg] translate-x-32 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 bg-[#76bc21] text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl animate-pulse">
                <span className="mr-2">●</span> We come to you any day
              </div>
              <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-[1.1]">
                Tech Solutions <br />
                <span className="text-[#76bc21]">On Demand</span>.
              </h1>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                The {APP_NAME} app connects you to South Africa's leading tech infrastructure—from Apple device setups and Supercomputers to Solar installations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#76bc21] text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-[#65a31c] shadow-2xl transition-all hover:-translate-y-1">
                  Download Android App
                </button>
                <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                  Browse Hardware
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center w-full">
               <AIServiceAdvisor />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Highlight */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative inline-block">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" alt="Mobile App" className="rounded-[3rem] shadow-2xl" />
                <div className="absolute -bottom-10 -right-10 bg-[#76bc21] p-8 rounded-[2rem] text-white shadow-xl max-w-xs">
                  <h4 className="font-black text-xl mb-2">AI Assistant</h4>
                  <p className="text-sm opacity-90 leading-relaxed font-light">Ask our built-in AI about any Daisy service or hardware configuration directly from your pocket.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-[#003366] mb-8 tracking-tight">One App. Total Control.</h2>
              <div className="space-y-8">
                {[
                  { title: "Smart Booking", desc: "Schedule technicians any day of the week. We prioritize your uptime above all else." },
                  { title: "AI Guided Support", desc: "Interact with our intelligent assistant to troubleshoot issues or learn about our latest Solar and Supercomputer tech." },
                  { title: "Hardware Procurement", desc: "Order Apple devices, high-performance servers, and solar components with professional installation included." }
                ].map((item, i) => (
                  <div key={i} className="flex group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-[#76bc21] mr-6 group-hover:bg-[#76bc21] group-hover:text-white transition-all">
                      {ICONS.Check("w-6 h-6")}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#003366] mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#003366] mb-4">Leading Technology Solutions</h2>
            <div className="w-20 h-2 bg-[#76bc21] mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              South Africa's premier partner for enterprise-grade hardware and renewable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Renewable Solar', icon: ICONS.Energy, desc: 'Full-cycle solar sales and installation to eliminate load-shedding risks.' },
              { title: 'Super Computing', icon: ICONS.Supercomputer, desc: 'High-performance computing (HPC) clusters for data-intensive business operations.' },
              { title: 'Apple Solutions', icon: ICONS.Apple, desc: 'Certified Apple device procurement and professional MDM installations.' },
              { title: 'Connectivity', icon: ICONS.Connectivity, desc: 'Reliable business fibre and VOIP systems for constant communication.' },
              { title: 'Print Solutions', icon: ICONS.Print, desc: 'Managed print services that slash operational costs.' },
              { title: 'IT Management', icon: ICONS.IT, desc: '24/7 dedicated support and remote network monitoring.' }
            ].map((service, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#76bc21] hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-[#003366]/5 rounded-2xl flex items-center justify-center text-[#003366] mb-8 group-hover:bg-[#76bc21] group-hover:text-white transition-all">
                  {service.icon("w-8 h-8")}
                </div>
                <h3 className="text-2xl font-black text-[#003366] mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
