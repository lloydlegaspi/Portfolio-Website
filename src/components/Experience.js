import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primaryDark capitalize"
          >
            | {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="list-disc list-inside">
            {Array.isArray(work) && work.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const workNIDECControlTechniques = [
    'Implemented software development principles, collaborated with co-interns to learn and apply new technologies, and consistently met all deadlines.',
    'Assisted in creating a prototype for an itinerary website system using Python and Streamlit, designed its web interface, participated in meetings to gather requirements for the system proposal, and managed the database with MySQL functions.',
    'Collected, cleaned, and compiled marketing data from various sources, ensured data reliability and accuracy, and supported the marketing team in data analysis.',
  ];

  const workOmdena = [
    'Collaborated with 38 professionals globally on an end-to-end machine learning project, "Developing a Data-Driven Model for Waste Management Optimization," based in Berlin, Germany.',
    'Conducted collaborative Exploratory Data Analysis (EDA) on waste management datasets, leveraging Python for insightful visualizations.',
    'Pioneered the design and development of the "Waste Optimization Management" web application using Streamlit.',
  ];

  const workFactsOnTheGround = [
    'Worked with a team of 38 collaborators in an international tech start-up project “Detecting Facts on the Ground Using Machine Learning,” in partnership with Google Developer Student Clubs - PUP Main.',
    'Spearheaded a sub-team of 7 individuals responsible for data wrangling and validation, resulting in a 20.2% reduction in irrelevant and garbage data using Python Pandas.',
    'Assisted in data preprocessing tasks, including tokenization and normalization with NLTK.',
  ];

  return (
    <div className="my-8">
      <div className="p-4 bg-light dark:bg-dark rounded-xl shadow-lg">
        <h2 className="font-bold text-4xl mb-8 w-full text-center">
          Experience
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mb-7">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-8 xs:ml-2 ">
            <Details
              position="Software Engineering Intern"
              company="NIDEC Control Techniques"
              companyLink="/"
              time="Nov 2023 – May 2024"
              address="Remote – Nonthaburi, Thailand"
              work={workNIDECControlTechniques}
            />
            <Details
              position="Junior Machine Learning Engineer"
              company="Omdena – Berlin Chapter"
              companyLink="/"
              time="Aug 2023 – Oct 2023"
              address="Berlin, Germany"
              work={workOmdena}
            />
            <Details
              position="Lead Machine Learning Engineer"
              company="Facts on the Ground - Google Developer Student Clubs - PUP Main"
              companyLink="/"
              time="Feb 2023 – Aug 2023"
              address="Polytechnic University of the Philippines (PUP)"
              work={workFactsOnTheGround}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
