"use client";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-8 px-6 py-12 lg:py-24"
    >
      <h2 className="text-3xl font-bold tracking-wide border-b border-muted-foreground pb-2 mb-6 text-foreground">
        CONTACT ME
      </h2>

      <p className="text-muted-foreground mb-6 max-w-2xl">
          Data-driven conversations start here. Lets connect and create impact!
      </p>

      <div className="flex flex-wrap gap-4">
        {/* Email Button */}
        <Button asChild variant="default">
          <a href="mailto:srilekha.tv@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </a>
        </Button>

        {/* LinkedIn Button */}
        <Button asChild variant="outline">
          <a
            href="https://www.linkedin.com/in/srilekha-tirumala-vinjamoori/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Connect on LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
