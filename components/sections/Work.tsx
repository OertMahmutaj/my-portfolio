export default function Work() {
  const experiences = [
    {
      title: "Key/Sales Account Manager",
      company: "NG Albania - Sun Ballast",
      duration: "2022 - 2026",
      result: "€15M+ Revenue Generated",
      description: "Managed 300+ B2B enterprise accounts across the DACH region. Utilized SAP ERP and complex data pipelines to optimize sales workflows and ensure successful project delivery.",
      stack: "SAP ERP, CRM, Data Analytics",
      commercial: "B2B Consultative Selling, Team Leadership"
    },
    {
      title: "Web Developer (Freelance)",
      company: "Independent",
      duration: "2024 - Current",
      result: "Custom Web Solutions",
      description: "Designing and programming full-stack web applications, integrating relational/non-relational databases to solve specific business workflow challenges.",
      stack: "React, Node.js, MongoDB, SQL",
      commercial: "Workflow Automation, Technical Consulting"
    },
    {
      title: "Marketing Assistant",
      company: "NG Albania - Sun Ballast",
      duration: "2021 - 2022",
      result: "DACH Market Transition",
      description: "Supported marketing operations and client communication during the company's expansion into the photovoltaic sector.",
      stack: "Google Analytics, MS Office Suite",
      commercial: "Market Analysis, Intercultural Communication"
    }
  ];

  return (
    <section id="work" className="px-6 max-w-4xl mx-auto border-b border-black/10">
      {/* <h2 className="text-sm font-mono opacity-60 mb-16">// Professional Experience</h2> */}
      
      <div className="space-y-24">
        {experiences.map((exp) => (
          <div key={exp.title} className="group border-l-2 border-black/10 pl-8 hover:border-black transition-colors duration-300">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">{exp.title}</h3>
            <p className="font-mono text-sm opacity-60 mb-4">{exp.company} • {exp.duration}</p>
            
            {/* The Impact Result */}
            <div className="text-lg font-bold mb-4 text-[#dbc87d] bg-black inline-block px-3 py-1">
              {exp.result}
            </div>
            
            <p className="text-lg leading-relaxed mb-6 opacity-80 max-w-2xl">{exp.description}</p>
            
            {/* Hybrid Skill View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-widest">
              <div>
                <span className="opacity-40 block mb-1">Technical:</span>
                {exp.stack}
              </div>
              <div>
                <span className="opacity-40 block mb-1">Commercial:</span>
                {exp.commercial}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}