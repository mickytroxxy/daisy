
import React from 'react';
import { ICONS, APP_NAME } from '../constants';
import { Link } from 'react-router-dom';
import AIServiceAdvisor from '../components/AIServiceAdvisor';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-28 bg-[#003366] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#76bc21] skew-x-[-20deg] translate-x-32 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-[#76bc21] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                <span className="mr-2 animate-pulse">●</span> On-site Support: We come to you any day
              </div>
              <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-[1.05] tracking-tighter">
                Infrastructure <br />
                <span className="text-[#76bc21]">Redefined</span>.
              </h1>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                The {APP_NAME} Android app puts South Africa's most advanced technology—from Apple device fleets to Solar power and Supercomputing—in the palm of your hand.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#76bc21] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#65a31c] shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
                  Get Android App
                </button>
                <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                  Our Solutions
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
               <AIServiceAdvisor />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-slate-100 py-6 border-b border-slate-200 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-12 opacity-50 grayscale font-bold uppercase tracking-widest text-xs">
          <span>● Reliable Connectivity</span>
          <span>● Solar Installations</span>
          <span>● Supercomputing Power</span>
          <span>● Apple Certified Installation</span>
          <span>● 7-Day Support</span>
          <span>● Managed Print</span>
          <span>● Reliable Connectivity</span>
          <span>● Solar Installations</span>
        </div>
      </div>

      {/* Mobile App Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative inline-block w-full max-w-md">
                <div className="absolute inset-0 bg-[#76bc21] rounded-[3rem] rotate-3 -z-10 opacity-10 blur-2xl"></div>
                <img src="https://images.unsplash.com/photo-1556656793-062ff98782ee?auto=format&fit=crop&q=80&w=800" alt="Apple & Tech Setup" className="rounded-[3rem] shadow-2xl border-8 border-white" />
                <div className="absolute -bottom-10 -right-6 bg-[#003366] p-8 rounded-[2.5rem] text-white shadow-2xl max-w-xs border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-[#76bc21] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h4 className="font-black text-lg">AI Assistant</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">Ask our Android app's built-in AI about hardware specs, solar ROI, or troubleshooting steps.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-black text-[#003366] mb-8 tracking-tighter leading-tight">Your Business, <br /><span className="text-[#76bc21]">Fully Powered.</span></h2>
              <div className="space-y-10">
                {[
                  { title: "One-Tap Service Booking", desc: "Our technicians come to your premises any day of the week. Book directly via the Android app for priority response." },
                  { title: "Hardware Procurement", desc: "Expert sales and installation of Apple MacBooks, iPads, high-density Supercomputers, and industrial Solar systems." },
                  { title: "AI-Powered Helpdesk", desc: "Instant answers on your mobile. Not sure what energy solution you need? Just ask the AI." }
                ].map((item, i) => (
                  <div key={i} className="flex group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl shadow-sm flex items-center justify-center text-[#76bc21] mr-6 group-hover:bg-[#76bc21] group-hover:text-white transition-all flex-shrink-0 border border-slate-100">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#003366] mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-[#003366] mb-4 tracking-tighter">Enterprise Portfolio</h2>
            <div className="w-24 h-2 bg-[#76bc21] mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
              Premium hardware coupled with professional installation and 7-day on-site support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Solar & Energy', icon: ICONS.Energy, desc: 'Avoid downtime. We sell and install Tier-1 solar panels, batteries, and hybrid inverters.' },
              { title: 'Apple Solutions', icon: ICONS.Apple, desc: 'Complete Apple device procurement for businesses, including MDM setup and technical support.' },
              { title: 'Super Computing', icon: ICONS.Supercomputer, desc: 'High-density server clusters for AI, data science, and mission-critical enterprise tasks.' },
              { title: 'Connectivity', icon: ICONS.Connectivity, desc: 'Ultra-low latency business fibre and scalable VoIP solutions for modern teams.' },
              { title: 'Print Solutions', icon: ICONS.Print, desc: 'Intelligent managed print services that optimize costs and document security.' },
              { title: '24/7 IT Support', icon: ICONS.IT, desc: 'Proactive network monitoring and dedicated helpdesk services, available on-site any day.' }
            ].map((service, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#76bc21] hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <div className="w-16 h-16 bg-[#003366]/5 rounded-2xl flex items-center justify-center text-[#003366] mb-8 group-hover:bg-[#76bc21] group-hover:text-white transition-all">
                  {service.icon("w-8 h-8")}
                </div>
                <h3 className="text-2xl font-black text-[#003366] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light mb-8 flex-grow">
                  {service.desc}
                </p>
                <Link to="/services" className="text-[#76bc21] font-bold text-sm hover:underline inline-flex items-center">
                  Explore Hardware
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#003366] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter">Ready for better tech?</h2>
          <p className="text-xl text-slate-300 mb-12 font-light">Download the Daisy Service Booker Android app today and book your first on-site consultation.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
             <button className="bg-white text-[#003366] px-12 py-5 rounded-2xl font-black text-xl hover:bg-[#76bc21] hover:text-white transition-all shadow-2xl">
                Install from Play Store
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
