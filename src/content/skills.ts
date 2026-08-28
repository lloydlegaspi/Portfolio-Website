import type { SkillGroup } from "@/types/portfolio";

export const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Java",
      "C",
      "PHP",
      "R",
    ],
  },
  {
    id: "data",
    title: "Data & AI",
    skills: [
      "Machine Learning",
      "NLP",
      "EDA",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "PyTorch",
      "Power BI",
      "Metabase",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Laravel",
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "Firebase",
      "Docker",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "Postman",
      "Linux",
      "Vercel",
    ],
  },
] as const satisfies readonly SkillGroup[];
