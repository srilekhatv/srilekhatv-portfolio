"use client";

import {
  BarChart as LucideBarChart,
  Database,
  Settings,
  Cloud,
  GitBranch,
} from "lucide-react";

import {
  SiTableau,
  SiOracle,
  SiPython,
  SiR,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiStreamlit,
  SiGithub,
  SiFirebase,
  SiFastapi,
  SiGoogleanalytics,
} from "react-icons/si";

import { IconType } from "react-icons";


type SkillItem = {
  name: string;
  icon: IconType;
};

const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "R", icon: SiR },
      { name: "SQL", icon: Database },
    ],
  },
  {
    category: "Libraries",
    items: [
      { name: "pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "InterpretML", icon: () => (
        <img
          src="/icons/interpretml.svg"
          alt="InterpretML"
          className="h-7 w-7 mb-2 text-foreground dark:invert"
        />
      ) },
      
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Power BI", icon: LucideBarChart },
      { name: "Tableau", icon: SiTableau },
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Excel", icon: Database, },
      { name: "Oracle", icon: SiOracle },
      { name: "ServiceNow", icon: Settings },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    category: "Platforms",
    items: [
      { name: "AWS", icon: Cloud },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 py-10 px-6 max-w-6xl mx-auto text-foreground"
    >
      {/* Section Heading */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold tracking-wide border-b border-muted-foreground pb-2">
          SKILLS
        </h3>
      </div>

      {/* Skill Categories */}
      <div className="grid gap-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h4 className="text-xl font-semibold mb-4">{group.category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="w-30 h-30 p-4 bg-muted border border-border rounded-2xl shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition"
                  >
                    <Icon className="text-3xl mb-2 text-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
