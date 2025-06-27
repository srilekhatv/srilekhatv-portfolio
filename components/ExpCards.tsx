"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const jobPositions = [
  {
    timeline: "Jan 2024 — May 2025",
    currentPosition: "Graduate Teaching Assistant",
    place: "The University of Texas at Arlington",
    previousPositions: [""],
    description: [
      "Led targeted SQL training sessions and data analysis workshops for 100+ graduate students, measurably improving their proficiency in data querying and analysis.  ",
      "Designed and implemented around 3 hands-on case studies and interactive Tableau dashboards, empowering students to translate complex, real-world datasets into actionable business insights each semester.",
      "Mentored students on advanced analytical thinking, resulting in a 15% improvement in average scores on data-driven projects and assignments.",
    ],
    skills: [
      "SQL",
      "Python",
      "Tableau",
      "Oracle DB",
      "Data Visualization",
      "Data Analysis",
      "Excellent Communication",
      "Leadership",
    ],
  },
  {
    timeline: "Oct 2022 — May 2023",
    currentPosition: "Digital and Systems Analyst",
    place: "Shree Venkateshwara Foams LLP",
    previousPositions: [""],
    description: [
      "Engineered and launched a suite of Power BI dashboards to monitor real-time sales, inventory, and customer segmentation. These tools streamlined data access for leadership and improved strategic decision turnaround by 20%. ",
      "Led an initiative to automate inventory tracking by coordinating with cross-functional teams and integrating supply chain KPIs into the analytics workflow. This project reduced stock discrepancies by 25% and significantly improved fulfillment accuracy.",
      "Developed and executed data-driven digital marketing campaigns across social media platforms, leveraging audience segmentation and performance analytics. The optimized strategies led to a 15% increase in customer engagement and a 10% rise in lead conversions.",
    ],
    skills: [
      "SQL",
      "SQL Server",
      "Microsoft Excel",
      "Power BI",
      "Supply Chain Analytics",
      "Digital Marketing",
      "Social Media Marketing",
      "Stakeholder Communication",
      "Cross-Functional Team Collaboration",
    ],
  },
  {
    timeline: "Sept 2020 — Aug 2022",
    currentPosition: "PKI Analyst",
    place: "Wipro Limited",
    previousPositions: [""],
    description: [
      "Conducted quantitative root-cause analysis on over 2,000 test cases from 40+ server migrations using Proton. By extracting and analyzing defect data, I identified critical failure trends that informed system improvements and cut issue resolution time by 30%.",
      "Engineered a suite of ServiceNow dashboards to track and analyze IT service delivery, creating automated workflows for certificate requests, 50+ monthly change requests, and multiple escalated incidents. These BI tools provided key insights that streamlined request handling and reduced average response times by 40%.",
      "Directed the data validation and performance testing for 40+ critical server migrations to ensure 100% data integrity and operational readiness post-deployment. This role included managing hundreds of SSL certificates weekly to guarantee secure, uninterrupted service and maintain strict SLA compliance.",
    ],
    skills: [
      "IT Service Management",
      "Service Now",
      "Root Cause Analysis",
      "System Testing and Validation",
      "Data Integrity",
      "Public Key Infrastucture Management",
      "SLA Management and Compliance",
      "Data Driven Reporting",
      "Incident and Change Management",
      "Proton",
      "Silver PKI",
      "Digicert",
      "Excel",
      "Defect Trend Analysis",
      "Coordination",
      "Leadership",
      "Client Communication",
      "Stakeholder Communication",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 py-10 px-6 max-w-6xl mx-auto text-foreground">
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold uppercase tracking-wide">Experience</h2>
        <hr className="mt-2 border-slate-600" />
      </div>

      <div className="flex flex-col gap-6">
        {jobPositions.map((job, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col gap-3"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground">{job.currentPosition}</h3>
              <p className="text-slate-400 text-sm font-medium">{job.place}</p>
              <p className="text-xs text-muted-foreground mt-1">{job.timeline}</p>
            </div>
            <div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {job.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {job.skills.map((skill, idx) => (
                <Badge key={idx}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
