import Link from "next/link";
import Image from "next/image";
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
    <div className="bg-background font-mono scroll-smooth">
      <Nav />
      <main className="mx-auto max-w-7xl px-4">
        {/* Hero Section */};
        <section
          id="home"
          className="flex h-svh py-16 md:py-20 flex-col justify-center"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg">Hi, my name is</h2>
              <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl xl:text-8xl">
                Leo Mikko Uson
              </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium flex items-center gap-2">
              Frontend Developer
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg">
              I'm a frontend developer who builds modern web applications,
              focusing on user experience and performance, and creating
              solutions that solve real-world problems.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-4">
                <a
                  href="https://github.com/mikkouson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leo-mikko-uson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
              <div className="flex gap-4">
                <Button variant="default" asChild>
                  <Link href="#projects">View Resume</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View My Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-8 sm:py-12">
          <h2 className="mb-8 text-2xl font-bold">Projects</h2>
          <div className="space-y-4 sm:space-y-6">
            <ProjectCard
              title="Dental Clinic Management System"
              description="This is my capstone project, a web application that allows patients to book appointments and receive prescription recommendations based on a machine learning model. Admins can manage appointments and the overall system. The platform utilizes Next.js and Tailwind CSS for the frontend, while Supabase handles the database and authentication."
              technologies="TypeScript, React.js (Next.js), Git, Supabase"
              date="September 2024"
              image="/dental.png"
              link={""}
            />

            <ProjectCard
              title="Apartment Management System"
              description="An application designed to manage apartments, where users can view available apartments and tenants can access relevant information. Admins have tools to manage tenants, view apartment availability, and track payments. The system uses PHP for the backend and MySQL for relational data management, with a responsive UI built with Tailwind CSS."
              technologies="PHP, Git, MySQL"
              date="December 2023"
              image="/apartment.png"
              link={""}
            />
            <ProjectCard
              title="KanbanFlow"
              description="A task management platform where users can create and track tasks, organize them into different stages, and update their status in real-time. The app includes authentication and allows users to filter tasks by their status. MongoDB serves as the database, and Express.js is used for building the API."
              technologies="React.js, Express, Git, MongoDB"
              date="September 2023"
              image="/kanban.png"
              link={""}
            />
            <ProjectCard
              title="Event Registration System"
              description="A platform for Batangas State University to streamline event registrations. Students and faculty can sign up for events, view schedules, and receive confirmation emails. The system features responsive design with CSS, ensuring usability across devices, and leverages secure data storage for managing event details."
              technologies="PHP, Git, MySQL"
              date="January 2025"
              image="/event.png"
              link=""
            />
          </div>
        </section>
        {/* About Me Section */}
        <section id="about" className="py-8 sm:py-12 my-20">
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">About me</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground-500">
                  I am Leo Mikko R. Uson, a passionate web developer dedicated
                  to creating innovative and user-friendly websites. I enjoy
                  solving complex problems and staying updated with the latest
                  technologies to deliver modern, high-quality solutions.
                </p>

                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground-700 italic">
                    Here are the technologies I&apos;ve been working with.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1"
                      >
                        {tech.icon}
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Avatar className="w-64 h-64 border-2 rounded-full border-muted-foreground-50 hidden md:block">
                <AvatarImage src="/profile.png" alt="Leo's profile picture" />
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 flex flex-col items-center justify-center gap-4 text-center my-20"
        >
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="max-w-[600px] text-muted-foreground">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
          <Button asChild>
            <Link href="mailto:usonleomikko@gmail.com">Say Hello</Link>
          </Button>
        </section>
        {/* Footer */}
        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          <p>Built with Next.js and Tailwind CSS</p>
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
  date,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string;
  date: string;
}) {
  return (
    <Card className="group relative overflow-hidden transition-colors hover:bg-muted/50">
      <div className="flex flex-col sm:flex-row gap-4">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          quality={100}
          priority={true}
          className="w-full sm:w-96  rounded-lg antialiased"
          loading="eager"
          sizes="(max-width: 640px) 100vw, 500px"
        />
        <CardContent className="flex-1 space-y-3 p-4">
          <Link href={link} className="block">
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold tracking-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">
                {description}
              </p>
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span className="line-clamp-1">{technologies}</span>
            {/* <span className="text-xs">{date}</span> */}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
