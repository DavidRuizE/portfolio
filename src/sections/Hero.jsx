import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
import { Button } from "@/components/Button"
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react"

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Vercel",
    "Tailwind CSS",
    "Prisma",
    "Jest",
    "Figma",
    "Git",
    "GitHub Actions",
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src="/portfolio/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}

                    />

                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left Col */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass test-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Engineer * Full Stack Developer
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                crafting <span className="text-primary glow-text"> digital </span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                                Hi I'm David Ruiz, a software engineer specializing in Rect.js, Next.js and TS/JS. I love to build scalable, performant web applications that users enjoy!
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                            <Button size="lg">
                                Contact Me! <ArrowRight className="w-5 h-5" />
                            </Button>

                            <AnimatedBorderButton children="download CV" />
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-600">
                            <span className="test-sm text-muted-foreground"> Follow: </span>
                            {[
                                { icon: Github, href: "https://github.com/DavidRuizE" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/david-ruiz-echeverri/" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"> {<social.icon className="w-5 h-5" />} </a>
                            ))}
                        </div>

                    </div>
                    {/* right col */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* img */}
                        <div className="relative max-w-md mx-auto ">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/portfolio/profile-photo" alt="David Ruiz" className="w-full aspect-[4/5] object-cover rounded-2xl opacity-80" />
                                <div className="absolute bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium"> Available for work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className=" mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    )
}