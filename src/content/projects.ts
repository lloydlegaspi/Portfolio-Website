import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "movie-analytics-pipeline",
    title:
      "Movie Analytics End-to-End Data Pipeline & Partner Screening Dashboard",
    date: "2026-08-01",
    description:
      "A Kaggle and TMDB workflow for 90K+ movies, 44K+ companies, and 114K+ movie-company relationships, orchestrated through nine Airflow tasks and a 22-model warehouse with 141 tests; its Power BI screening narrowed 44,940 companies by 83.6% to 7,388 candidates.",
    image: "/images/projects/Movie/03_overview.png",
    tools: ["PySpark", "PostgreSQL", "dbt", "Apache Airflow", "Power BI"],
    tags: ["Data Engineering", "Data Analytics", "Dashboards"],
    featured: true,
    links: { caseStudy: "/projects/movie-analytics-pipeline" },
  },
  {
    id: "olist-ecommerce-pipeline",
    title:
      "Olist Ecommerce End-to-End Data Pipeline & Regional Marketplace Analytics",
    date: "2026-07-01",
    description:
      "A safeguarded Python and PostgreSQL pipeline for 1.55M rows from nine sources, with schema validation, transactional loading, audit logs, and rollback controls; its 17-task Airflow DAG includes nine dynamically mapped loads, while a 24-model dbt warehouse and 311 tests support regional Power BI analytics.",
    image: "/images/projects/Olist/page1-overview.png",
    tools: ["Python", "PostgreSQL", "dbt", "Apache Airflow", "Power BI"],
    tags: ["Data Engineering", "Data Analytics", "Dashboards"],
    featured: true,
    links: { caseStudy: "/projects/olist-ecommerce-pipeline" },
  },
  {
    id: "tanggol",
    title: "Tanggol",
    date: "2026-05-01",
    image: "/images/projects/Tanggol.png",
    description:
      "A mobile-first progressive web app that helps Filipinos understand common legal situations, find the right public office, and generate first-draft legal documents.",
    type: "team",
    role: "Team Lead / Full Stack Developer",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "PWA"],
    tags: ["AI/ML", "Web Development"],
    links: {
      live: "https://team67-tanggol.vercel.app/",
      github: "https://github.com/chrlsdrei/team67-tanggol",
      video:
        "https://www.youtube.com/watch?si=UKUFrtPT2tcITYkS&v=6hpNU1zXMaI&feature=youtu.be",
    },
  },
  {
    id: "tala",
    title: "TALA",
    date: "2026-04-01",
    image: "/images/projects/TALA.png",
    description:
      "A planning intelligence platform that combines teacher, training, and regional context data into actionable targeting insights.",
    type: "team",
    role: "Team Lead / Full Stack Developer",
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    tags: ["AI/ML", "Web Development"],
    links: {
      live: "https://tala-project-start.vercel.app/",
      github: "https://github.com/caramel-123/TALA-project",
    },
  },
  {
    id: "recall",
    title: "Recall",
    date: "2026-04-01",
    image: "/images/projects/Recall.png",
    description:
      "A study hub that turns notes, PDFs, and lecture materials into AI-generated quizzes, cited subject chat, and adaptive study workspaces.",
    type: "individual",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Azure OpenAI",
      "Tailwind CSS",
    ],
    tags: ["AI/ML", "Web Development"],
    links: { github: "https://github.com/lloydlegaspi/recall" },
  },
  {
    id: "cyclistic-bike-share",
    title: "Cyclistic Bike Share Analysis",
    date: "2026-05-01",
    image: "/images/projects/Cyclistic.png",
    description:
      "An analysis of 5.44M bike-share trips using Python, pandas, and Power BI that identified 337K+ commuter-like casual trips, representing 17.5% of casual usage.",
    type: "individual",
    role: "Data Analyst",
    tools: ["Python", "pandas", "Power BI"],
    tags: ["Data Analytics", "Dashboards"],
    featured: true,
    links: { github: "https://github.com/lloydlegaspi/Cyclistic_Bike_Share" },
  },
  {
    id: "cappy",
    title: "Cappy",
    date: "2026-04-01",
    image: "/images/projects/Cappy.png",
    description:
      "A medication-reminder mobile app with medication management, reminder logging, photo uploads, and Supabase-backed history.",
    type: "team",
    role: "Full Stack Developer",
    tools: ["Expo", "React Native", "TypeScript", "Supabase"],
    tags: ["Mobile Development"],
    links: { github: "https://github.com/lloydlegaspi/cappy" },
  },
  {
    id: "snakesight",
    title: "SnakeSight",
    date: "2026-03-01",
    displayDate: "March 2025 – March 2026",
    image: "/images/projects/SnakeSight.png",
    description:
      "A thesis web app using AttenDenseNet—DenseNet with CBAM—to classify 14 Philippine snake species from 1,400 labeled images at 89% accuracy, seven percentage points above baseline.",
    type: "team",
    role: "Thesis Lead / Model Developer",
    tools: ["TensorFlow", "DenseNet", "CBAM", "Next.js", "FastAPI", "Azure"],
    tags: ["AI/ML", "Web Development"],
    featured: true,
    links: {
      live: "https://orange-island-01cefc100.2.azurestaticapps.net/",
      github: "https://github.com/lloydlegaspi/SnakeSight",
    },
  },
  {
    id: "buzzarfeed",
    title: "BuzzarFeed",
    date: "2026-01-01",
    image: "/images/projects/BuzzarFeed.png",
    description:
      "A platform for discovering and reviewing food stalls at the BGC Night Market Bazaar, with customer, owner, and admin features.",
    type: "team",
    role: "Frontend Developer",
    tools: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    tags: ["Web Development"],
    links: {
      live: "https://buzzarfeed.free.nf/",
      github: "https://github.com/jimbarcos/BuzzarFeed",
      documentation:
        "https://drive.google.com/file/d/1bIre9paAvdEMJDR2sx9pId95wt5phOmf/view?usp=sharing",
    },
  },
  {
    id: "project-amihan",
    title: "Project AMIHAN",
    date: "2025-07-01",
    image: "/images/projects/ProjectAMIHANHomePage.png",
    description:
      "AMIHAN: Adaptive Model for Inundation Height Analysis using Neuro-Fuzzy, developed as an artificial intelligence course project.",
    type: "team",
    role: "Model Developer",
    tools: ["React.js", "Python Flask", "API"],
    tags: ["AI/ML", "Web Development"],
    links: {
      github: "https://github.com/AkzechKyla/ProjectAMIHAN",
      documentation:
        "https://docs.google.com/presentation/d/1qoi943e6hXxn8zWAMStdQ6Lx14O96DWH/edit?usp=sharing&ouid=116512230497222109094&rtpof=true&sd=true",
    },
  },
  {
    id: "maze-pathfinder",
    title: "Maze Pathfinder",
    date: "2025-05-01",
    image: "/images/projects/MazePathfinder.png",
    description:
      "A React visualization tool for pathfinding algorithms in maze environments, focused on A* search.",
    type: "team",
    role: "Lead Developer",
    tools: ["React", "A* Search"],
    tags: ["AI/ML", "Web Development"],
    links: {
      live: "https://ai-maze-pathfinder.netlify.app/",
      github: "https://github.com/lloydlegaspi/maze-pathfinder",
      documentation:
        "https://pupedu-my.sharepoint.com/:p:/g/personal/johnlloydslegaspi_iskolarngbayan_pup_edu_ph/EWPraeIGM5FPjgtF-u5DnykBjDaGllznGjUNnv_bfwU7vA?rtime=bW0aMODq3Ug",
    },
  },
  {
    id: "ccis",
    title: "CCIS Concern Hub",
    date: "2024-10-01",
    image: "/images/projects/CCISConcernHub.png",
    description:
      "A web-based student concern management system developed for the College of Computer and Information Sciences at PUP.",
    type: "team",
    role: "Frontend Developer",
    tools: ["React", "Firebase"],
    tags: ["Web Development"],
    links: { github: "https://github.com/lloydlegaspi/CCISConcernHub" },
  },
  {
    id: "basura",
    title: "Basura Meow, Itapon Meow",
    date: "2024-08-01",
    image: "/images/projects/BasuraMeowItaponMeow.png",
    description:
      "An educational trash-sorting game promoting proper waste segregation.",
    type: "team",
    role: "UI/UX Designer",
    tools: ["C#", "Unity"],
    tags: ["Game Development"],
    links: {
      live: "https://lloydlegaspi.itch.io/basura-meow-itapon-meow",
      github: "https://github.com/lloydlegaspi/BasuraMeowItaponMeow-ng",
    },
  },
  {
    id: "resume-matcher",
    title: "DFA-Based Resume Skill Matcher",
    date: "2024-07-01",
    image: "/images/projects/ResumeSkillMatcher.png",
    description:
      "A DFA-based algorithm for matching skills in resume screening, visualized with Streamlit.",
    type: "team",
    role: "Researcher",
    tools: ["Python", "Streamlit", "NLP"],
    tags: ["AI/ML", "Web Development"],
    links: {
      live: "https://resume-skill-matcher.streamlit.app/",
      github:
        "https://github.com/lloydlegaspi/DFA-Based-Approach-for-Skill-Matching-in-Resume-Screening",
    },
  },
  {
    id: "onebigrun",
    title: "OneBigRun2025",
    date: "2024-06-01",
    image: "/images/projects/OneBigRun.png",
    description:
      "An educational event application applying MVC architecture and database integration.",
    type: "individual",
    tools: ["C++"],
    tags: ["Web Development"],
    links: { github: "https://github.com/lloydlegaspi/OneBigRun2025" },
  },
  {
    id: "mono",
    title: "Mono Programming Language",
    date: "2024-05-01",
    image: "/images/projects/Mono.png",
    description:
      "A programming language emphasizing precision and uniformity, with a lexical analyzer component.",
    type: "team",
    role: "Lead Developer",
    tools: ["Python", "Streamlit", "DFA"],
    tags: ["Compiler", "Web Development"],
    links: {
      live: "https://lloydlegaspi-mono-lexical-analyzer.streamlit.app/",
      github: "https://github.com/lloydlegaspi/Mono",
    },
  },
  {
    id: "socmed",
    title: "Social Media Dashboard",
    date: "2024-04-01",
    image: "/images/projects/SocMedDashboard.jpg",
    description:
      "A responsive social media dashboard with dark and light themes.",
    type: "individual",
    tools: ["Tailwind CSS", "HTML"],
    tags: ["Web Development", "Dashboards"],
    links: {
      live: "https://social-media-dashboard-lloyd.netlify.app/",
      github: "https://github.com/lloydlegaspi/SocialMediaDashboard",
    },
  },
  {
    id: "tesdali",
    title: "TESDAli",
    date: "2024-03-01",
    image: "/images/projects/Tesdali.png",
    description:
      "A streamlined TESDA assessment application management system.",
    type: "team",
    role: "Lead Developer",
    tools: ["Python", "Streamlit", "MySQL"],
    tags: ["Web Development"],
    links: { github: "https://github.com/lloydlegaspi/TESDAli_IM_Project" },
  },
  {
    id: "taskify",
    title: "Taskify",
    date: "2024-02-01",
    image: "/images/projects/Taskify.png",
    description:
      "A task scheduling application using merge sort for task prioritization.",
    type: "team",
    role: "Lead Developer",
    tools: ["Python", "Streamlit"],
    tags: ["Web Development"],
    links: { github: "https://github.com/lloydlegaspi/Taskify" },
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    date: "2024-01-01",
    image: "/images/projects/RockPaperScissors.png",
    description:
      "A browser-based Rock Paper Scissors game developed for The Odin Project.",
    type: "individual",
    tools: ["HTML", "CSS", "JavaScript"],
    tags: ["Game Development", "Web Development"],
    links: { github: "https://github.com/lloydlegaspi/rock-paper-scissors" },
  },
  {
    id: "waste-management",
    title: "Waste Management Optimization",
    date: "2023-12-01",
    image: "/images/projects/WasteManagement.png",
    description:
      "A data-driven project for optimizing waste-management practices with machine learning.",
    type: "team",
    role: "Collaborator",
    tools: ["Python", "Streamlit", "ML"],
    tags: ["AI/ML"],
    links: {
      github:
        "https://github.com/OmdenaAI/Berlin-Chapter-Challenge-Waste-Management",
    },
  },
  {
    id: "dfog",
    title: "Detecting Facts on the Ground Using Machine Learning",
    date: "2023-11-01",
    image: "/images/projects/DFOG.jpeg",
    description:
      "A machine-learning project enhancing news articles through sentiment analysis, classification, and summarization.",
    type: "team",
    role: "Validation Lead",
    tools: ["Python", "Streamlit", "ML"],
    tags: ["AI/ML"],
    links: {
      live: "https://www.linkedin.com/posts/john-lloyd-legaspi_taking-a-moment-to-share-my-first-collaboration-activity-7102481397289816064-wd77",
    },
  },
  {
    id: "qr-dashboard",
    title: "QR Marketing Dashboard",
    date: "2023-08-01",
    image: "/images/projects/QRMarketingDashboard.png",
    description:
      "An Excel dashboard tracking QR-code campaign scans and conversions across advertising locations.",
    type: "individual",
    tools: ["Microsoft Excel"],
    tags: ["Dashboards"],
    links: {
      live: "https://1drv.ms/x/c/a9f55f9146e85164/EdY8zTg6YqRCpy8EpbXq3Z4BdrbRfiAn7oCfSxLoXsSJng?e=UAoixs",
      documentation:
        "https://drive.google.com/file/d/1GyXqvIhMbuB8m95aU0qnOcnxvELlFYAQ/view?usp=sharing",
    },
  },
  {
    id: "population-dashboard",
    title: "Global Population Insights Dashboard",
    date: "2023-08-01",
    image: "/images/projects/GlobalPopulationDashboard.jpg",
    description:
      "An Excel dashboard visualizing global population changes using United Nations data gathered with Power Query.",
    type: "individual",
    tools: ["Microsoft Excel", "Power Query"],
    tags: ["Dashboards"],
    links: {
      live: "https://1drv.ms/x/c/a9f55f9146e85164/EdlBZ5eNMmNMj4MdIS5h89MBl3_HTbTbDUzioJzuZMovNg?e=HYVbDR",
    },
  },
  {
    id: "hr-dashboard",
    title: "HR Attrition Analysis Dashboard",
    date: "2023-07-01",
    image: "/images/projects/HRAttritionDashboard.png",
    description:
      "A Power BI dashboard visualizing employee attrition patterns from HR data cleaned with OpenRefine.",
    type: "individual",
    tools: ["OpenRefine", "Power BI"],
    tags: ["Dashboards"],
    links: {
      live: "https://app.powerbi.com/view?r=eyJrIjoiMWU4NWMwOTUtYzBiOS00NDcxLWE2ZTktMWJiYTY0ZWYxNDA4IiwidCI6IjRkYTk4NTcxLWRjZWEtNDgzOS04ZmIxLTBiZGQ1ZGM5NjlmOSIsImMiOjEwfQ%3D%3D",
      documentation:
        "https://drive.google.com/file/d/18diSUoDLJqY85bjkZB6JPrg2AzK7MJhY/view?usp=sharing",
    },
  },
] as const satisfies readonly Project[];

export const featuredProjects = projects.filter((project) => project.featured);
