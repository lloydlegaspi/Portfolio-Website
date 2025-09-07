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
        { name: "PHP", icon: (props) => <img src="/images/icons/php.png" alt="PHP" {...props} /> },
      ],
    },
    data: {
      title: "Data Science / AI",
        items: [
        { name: "ETL", icon: (props) => <img src="/images/icons/etl.png" alt="ETL" {...props} /> },
        { name: "EDA", icon: (props) => <img src="/images/icons/exploratory-analysis.png" alt="EDA" {...props} /> },
        { name: "NLP", icon: (props) => <img src="/images/icons/nlp.png" alt="NLP" {...props} /> },
        { name: "OpenCV", icon: (props) => <img src="/images/icons/opencv.png" alt="OpenCV" {...props} /> },
        {
          name: "TensorFlow",
          icon: (props) => <img src="/images/icons/tensorflow.png" alt="Model Development" {...props} />,
        },
        { name: "Keras", icon: (props) => <img src="/images/icons/keras.png" alt="Keras" {...props} /> },
        { name: "Scikit-Learn", icon: (props) => <img src="/images/icons/scikit-learn.png" alt="Scikit-Learn" {...props} /> },
        { name: "PyTorch", icon: (props) => <img src="/images/icons/pytorch.png" alt="PyTorch" {...props} /> },
        { name: "Hugging Face", icon: (props) => <img src="/images/icons/hugging-face.png" alt="Hugging Face" {...props} /> },
        { name: "Flask", icon: (props) => <img src="/images/icons/flask.png" alt="Flask" {...props} className="dark:invert" /> },
        {
          name: "Power BI",
          icon: (props) => <img src="/images/icons/power-bi.png" alt="Power BI" {...props} />,
        },
        { name: "Tableau", icon: (props) => <img src="/images/icons/tableau.png" alt="Tableau" {...props} /> },
        { name: "Metabase", icon: (props) => <img src="/images/icons/metabase.png" alt="Metabase" {...props} /> },
        { name: "Pandas", icon: (props) => <img src="/images/icons/pandas.png" alt="Pandas" {...props} /> },
        { name: "Streamlit", icon: (props) => <img src="/images/icons/streamlit.png" alt="Streamlit" {...props} /> },
      ],
    },
    software: {
      title: "Software Dev",
        items: [
        { name: "React", icon: (props) => <img src="/images/icons/react.png" alt="React" {...props} className="dark:invert" /> },
        { name: "Next.js", icon: (props) => <img src="/images/icons/nextjs.png" alt="Next.js" {...props} /> },
        { name: "Laravel", icon: (props) => <img src="/images/icons/laravel.png" alt="Laravel" {...props} /> },
  
        { name: "Tailwind CSS", icon: (props) => <img src="/images/icons/tailwind-css.png" alt="Tailwind CSS" {...props} /> },
        { name: "HTML", icon: HTMLIcon },
        { name: "CSS", icon: CSSIcon },
        { name: "Node.js", icon: (props) => <img src="/images/icons/nodejs.png" alt="Node.js" {...props} /> },
        { name: "REST APIs", icon: (props) => <img src="/images/icons/postman.png" alt="APIs / Postman" {...props} /> },
        { name: "Redis", icon: (props) => <img src="/images/icons/redis.png" alt="Redis" {...props} /> },
        { name: "Docker", icon: (props) => <img src="/images/icons/docker.png" alt="Docker" {...props} /> },
        { name: "Git", icon: GitIcon },
        { name: "GitHub", icon: GitHubIcon },

      ],
    },
    tools: {
      title: "Tools",
        items: [
        { name: "Jupyter Notebook", icon: JupyterIcon },
        { name: "Google Colab", icon: (props) => <img src="/images/icons/google-colab.png" alt="Google Colab" {...props} /> },
        { name: "VS Code", icon: VSCodeIcon },
        { name: "Excel / Spreadsheets", icon: (props) => <img src="/images/icons/microsoft-excel.png" alt="Excel" {...props} /> },
        { name: "Postman", icon: (props) => <img src="/images/icons/postman.png" alt="Postman" {...props} /> },
        { name: "MySQL", icon: MySQLIcon },
        { name: "PostgreSQL", icon: (props) => <img src="/images/icons/postgresql.png" alt="PostgreSQL" {...props} /> },
        { name: "Firebase", icon: (props) => <img src="/images/icons/firebase.png" alt="Firebase" {...props} /> },
        { name: "Linux", icon: (props) => <img src="/images/icons/linux.png" alt="Linux" {...props} className="dark:invert" /> },
        { name: "Bash", icon: (props) => <img src="/images/icons/bash.png" alt="Bash" {...props} className="dark:invert"/> },
        { name: "LaTeX", icon: (props) => <img src="/images/icons/latex.png" alt="LaTeX" {...props} className="dark:invert" /> },
        { name: "Vercel", icon: (props) => <img src="/images/icons/vercel.png" alt="Vercel" {...props} className="dark:invert" /> },
      ],
    },
  };

  const tabOrder = [
    ["programming", groups.programming.title],
    ["data", groups.data.title],
    ["software", groups.software.title],
    ["tools", groups.tools.title],
  ];

  // small icon size in px
  const ICON_SIZE = 20;

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
