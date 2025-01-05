"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FolderGit2, Home, Link2, Mail, Sun } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
  {
    id: "resume",
    label: "Resume",
    icon: Link2,
    href: "/resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export function Nav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border shadow-sm">
        {sections.map(({ id, label, icon: Icon, href, target, rel }) => (
          <Link key={id} href={href} passHref target={target} rel={rel}>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2 transition-colors duration-200",
                "md:flex md:items-center",
                "hidden"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:inline">{label}</span>
            </Button>
          </Link>
        ))}
        {/* Mobile Icons Only */}
        {sections.map(({ id, icon: Icon, href, target, rel }) => (
          <Link
            key={`mobile-${id}`}
            href={href}
            passHref
            target={target}
            rel={rel}
          >
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8 transition-colors duration-200 md:hidden")}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{id}</span>
            </Button>
          </Link>
        ))}
        <div className="ml-2 h-6 w-px bg-border" />
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Sun className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </nav>
    </div>
  );
}
