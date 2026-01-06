import { ArrowUpRight, Github } from "lucide-react"



const projects = [
  {
    title: "ARIA Salud – Healthcare Platform",
    description:
      "Production-grade healthcare management platform used by doctors. I worked as lead frontend developer, implementing patient management, consultation workflows, dashboards, secure authentication, protected routes, and AWS API integrations.",
    image: "/projects/aria-salud.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS Cognito",
      "Healthcare",
      "Production App"
    ],
    link: "https://ariasalud.com",
    github: "" // Private repository
  },
  {
    title: "Bike Reservation System",
    description:
      "Full-stack web application for managing bike reservations with real-time availability. Includes authentication, admin panel, CRUD operations, duplicate reservation prevention, and a clean architecture with typed services.",
    image: "/projects/bike-reservation.png",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "NextAuth",
      "Full Stack"
    ],
    link: "https://bike-reservation-app.vercel.app/",
    github: "https://github.com/DavidRuizE/bike-reservation-system"
  },
  {
    title: "IMDb Android App",
    description:
      "Android application that allows users to browse movies using a public API. Built following MVVM and Clean Architecture principles, with proper separation of layers, Retrofit networking, coroutines, and modern UI components.",
    image: "/projects/imdb-android.png",
    tags: [
      "Kotlin",
      "Android",
      "MVVM",
      "Clean Architecture",
      "Retrofit",
      "Mobile"
    ],
    link: "",
    github: "https://github.com/DavidRuizE/IMDb-Android"
  }
];


export const Projects = () =>{
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that 
                    <span className="font-serif italic text-white"> {" "}make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from complex web applications to innovative tools that solve real world problems.
                </p>
            </div>
            {/* Projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) =>(
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{ animationDelay: `${(idx + 1) * 100}ms`}}>
                        <div className="realtive overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                            {/* Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration-700">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary transition-all">
                                    <ArrowUpRight className="h-5 w-5"/>
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary transition-all">
                                    <Github className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-700">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}