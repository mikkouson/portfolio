import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background font-sans scroll-smooth selection:bg-primary/30">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 flex justify-center opacity-30">
        <div className="absolute top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary/30 blur-[120px] mix-blend-screen" />
      </div>
      <Nav />
      <main className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-[100dvh] flex-col justify-center py-20"
        >
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-2">
              <p className="text-lg font-medium text-primary tracking-wide uppercase">Hi, my name is</p>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl xl:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                Leo Mikko Uson
              </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold flex items-center gap-2 text-muted-foreground font-display">
              Software Developer
            </h2>
            <p className="max-w-[650px] text-lg sm:text-xl leading-relaxed text-muted-foreground/90">
              I'm a software developer who builds modern web applications,
              focusing on user experience and performance, and creating
              solutions that solve real-world problems.
            </p>
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex gap-6">
                <a
                  href="https://github.com/mikkouson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leo-mikko-uson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
                  <Link
                    href="/Uson, Leo Mikko R. - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full backdrop-blur-md bg-background/50 hover:bg-muted/80 transition-all duration-300" asChild>
                  <Link href="#projects">View My Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24">
          <h2 className="mb-12 text-3xl sm:text-4xl font-bold font-display tracking-tight flex items-center gap-4">
            <span className="w-12 h-px bg-primary/50"></span>
            Featured Projects
            <span className="w-full max-w-[200px] h-px bg-border"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ProjectCard
              title="OfferOrb"
              description="Built an AI-powered tool that compares job offers and generates clear, structured decision insights. Integrated Ollama gpt-oss:120b-cloud API to analyze roles, pros, cons, and overall fit. Designed a clean, user-focused interface to simplify complex career decisions."
              technologies="TypeScript, React.js (Next.js), Ollama"
              image="/offerorb.png"
              link="https://github.com/mikkouson/OfferOrb"
            />
            <ProjectCard
              title="Dental Clinic Management System"
              description="This is my capstone project, a web application that allows patients to book appointments and receive prescription recommendations based on a machine learning model. Admins can manage appointments and the overall system. The platform utilizes Next.js and Tailwind CSS for the frontend, while Supabase handles the database and authentication."
              technologies="TypeScript, React.js (Next.js), Git, Supabase"
              image="/dental.png"
              link="https://github.com/mikkouson/Dental-Appointment-Management-System"
            />
            <ProjectCard
              title="KanbanFlow"
              description="A task management platform where users can create and track tasks, organize them into different stages, and update their status in real-time. The app includes authentication and allows users to filter tasks by their status. MongoDB serves as the database, and Express.js is used for building the API."
              technologies="React.js, Express, Git, MongoDB"
              image="/kanban.png"
              link="https://github.com/mikkouson/Kanban"
            />
            <ProjectCard
              title="Apartment Management System"
              description="An application designed to manage apartments, where users can view available apartments and tenants can access relevant information. Admins have tools to manage tenants, view apartment availability, and track payments. The system uses PHP for the backend and MySQL for relational data management, with a responsive UI built with Tailwind CSS."
              technologies="PHP, Git, MySQL"
              image="/apartment.png"
              link="https://github.com/mikkouson/Apartment-MGT"
            />
            <ProjectCard
              title="Event Registration System"
              description="A platform for Batangas State University to streamline event registrations. Students and faculty can sign up for events, view schedules, and receive confirmation emails. The system features responsive design with CSS, ensuring usability across devices, and leverages secure data storage for managing event details."
              technologies="PHP, Git, MySQL"
              image="/event.png"
              link=""
            />
          </div>
        </section>
        <section id="experience" className="py-16 sm:py-24">
          <h2 className="mb-12 text-3xl sm:text-4xl font-bold font-display tracking-tight flex items-center gap-4">
            <span className="w-12 h-px bg-primary/50"></span>
            Experience
            <span className="w-full max-w-[200px] h-px bg-border"></span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <ExperienceCard
              role="IT Programmer"
              company="Arkray Industry Inc."
              type="Fulltime - Onsite"
              date="July 2025 – Present"
              description={[
                "Developed a comprehensive Fixed Asset Monitoring System with financial depreciation tracking, audit logs, and automated PDF tag generation.",
                "Engineered a purchase and vendor request system featuring multi-level approval workflows and automated routing for final accounting department sign-off.",
                "Deployed a centralized Internal Testing & Examination System used to handle technical screenings for job applicants and employee evaluation assessments.",
                "Modernized legacy database interfaces with responsive, minimalist layouts to optimize system workflow velocity and eliminate internal user data entry errors."
              ]}
            />
            <ExperienceCard
              role="Software Developer Intern"
              company="Bridge Consultancy FZE"
              type="Internship - Remote"
              date="February 2025 – May 2025"
              description={[
                "Designed and developed a full-stack invoicing system using Next.js and Supabase.",
                "Implemented complete CRUD functionality with a RESTful API architecture.",
                "Enhanced the invoice creation process by building a user-friendly interface and efficient data handling."
              ]}
            />
          </div>
        </section>
        {/* About Me Section */}
        <section id="about" className="py-16 sm:py-24">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight flex items-center gap-4">
                <span className="w-12 h-px bg-primary/50"></span>
                About me
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I am Leo Mikko R. Uson, a passionate web developer dedicated
                  to creating innovative and user-friendly websites. I enjoy
                  solving complex problems and staying updated with the latest
                  technologies to deliver modern, high-quality solutions.
                </p>

                <div className="space-y-4 pt-4">
                  <p className="font-medium text-foreground">
                    Technologies I frequently use:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-secondary/50 hover:bg-primary/20 transition-colors cursor-default border border-primary/10"
                      >
                        <span className="text-primary">{tech.icon}</span>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center group relative hidden md:flex">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl group-hover:opacity-60 transition duration-1000"></div>
              <Avatar className="w-72 h-72 border-4 border-background shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                <AvatarImage src="/profile.png" alt="Leo's profile picture" className="object-cover" />
                <AvatarFallback className="text-4xl font-display">LM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 flex flex-col items-center justify-center gap-8 text-center"
        >
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase">What's Next?</p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display">Get In Touch</h2>
          </div>
          <p className="max-w-[500px] text-lg text-muted-foreground leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back
            to you!
          </p>
          <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 h-14 px-8 text-lg mt-4" asChild>
            <Link href="mailto:usonleomikko@gmail.com">Say Hello 👋</Link>
          </Button>
        </section>
        {/* Footer */}
        <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
}

