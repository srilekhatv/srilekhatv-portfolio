"use client";

import {
  BarChart as LucideBarChart,
  Database,
  Settings,
  Cloud,
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
} from "react-icons/si";

import { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
};

const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Programming & Libraries",
    items: [
      { name: "Python", icon: SiPython },
      { name: "R", icon: SiR },
      { name: "SQL", icon: Database },
      { name: "pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Power BI", icon: LucideBarChart },
      { name: "Tableau", icon: SiTableau },
      { name: "Excel", icon: Database },
      { name: "Oracle", icon: SiOracle },
      { name: "ServiceNow", icon: Settings },
      { name: "AWS", icon: Cloud },
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
