import React, { useState } from "react";
import {
  PythonIcon,
  JavaIcon,
  CIcon,
  SQLIcon,
  RIcon,
  HTMLIcon,
  CSSIcon,
  GitIcon,
  GitHubIcon,
  JavaScriptIcon,
  VSCodeIcon,
  MySQLIcon,
  JupyterIcon,
} from "./SkillsIcons";
import { motion } from "framer-motion";
import Image from 'next/image';

const Technologies = () => {
  const [active, setActive] = useState("programming");

  // Generic small SVG icon used as a fallback for items without dedicated icons
  const GenericIcon = ({ label = "", style = {}, ...rest }) => {
    const initials = label
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={label}
        style={{ width: style.width || 20, height: style.height || 20, ...style }}
        {...rest}
      >
        <rect width="24" height="24" rx="4" fill="#e5e7eb" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fontSize="10" fill="#374151">
          {initials}
        </text>
      </svg>
    );
  };

  // small icon size in px
  const ICON_SIZE = 20;

  const groups = {
    programming: {
      title: "Languages",
      items: [
        { name: "Python", icon: PythonIcon },
        { name: "C", icon: CIcon },
        { name: "Java", icon: JavaIcon },
        { name: "SQL", icon: SQLIcon },
        { name: "R", icon: RIcon },
        { name: "JavaScript", icon: JavaScriptIcon },
  { name: "PHP", icon: (props) => <Image src="/images/icons/php.png" alt="PHP" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
      ],
    },
    data: {
      title: "Data Science / AI",
        items: [
  { name: "ETL", icon: (props) => <Image src="/images/icons/etl.png" alt="ETL" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "EDA", icon: (props) => <Image src="/images/icons/exploratory-analysis.png" alt="EDA" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "NLP", icon: (props) => <Image src="/images/icons/nlp.png" alt="NLP" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "OpenCV", icon: (props) => <Image src="/images/icons/opencv.png" alt="OpenCV" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "TensorFlow", icon: (props) => <Image src="/images/icons/tensorflow.png" alt="Model Development" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Keras", icon: (props) => <Image src="/images/icons/keras.png" alt="Keras" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Scikit-Learn", icon: (props) => <Image src="/images/icons/scikit-learn.png" alt="Scikit-Learn" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "PyTorch", icon: (props) => <Image src="/images/icons/pytorch.png" alt="PyTorch" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Hugging Face", icon: (props) => <Image src="/images/icons/hugging-face.png" alt="Hugging Face" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Flask", icon: (props) => <Image src="/images/icons/flask.png" alt="Flask" width={ICON_SIZE} height={ICON_SIZE} {...props} className="dark:invert" /> },
  { name: "Power BI", icon: (props) => <Image src="/images/icons/power-bi.png" alt="Power BI" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Tableau", icon: (props) => <Image src="/images/icons/tableau.png" alt="Tableau" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Metabase", icon: (props) => <Image src="/images/icons/metabase.png" alt="Metabase" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Pandas", icon: (props) => <Image src="/images/icons/pandas.png" alt="Pandas" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Streamlit", icon: (props) => <Image src="/images/icons/streamlit.png" alt="Streamlit" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
      ],
    },
    software: {
      title: "Software Dev",
        items: [
  { name: "React", icon: (props) => <Image src="/images/icons/react.png" alt="React" width={ICON_SIZE} height={ICON_SIZE} {...props} className="dark:invert" /> },
  { name: "Next.js", icon: (props) => <Image src="/images/icons/nextjs.png" alt="Next.js" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Laravel", icon: (props) => <Image src="/images/icons/laravel.png" alt="Laravel" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  
  { name: "Tailwind CSS", icon: (props) => <Image src="/images/icons/tailwind-css.png" alt="Tailwind CSS" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
        { name: "HTML", icon: HTMLIcon },
        { name: "CSS", icon: CSSIcon },
  { name: "Node.js", icon: (props) => <Image src="/images/icons/nodejs.png" alt="Node.js" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "REST APIs", icon: (props) => <Image src="/images/icons/postman.png" alt="APIs / Postman" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Redis", icon: (props) => <Image src="/images/icons/redis.png" alt="Redis" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Docker", icon: (props) => <Image src="/images/icons/docker.png" alt="Docker" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
        { name: "Git", icon: GitIcon },
        { name: "GitHub", icon: GitHubIcon },

      ],
    },
    tools: {
      title: "Tools",
        items: [
        { name: "Jupyter Notebook", icon: JupyterIcon },
  { name: "Google Colab", icon: (props) => <Image src="/images/icons/google-colab.png" alt="Google Colab" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
        { name: "VS Code", icon: VSCodeIcon },
  { name: "Excel / Spreadsheets", icon: (props) => <Image src="/images/icons/microsoft-excel.png" alt="Excel" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Postman", icon: (props) => <Image src="/images/icons/postman.png" alt="Postman" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
        { name: "MySQL", icon: MySQLIcon },
  { name: "PostgreSQL", icon: (props) => <Image src="/images/icons/postgresql.png" alt="PostgreSQL" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Firebase", icon: (props) => <Image src="/images/icons/firebase.png" alt="Firebase" width={ICON_SIZE} height={ICON_SIZE} {...props} /> },
  { name: "Linux", icon: (props) => <Image src="/images/icons/linux.png" alt="Linux" width={ICON_SIZE} height={ICON_SIZE} {...props} className="dark:invert" /> },
  { name: "Bash", icon: (props) => <Image src="/images/icons/bash.png" alt="Bash" width={ICON_SIZE} height={ICON_SIZE} {...props} className="dark:invert"/> },
  { name: "LaTeX", icon: (props) => <Image src="/images/icons/latex.png" alt="LaTeX" width={ICON_SIZE} height={ICON_SIZE} {...props} className="dark:invert" /> },
  { name: "Vercel", icon: (props) => <Image src="/images/icons/vercel.png" alt="Vercel" width={ICON_SIZE} height={ICON_SIZE} {...props} className="dark:invert" /> },
      ],
    },
  };

  const tabOrder = [
    ["programming", groups.programming.title],
    ["data", groups.data.title],
    ["software", groups.software.title],
    ["tools", groups.tools.title],
  ];


  return (
    <div className="my-6">
  <div className="p-6 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-xl shadow-lg border border-gray-200 dark:border-neutral-700">

        {/* Tabs */}
  <div role="tablist" aria-label="Technology categories" className="w-full max-w-3xl mx-auto flex border border-gray-200 dark:border-neutral-700 rounded-md overflow-hidden mb-3">
          {tabOrder.map(([key, label], idx) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`flex-1 min-w-0 text-center px-3 py-1 text-xs font-medium focus:outline-none transition-colors disabled:opacity-50 ${
                active === key
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800"
              } ${idx > 0 ? "border-l border-gray-200 dark:border-neutral-700" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div role="tabpanel">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            // fixed height and scrollable when content overflows
            className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-56 sm:max-h-64 md:max-h-72 lg:max-h-80 overflow-y-auto pr-2"
          >
            {groups[active].items.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <div className="flex-shrink-0">
                    <Icon style={{ width: ICON_SIZE, height: ICON_SIZE }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-xs font-medium">{tech.name}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
