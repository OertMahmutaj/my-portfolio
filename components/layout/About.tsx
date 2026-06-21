/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [active, setActive] = useState<'dev' | 'sales' | 'other'>('dev');

  return (
    <section id="about" className="py-5 px-6 max-w-4xl mx-auto border-b border-black/10">
      {/* Container for Text and Image */}
      <div className="flex justify-between items-start gap-8 mb-16">
        <p className="py-5 text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
          A little <span className="underline">bit</span> about <span className="underline">me</span>.
        </p>
        
        {/* Smaller Image container */}
        <div className="flex-shrink-0 w-32 md:w-40 h-auto overflow-hidden rounded-xl border border-black/10">
          <Image
            src="/proffesional_picture.jpg"
            alt="Oert Mahmutaj"
            width={200}
            height={200}
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
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
        <button 
          onClick={() => setActive('other')}
          className={`font-mono text-xs uppercase tracking-widest px-6 py-2 border border-black transition-all ${active === 'other' ? 'bg-black text-[#dbc87d]' : 'bg-transparent hover:bg-black/5'}`}
        >
          Other Skills
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[200px] transition-opacity duration-300">
        {active === 'dev' ? (
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase">// Technical Arsenal</h3>
            <p className="text-lg opacity-80">Building scalable, high-performance web applications using the modern stack: React 19, Next.js 16, TypeScript, and Tailwind CSS. I prioritize clean, modular code that scales.</p>
          </div>
        ) : active === 'sales' ? (
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase">// Commercial Strategy</h3>
            <p className="text-lg opacity-80">I treat every project as a sales channel. From conversion rate optimization to user journey design, I ensure that every pixel served has a business purpose.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase">// Linguistic & Creative</h3>
            <p className="text-lg opacity-80">Fluent in German, English, Italian, and Albanian. My background in figure drawing and creative arts fuels my attention to detail, visual hierarchy, and user-centric problem solving.</p>
          </div>
        )}
      </div>
    </section>
  );
}