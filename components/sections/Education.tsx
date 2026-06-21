export default function Education() {
    const courses = [
        {
            title: "Fullstackopen Helsinki Course",
            institution: "University of Helsinki",
            duration: "6 months",
            stack: "React, Redux, MongoDB, PostgreSQL, GraphQL, Typescript, React Native, NodeJs, Express, CI/CD, Next.JS, RESTApi",
            description: "Designing and programming full-stack web applications, integrating relational/non-relational databases to solve specific business workflow challenges."
        },
        {
            title: "Software Development Part-Time Accelerated",
            institution: "Coding Dojo",
            duration: "3 months",
            stack: "Html, Css, Javascript, NodeJS, MongoDB",
            description: "Introduction to Web Fundamentals, MERN, Projects and Algorithms"
        }
    ];

    const formal_education = [
        {
            title: "Undergraduate studies in Economics and Informatics",
            institution: "Universiteti Tiranes, Fakulteti Ekonomise",
            duration: "2018 - 2021"
        },
        {
            title: "Undergraduate studies in Physics",
            institution: "Technisches Universitat Munchen - TUM",
            duration: "2013 - 2018"
        }
    ];

    return (
        <section id="education" className="py-5 px-6 max-w-4xl mx-auto border-b border-black/10">
            <h2 className="text-sm font-mono opacity-60 mb-16">Education & Training</h2>

            <div className="space-y-24">
                {/* Courses Map */}
                {courses.map((course) => (
                    <div key={course.title} className="group border-l-2 border-black/10 pl-8 hover:border-black transition-colors duration-300">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">{course.title}</h3>
                        <p className="font-mono text-sm opacity-60 mb-4">{course.institution} • {course.duration}</p>
                        <p className="text-lg leading-relaxed mb-4 opacity-80 max-w-2xl">{course.description}</p>
                        <div className="font-mono text-[10px] uppercase tracking-widest">
                            <span className="opacity-40 block mb-1">Stack:</span>
                            {course.stack}
                        </div>
                    </div>
                ))}

                {/* Formal Education Map */}
                {formal_education.map((edu) => (
                    <div key={edu.title} className="group border-l-2 border-black/10 pl-8 hover:border-black transition-colors duration-300">
                        <h3 className="text-2xl font-bold uppercase tracking-tighter mb-1">{edu.title}</h3>
                        <p className="font-mono text-sm opacity-60">{edu.institution} • {edu.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}