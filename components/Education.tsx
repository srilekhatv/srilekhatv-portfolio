"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function Education() {
  const educationDetails = [
    {
      degree: "Master of Science in Information Systems",
      institution: "The University of Texas at Arlington",
      location: "Texas, USA",
      timeline: "Aug 2023 – May 2025",
      gpa: "4.0/4.0",
      description:
        "Relevant Coursework: Data Mining, Python, Project Management, Database Management Systems, AI Ethics, Cloud Computing, Data Warehousing, Business Intelligence, and Analysis & Design.",
    },
    {
      degree: "Graduate Certificate in Business Analytics",
      institution: "The University of Texas at Arlington",
      location: "Texas, USA",
      timeline: "Aug 2023 – May 2025",
      gpa: "4.0/4.0",
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      timeline: "Aug 2016 – May 2020",
      gpa: "3.3/4.0",
    },
  ];

  return (
    <section id="education" className="scroll-mt-16 py-10 px-6 max-w-6xl mx-auto text-foreground">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold uppercase tracking-wide">Education</h2>
        <hr className="mt-2 border-slate-600" />
      </div>

      {/* Education Cards */}
      <div className="flex flex-col gap-6">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col gap-3"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-slate-400 text-sm font-medium">
                {edu.institution} • {edu.location}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{edu.timeline}</p>

              {edu.gpa && (
                <p className="text-xs font-medium text-foreground mt-2">
                  <strong>GPA:</strong> {edu.gpa}
                </p>
              )}
            </div>

            {edu.description && (
              <div>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
