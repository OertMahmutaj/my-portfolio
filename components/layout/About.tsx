'use client';
import { useState } from 'react';

export default function About() {
  const [active, setActive] = useState<'dev' | 'sales'>('dev');

  return (
    <section id="about" className="py-32 px-6 max-w-4xl mx-auto border-b border-black/10">
      {/* Intro Text */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">About</h2>
        <p className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
          I bridge the gap between <span className="underline">technical execution</span> and <span className="underline">commercial performance</span>.
        </p>
      </div>

      {/* Switcher Buttons */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActive('dev')}
          className={`font-mono text-xs uppercase tracking-widest px-6 py-2 border border-black transition-all ${active === 'dev' ? 'bg-black text-[#dbc87d]' : 'bg-transparent hover:bg-black/5'}`}
        >
          Dev Skills
        </button>
        <button 
          onClick={() => setActive('sales')}
          className={`font-mono text-xs uppercase tracking-widest px-6 py-2 border border-black transition-all ${active === 'sales' ? 'bg-black text-[#dbc87d]' : 'bg-transparent hover:bg-black/5'}`}
        >
          Sales Skills
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[200px] transition-opacity duration-300">
        {active === 'dev' ? (
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase">// Technical Arsenal</h3>
            <p className="text-lg opacity-80">Building scalable, high-performance web applications using the modern stack: React 19, Next.js 16, TypeScript, and Tailwind CSS. I prioritize clean, modular code that scales.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase">// Commercial Strategy</h3>
            <p className="text-lg opacity-80">I treat every project as a sales channel. From conversion rate optimization to user journey design, I ensure that every pixel served has a business purpose.</p>
          </div>
        )}
      </div>
    </section>
  );
}