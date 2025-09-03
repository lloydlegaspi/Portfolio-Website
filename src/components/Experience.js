import React from "react";

const ExperienceCard = ({ logo, title, company, time, location, bullets }) => (
  <article className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primaryDark/20">
    <div className="flex items-start gap-4">
      {logo ? (
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <img src={logo} alt={`${company} logo`} className="w-10 h-10 object-contain" />
        </div>
      ) : (
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800" />
      )}

      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-lg leading-tight">{title}</h4>
            <div className="text-sm text-dark/60 dark:text-light/60">{company}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-dark/50 dark:text-light/50">{time}</div>
            {location && <div className="text-xs text-dark/50 dark:text-light/50">{location}</div>}
          </div>
        </div>

        <div className="mt-3 text-xs md:text-sm text-dark/70 dark:text-light/70">
          <ul className="list-disc list-inside space-y-1">
            {Array.isArray(bullets) && bullets.map((b, i) => (
              <li key={i} className="leading-snug">{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </article>
);

const Experience = () => {
  const experiences = [
    {
      logo: "/images/experience-logos/nidec-logo.png",
      title: "Software Engineering Intern",
      company: "NIDEC Control Techniques",
      time: "Nov 2023 – May 2024",
      location: "Remote – Nonthaburi, Thailand",
      bullets: [
        'Implemented software development principles, collaborated with co-interns to learn and apply new technologies, and consistently met all deadlines.',
        'Assisted in creating a prototype for an itinerary website system using Python and Streamlit, designed its web interface, participated in meetings to gather requirements for the system proposal, and managed the database with MySQL functions.',
        'Collected, cleaned, and compiled marketing data from various sources, ensured data reliability and accuracy, and supported the marketing team in data analysis.',
      ],
    },
    {
      logo: "/images/experience-logos/omdena-logo.jpg",
      title: "Junior Machine Learning Engineer",
      company: "Omdena – Berlin Chapter",
      time: "Aug 2023 – Oct 2023",
      location: "Berlin, Germany",
      bullets: [
        'Collaborated with 38 professionals globally on an end-to-end machine learning project, "Developing a Data-Driven Model for Waste Management Optimization," based in Berlin, Germany.',
        'Conducted collaborative Exploratory Data Analysis (EDA) on waste management datasets, leveraging Python for insightful visualizations.',
        'Pioneered the design and development of the "Waste Optimization Management" web application using Streamlit.',
      ],
    },
    {
      logo: "/images/experience-logos/gdsc-logo.png",
      title: "Lead Machine Learning Engineer",
      company: "Facts on the Ground - Google Developer Student Clubs - PUP Main",
      time: "Feb 2023 – Aug 2023",
      location: "Polytechnic University of the Philippines (PUP)",
      bullets: [
        'Worked with a team of 38 collaborators in an international tech start-up project “Detecting Facts on the Ground Using Machine Learning,” in partnership with Google Developer Student Clubs - PUP Main.',
        'Spearheaded a sub-team of 7 individuals responsible for data wrangling and validation, resulting in a 20.2% reduction in irrelevant and garbage data using Python Pandas.',
        'Assisted in data preprocessing tasks, including tokenization and normalization with NLTK.',
      ],
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h3 className="mb-6 text-3xl lg:text-4xl font-bold">Experience shapes skills.</h3>
      </div>

  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;