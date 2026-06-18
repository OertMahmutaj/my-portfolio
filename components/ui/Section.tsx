export function Section({ title, label, children }: { title: string, label: string, children: React.ReactNode }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</span>
        <h2 className="text-4xl font-medium mt-4 tracking-tighter">{title}</h2>
      </div>
      <div className="border-t border-black pt-12">
        {children}
      </div>
    </section>
  );
}