const technologies = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Supabase", icon: <FaDatabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "TypeScript", icon: <SiTypescript /> },
];

function ProjectCard({
  title,
  description,
  link,
  image,
  technologies,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string;
}) {
  return (
    <Card className="group relative overflow-hidden flex flex-col bg-card/40 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
      <div className="relative overflow-hidden aspect-video w-full">
        <Image
          src={image}
          alt={title}
          fill
          quality={100}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity duration-500" />
      </div>
      <CardContent className="flex-1 space-y-4 p-6 md:p-8 flex flex-col relative z-10 -mt-8">
        <div className="space-y-3 flex-1">
          <h3 className="text-2xl font-bold font-display tracking-tight text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="space-y-6 pt-4 mt-auto">
          <div className="flex flex-wrap items-center gap-2">
            {technologies.split(",").map((tech) => (
              <Badge key={tech.trim()} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 border-primary/10 text-xs">
                {tech.trim()}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            {link && (
              <Button asChild size="sm" variant="default" className="rounded-full shadow-lg hover:shadow-primary/25">
                <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="font-medium">View Project</span>
                  <ExternalLink size={16} />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ExperienceCard({
  role,
  company,
  date,
  type,
  description,
}: {
  role: string;
  company: string;
  date: string;
  type: string;
  description: string[];
}) {
  return (
    <Card className="group relative overflow-hidden bg-card/40 backdrop-blur-sm border-primary/10 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-6 md:p-8">
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold font-display text-foreground tracking-tight">{role}</h3>
            <p className="text-base text-primary font-medium">
              {company} <span className="text-muted-foreground font-normal ml-1">• {type}</span>
            </p>
          </div>
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground shrink-0">{date}</Badge>
        </div>
        <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
          {description.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
