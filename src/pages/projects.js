import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import BasuraMeow from "../../public/images/projects/BasuraMeowItaponMeow.png";
import CCISConcernHub from "../../public/images/projects/CCISConcernHub.png";
import Mono from "../../public/images/projects/Mono.png";
import OneBigRun from "../../public/images/projects/OneBigRun.png";
import ResumeSkillMatcher from "../../public/images/projects/ResumeSkillMatcher.png";
import RockPaperScissors from "../../public/images/projects/RockPaperScissors.png";
import SocMedDashboard from "../../public/images/projects/SocMedDashboard.jpg";
import Taskify from "../../public/images/projects/Taskify.png";
import Tesdali from "../../public/images/projects/Tesdali.png";
import WasteManagement from "../../public/images/projects/WasteManagement.png";
import DetectingFacts from "../../public/images/projects/DFOG.jpeg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const Project = ({ title, img, link, github, description, date, hideLinks }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 min-h-[520px]">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{date}</span>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full min-h-[200px] object-cover rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <p className="text-lg text-left text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        {!hideLinks && (
          <div className="w-full mt-2 flex items-center justify-between">
            {github && (
              <Link href={github} target="_blank" className="w-8 md:w-6">
                <GithubIcon />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Lloyd Legaspi | Projects Page</title>
        <meta name="description" content="Portfolio projects by Lloyd Legaspi" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="grid grid-cols-12 gap-8 gap-y-12 xl:gap-x-8 lg:gap-x-6 md:gap-y-8 sm:gap-x-0">
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="CCIS Concern Hub"
                img={CCISConcernHub}
                link="https://github.com/lloydlegaspi/CCISConcernHub"
                github="https://github.com/lloydlegaspi/CCISConcernHub"
                description="A web-based student concern management system developed for the CCIS at PUP."
                date="October 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Basura Meow, Itapon Meow"
                img={BasuraMeow}
                link="https://lloydlegaspi.itch.io/basura-meow-itapon-meow"
                github="https://github.com/lloydlegaspi/BasuraMeowItaponMeow-ng"
                description="An educational and fun trash-sorting game promoting proper waste segregation."
                date="August 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="DFA-Based Resume Skill Matcher"
                img={ResumeSkillMatcher}
                link="https://resume-skill-matcher.streamlit.app/"
                github="https://github.com/lloydlegaspi/DFA-Based-Approach-for-Skill-Matching-in-Resume-Screening"
                description="A DFA-based algorithm for skill matching in resume screening, visualized using Streamlit."
                date="July 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="OneBigRun2025"
                img={OneBigRun}
                link="https://github.com/lloydlegaspi/OneBigRun2025"
                github="https://github.com/lloydlegaspi/OneBigRun2025"
                description="A web application applying MVC architecture and database integration for an educational event."
                date="June 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Mono Programming Language"
                img={Mono}
                link="https://lloydlegaspi-mono-lexical-analyzer.streamlit.app/"
                github="https://github.com/lloydlegaspi/Mono"
                description="A programming language emphasizing precision and uniformity, with a lexical analyzer component."
                date="May 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Social Media Dashboard"
                img={SocMedDashboard}
                link="https://social-media-dashboard-lloyd.netlify.app/"
                github="https://github.com/lloydlegaspi/SocialMediaDashboard"
                description="A responsive social media dashboard with a dark/light theme switcher."
                date="April 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="TESDAli"
                img={Tesdali}
                link="https://github.com/lloydlegaspi/TESDAli_IM_Project"
                github="https://github.com/lloydlegaspi/TESDAli_IM_Project"
                description="A streamlined TESDA assessment application management system."
                date="March 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Taskify"
                img={Taskify}
                link="https://github.com/lloydlegaspi/Taskify"
                github="https://github.com/lloydlegaspi/Taskify"
                description="A task scheduling application using Merge Sort for task prioritization."
                date="February 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Rock Paper Scissors"
                img={RockPaperScissors}
                link="https://github.com/lloydlegaspi/rock-paper-scissors"
                github="https://github.com/lloydlegaspi/rock-paper-scissors"
                description="A GUI-based Rock Paper Scissors game developed for the Odin Project."
                date="January 2024"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Waste Management Optimization"
                img={WasteManagement}
                link="https://github.com/OmdenaAI/Berlin-Chapter-Challenge-Waste-Management"
                github="https://github.com/OmdenaAI/Berlin-Chapter-Challenge-Waste-Management"
                description="A data-driven project for optimizing waste management practices using machine learning."
                date="December 2023"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Detecting Facts on the Ground Using Machine Learning"
                img={DetectingFacts}
                link="https://www.linkedin.com/posts/john-lloyd-legaspi_taking-a-moment-to-share-my-first-collaboration-activity-7102481397289816064-wd77?utm_source=share&utm_medium=member_desktop"
                description="A machine learning project focused on enhancing news articles through sentiment analysis, article classification, and news summarization."
                date="November 2023"
                hideLinks={true}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;



