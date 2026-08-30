import type { SkillGroup } from "@/types/portfolio";

export const skillGroups = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    skills: ["ETL/ELT", "PySpark", "dbt", "Airflow", "PostgreSQL"],
  },
  {
    id: "analytics-bi",
    title: "Analytics & BI",
    skills: ["SQL", "Power BI", "Dimensional Modeling", "Data Quality", "EDA"],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    skills: ["Python", "TypeScript", "Node.js", "REST APIs", "Testing"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    skills: [
      "scikit-learn",
      "TensorFlow",
      "Classification",
      "Model Evaluation",
    ],
  },
] as const satisfies readonly SkillGroup[];
