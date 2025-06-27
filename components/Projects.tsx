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
import { MoveUpRight, Lock } from "lucide-react";

interface Project {
  imagePath: string;
  title: string;
  description: string;
  skills: string[];
  link: string; 
  status: 'live' | 'confidential' | 'coming-soon'; // Using all lowercase
}


const jobProjects: Project[] = [
  {
    imagePath: "/autonexus.png", 
    title: "AutoNexus: Automate. Explore. Model. Explain.",
    description:
      "AutoNexus is a full-stack, end-to-end AutoML and Explainable AI (XAI) platform I developed to make data science accessible and transparent. Featuring a secure Firebase authentication system, the app guides users through a professional machine learning workflow, including data preprocessing, automated hyperparameter tuning, and deep model interpretation with SHAP and LIME. To enhance the user experience, the platform features a context-aware AI assistant, powered by Google's Gemini, that provides conversational guidance throughout the data science lifecycle.",
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
      "Google Gemini API",
      "Firebase"


    ],
    link: "https://github.com/srilekhatv/AutoNexus-Showcase",
    status: "live",
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
      "InterpretML",
      "DiCE-ml",
      "AIF360",
      "Fairlearn",
      "Model Explainability",
      "Bias & Fairness Evaluation",
      "Classification Modeling"
    ],
    link: "https://github.com/srilekhatv/Loan-Default-Interpretability",
    status: "live",
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
    link: "https://github.com/srilekhatv/Fraud-Detection-ML", 
    status: "live",
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
    status: "live",
  },

  {
    imagePath: "/add.png",
    title: "LegalLens: Real-Time Justice Insights",
    description:
      "Built an interactive Power BI dashboard using data from Microsoft SQL Server to monitor legal case outcomes, advocate performance, pending workloads, and subscription alerts. This enabled real-time performance tracking and improved operational decision-making for legal teams by enhancing overall case management efficiency.",
    skills: [
      "SQL Server",
      "Power BI",
      "KPI Tracking",
      "Data Modeling",
      "Business Intelligence",
    ],
    link: "",
    status: "confidential",

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
    status: "coming-soon",
  },
  
];

export default function Projects() {
  const renderProjectBadge = (project: Project) => {
    // A project with a link is always live
    if (project.link) {
      return (
        <MoveUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
      );
    }
    // If no link, check the status
    switch (project.status) {
      case 'confidential':
        return (
          <span className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-500 font-semibold">
            <Lock size={12} />
            Confidential
          </span>
        );
      case 'coming-soon':
        return (
          <span className="text-xs text-yellow-600 dark:text-yellow-500 font-semibold">
            🚧 Coming Soon
          </span>
        );
      default:
        return null;
    }
  };
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
                  {renderProjectBadge(project)}
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
