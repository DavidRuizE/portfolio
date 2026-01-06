const experiences = [
    {
      period: "2025 – Present",
      role: "Frontend Developer",
      company: "ARIA Salud",
      description:
        "Lead frontend developer for a production healthcare platform used by doctors. Built secure authentication flows, protected routes, dashboards, and complex forms. Integrated the frontend with a private AWS backend and ensured responsive, scalable UI.",
      abilities: [
        "Next.js",
        "TypeScript",
        "React",
        "Responsive UI Design",
        "Authentication & Authorization",
        "AWS Cognito",
        "Form Validation",
        "Secure API Integration"
      ],
      current: true,
    },
    {
    period: "Jun 2024 – Jan 2025",
    role: "Software Developer Intern",
    company: "Globant",
    description:
      "Worked on Android applications using Kotlin, contributing to both UI and business logic. Applied SOLID principles and Clean Architecture, consumed REST APIs, implemented local persistence, and collaborated with cross-functional teams in an Agile environment.",
    abilities: [
      "Kotlin",
      "Java",
      "Android Development",
      "Jetpack Compose",
      "REST API Consumption",
      "Room Database",
      "Dependency Injection (Hilt)",
      "SOLID Principles",
      "Agile Collaboration"
    ],
    current: false,
  },

  {
    period: "Dec 2023 – Feb 2024",
    role: "Bilingual Support Agent",
    company: "Solvo Global",
    description:
      "Provided bilingual (English/Spanish) customer support for an international airline, handling chat and call interactions. Developed strong communication, problem-solving, and multitasking skills in a fast-paced environment.",
    abilities: [
      "Bilingual Communication (English/Spanish)",
      "Customer Support",
      "Problem Solving",
      "Time Management",
      "Multitasking",
      "Professional Communication"
    ],
    current: false,
  },
];

export const Experience = () =>{
    return(
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that <span className="font-serif italic font-normal text-white">{" "}speaks volumes.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth, from curios beginner to professional software engineer.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                {/* Experience Items */}
                <div className="space-y-12">
                    {experiences.map((experience, idx) => (
                         <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms`}}>
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {experience.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                            </div>

                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                                }`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium">{experience.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
                                    <p className="text-muted-foreground">{experience.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{experience.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>{experience.abilities.map((tech, techIdx) => (
                                        <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground" >{tech}</span>
                                    ))}</div>
                                </div>
                            </div>
                         </div>
                    ))}

                </div>
                </div>
            </div>
        </section>
    )
}