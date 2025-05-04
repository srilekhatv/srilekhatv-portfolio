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
    imagePath: "/autonexus.png", 
    title: "AutoNexus: Automate. Explore. Model. Explain.",
    description:
      "AutoNexus is a powerful Streamlit web app that automates the entire data pipeline — from uploading raw CSVs to cleaning, exploring, modeling, and explaining results. Users can perform missing value handling, feature scaling, categorical encoding, and visualize EDA insights with real-time plots. It also supports exportable datasets, and model explainability with SHAP, EBM, and LIME. Built for data scientists and analysts who want faster insights without the overhead of manual coding.",
    skills: [
      "Streamlit",
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Feature Engineering",
      "Data Cleaning",
      "EDA Automation",
      "SMOTE",
      "Modeling",
      "Explainability",
      "SHAP",
      "LIME",
      "Explainable Boosting Machine",

    ],
    link: "https://autonexus.streamlit.app/" // Replace with your actual Streamlit app link
  },

  {
    imagePath: "/loan.png",
    title: "FairLend: Interpretable & Fair Loan Default Prediction",
    description:
      "Developed a classification pipeline to predict loan defaults using Random Forest with SMOTE for class imbalance. Focused on model transparency by applying SHAP, LIME, and DiCE-ML to explain predictions and generate counterfactuals. Evaluated fairness across protected attributes using AIF360 and Fairlearn, and visualized global feature impacts using ALE and PDP plots. Achieved high recall on minority class while ensuring model interpretability and ethical compliance.",
    skills: [
      "Python",
      "Random Forest",
      "SMOTE",
      "SHAP",
      "LIME",
      "DiCE-ml",
      "AIF360",
      "Fairlearn",
      "Model Explainability",
      "Bias & Fairness Evaluation",
      "Classification Modeling"
    ],
    link: "https://github.com/srilekhatv/Loan-Default-Interpretability"
  },  

  {
    imagePath: "/fd.png",
    title: "FraudSpotter: Can You Tell What’s Real?",
    description:
      "Built a fraud detection model using Naive Bayes algorithms (Exact & Bernoulli) with 96.45% accuracy. Engineered key features using CountVectorizer, categorical encoding, and salary transformation. Addressed class imbalance using SMOTE, and evaluated performance with precision-recall curves and cross-validation.",
    skills: [
      "Python",
      "Feature Engineering",
      "SMOTE",
      "Naive Bayes",
      "CountVectorizer",
      "Imbalanced Classification",
      "Model Evaluation",
      "Cross-Validation",
    ],
    link: "https://github.com/srilekhatv/Fraud-Detection-ML", // no link to disable this one
  },

  {
    imagePath: "/wine.png",
    title: "WineWise: Forecasting Household Wine Purchases",
    description:
      "Developed a regression pipeline to predict 'AmountWines'—the amount spent on wine by customers—using demographic and behavioral data. Conducted data cleaning, feature engineering, and EDA. Trained and tuned Linear Regression, Random Forest, and XGBoost models using RandomizedSearchCV, achieving R² = 0.89 with XGBoost. Applied SHAP for interpretability, highlighting household income and number of adults as key predictors.",
    skills: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "XGBoost",
    "SHAP",
    "Feature Engineering",
    "Data Cleaning",
    "Regression Modeling",
    "R² Score",
    "RMSE"
    ],
    link: "https://github.com/srilekhatv/Wine_Prediction",
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
