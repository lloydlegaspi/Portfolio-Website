import React from "react";
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
  const technologies = [
    { name: "Python", icon: <PythonIcon /> },
    { name: "Java", icon: <JavaIcon /> },
    { name: "C", icon: <CIcon /> },
    { name: "SQL", icon: <SQLIcon /> },
    { name: "R", icon: <RIcon /> },
    { name: "HTML", icon: <HTMLIcon /> },
    { name: "CSS", icon: <CSSIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "GitHub", icon: <GitHubIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "VS Code", icon: <VSCodeIcon /> },
    { name: "MySQL", icon: <MySQLIcon /> },
    { name: "Jupyter", icon: <JupyterIcon /> },
  ];

  return (
    <div className="my-8">
      <div className="p-8 bg-light dark:bg-dark rounded-xl shadow-lg">
        <h3 className="mb-6 text-3xl lg:text-4xl font-bold ">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap gap-4 justify-start">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center w-18">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                {tech.icon}
              </motion.div>
              <p className="mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
