export default function Header() {
  return (
    <header className="px-6 py-8 flex justify-between items-center text-sm uppercase tracking-widest">
      <div className="font-bold">Freelance Developer</div>
      <nav className="flex gap-8">
        <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
      </nav>
    </header>
  );
}