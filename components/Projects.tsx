"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/fd.png",
    title: "FraudSpotter: Can You Tell What’s Real?",
    description:
      "Built a fraud detection model using Naive Bayes algorithms (Exact & Bernoulli) with 96.45% accuracy. Engineered key features using CountVectorizer, categorical encoding, and salary transformation. Addressed class imbalance using SMOTE, and evaluated performance with precision-recall curves and cross-validation. Visualized fraud trends via Tableau, helping identify high-risk job categories for improved screening.",
    skills: [
      "Python",
      "Feature Engineering",
      "SMOTE",
      "Naive Bayes",
      "CountVectorizer",
      "Imbalanced Classification",
      "Model Evaluation",
      "Cross-Validation",
      "Tableau",
    ],
    link: "https://github.com/srilekhatv/Fraud-Detection-ML", // no link to disable this one
  },

  {
    imagePath: "/wine.png",
    title: "WineWise: Can Data Predict What You’ll Sip Next?",
    description:
      "Implemented regression models (Linear, Logistic, Random Forest) to predict wine sales trends. Achieved 5.2% RMSE and identified key sales drivers through correlation analysis, empowering data-driven pricing and inventory planning.",
    skills: [
      "R",
      "Linear/Logistic/Random Forest",
      "Regression Analysis",
      "RMSE",
      "Correlation Analysis",
      "Feature Importance",
      "Forecasting",
      "Data Cleaning",
      "Inventory Optimization",
    ],
    link: "",
  },

  {
    imagePath: "/add.png",
    title: "LegalLens: Real-Time Justice Insights",
    description:
      "Built an interactive Power BI dashboard using SQL Server data to monitor legal case outcomes, pending workloads, and subscription alerts. Enabled real-time tracking of advocate performance and improved operational decision-making for legal teams.",
    skills: [
      "SQL Server",
      "Power BI",
      "KPI Tracking",
      "Data Modeling",
      "Business Intelligence",
    ],
    link: "",
  },
  {
    imagePath: "/udb.png",
    title: "SmartStock: From Chaos to Clarity",
    description:
      "Designed a normalized Oracle database and built Tableau dashboards to streamline order fulfillment and inventory tracking. Improved database performance by 25% and reduced stock shortages with predictive insights into stock trends.",
    skills: [
      "Oracle",
      "SQL",
      "Tableau",
      "ERD",
      "Query Optimization",
      "Inventory Analytics",
      "Business Logic Implementation",
    ],
    link: "",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16 py-3 px-6 max-w-6xl mx-auto text-foreground">

      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-wide border-b border-muted-foreground pb-2">
          PROJECTS
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {jobProjects.map((project, index) => {
          const card = (
            <Card className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col lg:flex-row gap-6 hover:shadow-lg transition">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  priority
                  className="rounded-xl object-cover max-h-52 w-full border border-muted-foreground"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold text-lg flex items-center gap-2">
                  {project.title}
                  {project.link ? (
                    <MoveUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                  ) : (
                    <span className="text-xs text-yellow-500 font-semibold">🚧 Coming Soon</span>
                  )}
                </p>
                <div className="py-3 text-slate-600 dark:text-muted-foreground text-sm">
                  {project.description}
                </div>
                <CardFooter className="p-0 flex flex-wrap gap-2 pt-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          );

          return project.link ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              {card}
            </a>
          ) : (
            <div key={index} className="cursor-default">{card}</div>
          );
        })}
      </div>
    </section>
  );
}
