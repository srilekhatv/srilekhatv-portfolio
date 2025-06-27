"use client";
/* eslint-disable */

import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-10 px-6 max-w-6xl mx-auto">

      {/* Visible title */}
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold uppercase tracking-wide text-foreground">
          About Me
        </h2>
        <hr className="mt-2 border-slate-600" />
      </div>

      {/* Paragraphs */}
      <div className="flex flex-col gap-4 text-muted-foreground">
        <p>
        I’m a data storyteller and analyst passionate about turning raw data into actionable insights.
        With a strong foundation in SQL, Python, Power BI, and Tableau, I blend technical expertise 
        with strategic thinking to solve real-world problems.
        </p>

        <p>
        I hold a Master of Science in Information Systems and a Graduate Certificate in Business Analytics from 
        the University of Texas at Arlington. With proven expertise in SQL, Python, Power BI, and Tableau, 
        I build end-to-end data solutions that optimize processes and drive strategic growth. I am eager 
        to apply my advanced analytical skills and collaborative leadership experience to help your 
        organization make smarter, data-driven decisions.
        </p>

        <p>
        Beyond analytics, my drive extends to leadership and community. At the University of Texas at Arlington, 
        I was selected as an Election Supervisory Board Member for the Student Government, ensuring fair and 
        transparent electoral processes. During the COVID-19 pandemic, I volunteered with an NGO to distribute 
        essential supplies to those in need. Furthermore, my lifelong passion for athletics—competing in 
        inter-school sprints and playing basketball at the city level—has shaped me into a disciplined and 
        collaborative team player.
        </p>

        <p>
        Whether through code, design, or data, I’m driven to create impact—data-first, people-always.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 w-fit rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm border border-primary/20 leading-none">
          <GraduationCap className="w-4 h-4 shrink-0" />
          <span className="align-middle">M.S. Information Systems - May 2025</span>
        </div>
      </div>
    </section>
  );
}
