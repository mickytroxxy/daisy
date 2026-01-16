
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { ICONS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const AIServiceAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    category: string;
    reasoning: string;
    icon: string;
  } | null>(null);

  const getRecommendation = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setRecommendation(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this business problem: "${input}". 
        Recommend exactly one of these Daisy Solutions: 'Renewable Solar', 'Apple Devices & Setup', 'Super Computing', 'Print Solutions', 'Connectivity', or 'IT Support'. 
        Provide the result in JSON format with keys: 'category', 'reasoning'. 
        The reasoning should be a short, professional sentence explaining how Daisy helps.`,
        config: {
          thinkingConfig: { thinkingBudget: 0 },
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              category: { type: Type.STRING },
              reasoning: { type: Type.STRING }
            },
            required: ["category", "reasoning"]
          }
        }
      });

      const data = JSON.parse(response.text || "{}");
      
      // Map icons
      let icon = 'IT';
      if (data.category.includes('Print')) icon = 'Print';
      if (data.category.includes('Connectivity')) icon = 'Connectivity';
      if (data.category.includes('Solar')) icon = 'Energy';
      if (data.category.includes('Apple')) icon = 'Apple';
      if (data.category.includes('Super')) icon = 'Supercomputer';

      setRecommendation({ ...data, icon });
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#003366] rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden h-full flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#76bc21] blur-[100px] opacity-20"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">AI Service Advisor</h3>
        <p className="text-slate-400 mb-8 font-light">Describe your challenge and our AI will recommend the ideal hardware or service solution.</p>
        
        <div className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., We need reliable backup power and a fleet of MacBooks for our design team..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#76bc21] transition-all resize-none h-32 text-sm"
          />
          
          <button
            onClick={getRecommendation}
            disabled={loading || !input.trim()}
            className="w-full bg-[#76bc21] text-white font-black py-4 rounded-xl hover:bg-[#65a31c] transition-all disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg shadow-[#76bc21]/20"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing Needs...</span>
              </>
            ) : (
              <span>Instant Recommendation</span>
            )}
          </button>
        </div>

        {recommendation && (
          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-[#76bc21]/30 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#76bc21] rounded-xl flex items-center justify-center text-white">
                {recommendation.icon === 'Print' && ICONS.Print("w-6 h-6")}
                {recommendation.icon === 'Connectivity' && ICONS.Connectivity("w-6 h-6")}
                {recommendation.icon === 'Energy' && ICONS.Energy("w-6 h-6")}
                {recommendation.icon === 'IT' && ICONS.IT("w-6 h-6")}
                {recommendation.icon === 'Apple' && ICONS.Apple("w-6 h-6")}
                {recommendation.icon === 'Supercomputer' && ICONS.Supercomputer("w-6 h-6")}
              </div>
              <div>
                <div className="text-[#76bc21] text-[10px] font-black uppercase tracking-widest">Recommended Category</div>
                <div className="text-white font-black text-xl">{recommendation.category}</div>
              </div>
            </div>
            <p className="text-slate-300 font-light mb-6 text-sm leading-relaxed">
              {recommendation.reasoning}
            </p>
            <a href="#/services" className="inline-flex items-center text-[#76bc21] font-bold hover:underline text-sm">
              View Detailed Solution
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIServiceAdvisor;
