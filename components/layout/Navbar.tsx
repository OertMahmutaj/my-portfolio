/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Structural Fixed Top Bar Header */}
      <header className="fixed top-0 left-0 w-full h-20 bg-[#dbc87d]/80 backdrop-blur-md border-b border-black/10 z-50 flex items-center justify-between px-6 transition-colors duration-300">

        <Link
          href="/"
          onClick={(_e) => {
            closeMenu();

            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          className="font-bold tracking-tighter uppercase text-xl hover:opacity-70 transition duration-200"
        >
          Oert Mahmutaj
        </Link>

        {/* Minimalist Hamburger Button Trigger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className="flex flex-col justify-center items-center w-10 h-10 hover:bg-black/5 rounded transition-colors duration-200 focus:outline-none z-50"
        >
          <div className="relative w-5 h-4 flex flex-col justify-between">
            {/* Top Line */}
            <span className={`block h-[2px] w-full bg-black transition-all duration-300 ease-in-out origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : 'rotate-0 translate-y-0'}`} />
            {/* Middle Line */}
            <span className={`block h-[2px] w-full bg-black transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            {/* Bottom Line */}
            <span className={`block h-[2px] w-full bg-black transition-all duration-300 ease-in-out origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : 'rotate-0 translate-y-0'}`} />
          </div>
        </button>
      </header>

      {/* Full-Screen Backdrop Overlay Mask */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Sliding Minimalist Sidebar Panel */}
      <nav className={`fixed top-0 right-0 h-screen w-full sm:w-[380px] bg-[#dbc87d] border-l border-black/10 p-12 pt-32 flex flex-col justify-between transform transition-transform duration-500 ease-in-out z-45 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8 font-black text-5xl tracking-tighter uppercase">
          {['About', 'Work', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={closeMenu}
              className="text-left hover:opacity-50 transition duration-200 flex items-baseline gap-4 cursor-pointer"
            >
              <span className="font-mono text-base opacity-40">0{['About', 'Work', 'Education', 'Contact'].indexOf(item) + 1}</span>
              {item}
            </a>
          ))}
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-mono tracking-widest uppercase opacity-60">Location</p>
          <p className="text-xs font-medium">Tirana, Albania</p>
          <p className="text-[10px] font-mono mt-4 opacity-40">© {new Date().getFullYear()} OERT MAHMUTAJ</p>
        </div>
      </nav>
    </>
  );
}