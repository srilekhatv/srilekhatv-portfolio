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
    timeline: "Jan 2024 — Present",
    currentPosition: "Graduate Teaching Assistant",
    place: "University of Texas at Arlington",
    previousPositions: [""],
    description: [
      "Conducted SQL training sessions and data analysis workshops for graduate students.",
      "Designed case studies and real-world Tableau dashboards to demonstrate business insights.",
      "Simplified technical concepts, boosting students' analytical thinking and decision-making skills.",
    ],
    skills: [
      "SQL",
      "Python",
      "Tableau",
      "Oracle DB",
      "Excellent Communication",
      "Leadership",
    ],
  },
  {
    timeline: "Oct 2022 — May 2023",
    currentPosition: "Digital and Systems Executive",
    place: "Shree Venkateshwara Foams LLP",
    previousPositions: [""],
    description: [
      "Designed Power BI dashboards to track sales trends, inventory performance, and customer segmentation, leading to a 20% increase in actionable business insights.",
      "Performed customer segmentation analysis using SQL & Python, identifying key demographics for targeted marketing. Generated actionable insights that improved customer engagement by 15%.",
    ],
    skills: [
      "SQL",
      "SQL Server",
      "Microsoft Excel",
      "Power BI",
      "ROI Analysis",
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
      "Managed a team of 6 to test 120+ server migrations with 100% compliance in 10 days.",
      "Created ServiceNow dashboards to monitor IT service requests and SLA metrics, reducing response time by 40%.",
      "Analyzed defect data with Proton, cutting issue resolution time by 30% through trend-based optimizations.",
      "Oversaw weekly management of 400–500 SSL certificates, ensuring uninterrupted service and 100% SLA adherence.",
    ],
    skills: [
      "Proton",
      "Service Now",
      "Silver PKI",
      "Digicert",
      "Excel",
      "Testing",
      "Defect Trend Analysis",
      "Coordination",
      "Leadership",
      "Incident and Problem Management",
      "Change Management",
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
