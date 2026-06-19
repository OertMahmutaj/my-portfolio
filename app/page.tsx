import Navbar from '@/components/layout/Navbar';
import About from '@/components/layout/About';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold tracking-tighter uppercase">I build code that<br />converts to revenue.</h1>
      </section>

      {/* Sections with IDs for the Navbar */}
      <section id="about" className="py-18 px-6 max-w-6xl mx-auto">
        <About />
      </section>

      <section id="work" className="px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold uppercase mb-8">Professional Experience</h2>
        <Work />
      </section>

      <section id="contact" className="py-18 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold uppercase mb-8">Contact</h2>
        <Contact/>
      </section>
    </main>
  );
}