"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X, FileText } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeSection = useActiveSection([
    "about",
    "skills",
    "education",
    "experience",
    "projects",
  ]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4 px-6 lg:px-0">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center mt-4">
        <h1 className="text-xl font-bold">Srilekha Tirumala Vinjamoori</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {isDropdownOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 uppercase text-sm font-semibold text-start">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsDropdownOpen(false)}
                  className="block py-1 text-foreground hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col gap-4">
        <div className="flex flex-col gap-4 pr-6">
          <h1 className="text-3xl font-bold lg:text-start lg:whitespace-nowrap">
            Srilekha Tirumala Vinjamoori
          </h1>
          <h2 className="text-xl lg:text-start lg:whitespace-nowrap">
            Data Analyst | ML Enthusiast
          </h2>

          {/* Resume Button (Desktop Only) */}
          <a
            href="/Srilekha_TirumalaVinjamoori_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-background shadow hover:bg-primary/90 transition"
          >
            Resume
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="mt-6">
          <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
            {navItems.map((item) => {
              const { linkClass, indicatorClass, textClass } = getNavItemClasses(item.href);
              return (
                <li key={item.name} className="group">
                  <a href={item.href} className={`py-3 ${linkClass}`}>
                    <span className={indicatorClass}></span>
                    <span className={textClass}>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Socials - Shared */}
      <ul className="flex flex-row gap-4 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a href="https://github.com/srilekhatv" target="_blank" rel="noopener noreferrer">
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a href="https://www.linkedin.com/in/srilekha-tirumala-vinjamoori/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a href="mailto:srilekha.tv@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>

        {/* Resume Button - Only Mobile */}
        <div className="lg:hidden">
          <Button variant="outline" size="icon">
            <a
              href="/Srilekha_TirumalaVinjamoori_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-[1.2rem] w-[1.2rem]" />
            
            </a>
          </Button>
        </div>
  
          <ModeToggle />
        </ul>
    </header>
  );
}
