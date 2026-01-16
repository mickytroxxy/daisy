
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-[#76bc21] rounded-full flex items-center justify-center">
                <span className="text-white font-black text-sm">D</span>
              </div>
              <span className="font-black text-2xl tracking-tighter">Daisy Solutions</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              South Africa's leading provider of innovative business technology solutions. We deliver infrastructure that works.
            </p>
          </div>
          
          <div>
            <h3 className="text-[#76bc21] font-bold uppercase tracking-widest text-xs mb-8">Solutions</h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Managed Print</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Business Fibre</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Solar & Energy</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">IT Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#76bc21] font-bold uppercase tracking-widest text-xs mb-8">Trust & Legal</h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">AI Disclaimer</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PAIA Manual</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#76bc21] font-bold uppercase tracking-widest text-xs mb-8">Connect</h3>
            <div className="flex flex-col space-y-4">
               <p className="text-slate-400 text-sm">Follow our journey on social media for business growth tips.</p>
               <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#76bc21] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#76bc21] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
               </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Daisy Solutions (Pty) Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Powered by Gemini AI Technology
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
