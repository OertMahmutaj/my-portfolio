'use client';
import { useState } from 'react';

export default function SkillsToggle() {
  const [active, setActive] = useState<'dev' | 'sales'>('dev');

  return (
    <div className="max-w-4xl">
      <div className="flex gap-4 mb-12">
        <button onClick={() => setActive('dev')} className={`text-sm uppercase tracking-widest pb-1 border-b-2 ${active === 'dev' ? 'border-black' : 'border-transparent'}`}>Dev Skills</button>
        <button onClick={() => setActive('sales')} className={`text-sm uppercase tracking-widest pb-1 border-b-2 ${active === 'sales' ? 'border-black' : 'border-transparent'}`}>Sales Skills</button>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {active === 'dev' ? (
          <>
            <div><h3 className="font-bold mb-2">Technical Stack</h3><p className="text-slate-600">Next.js, React, Tailwind, TypeScript</p></div>
            <div><h3 className="font-bold mb-2">Infrastructure</h3><p className="text-slate-600">Vercel, Git, CI/CD, SEO</p></div>
          </>
        ) : (
          <>
            <div><h3 className="font-bold mb-2">Commercial Strategy</h3><p className="text-slate-600">Conversion Optimization, Market Research</p></div>
            <div><h3 className="font-bold mb-2">Business Operations</h3><p className="text-slate-600">B2B Negotiation, Client Consulting</p></div>
          </>
        )}
      </div>
    </div>
  );
}