/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-6 max-w-4xl mx-auto">
      <h2 className="text-sm font-mono opacity-60 mb-8">// Get in Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">Let&apos;s discuss how we can bridge your technical and commercial goals.</p>
          <div className="space-y-4 font-mono text-sm uppercase">
            <a href="mailto:oert64@gmail.com" className="block hover:underline">Email: oert64@gmail.com</a>
            <a href="tel:+355685008686" className="block hover:underline">Phone: (+355) 685008686</a>
            <a href="https://wa.me/355685008686" target="_blank" className="block hover:underline">WhatsApp: Click to Chat</a>
          </div>
        </div>

        {/* Contact Form */}
        {status === 'success' ? (
          <div className="flex items-center justify-center h-full border border-black p-4 text-center font-mono text-xs uppercase">
            Message sent successfully. Thank you.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="NAME" required className="w-full bg-transparent border-b border-black py-2 focus:outline-none uppercase" />
            <input type="email" name="email" placeholder="EMAIL" required className="w-full bg-transparent border-b border-black py-2 focus:outline-none uppercase" />
            <textarea name="message" placeholder="MESSAGE" required className="w-full bg-transparent border-b border-black py-2 h-32 focus:outline-none uppercase"></textarea>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="bg-black text-[#dbc87d] px-6 py-2 font-mono text-xs uppercase tracking-widest hover:opacity-80 transition disabled:opacity-50"
            >
              {status === 'submitting' ? 'SENDING...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}