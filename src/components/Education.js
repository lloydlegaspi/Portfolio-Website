import React from "react";
import { ExperienceCard } from "./Experience";

const Education = () => {
  const schools = [
    {
      logo: "/images/education-logos/pup-logo.png",
      degree: "Bachelor of Science in Computer Science",
      school: "Polytechnic University of the Philippines",
      time: "2022 - Present",
      location: "Sta. Mesa, Manila",
      bullets: [
        "DOST Junior Level Science Scholarship (JLSS) Awardee",
        "Consistent President's Lister (2022-Present)",
        "Data Co-Lead, Google Developer Student Clubs - PUP Main (2023-2024)",
        "Data and AI Cadet, Google Developer Student Clubs - PUP Main (2022-2023)",
        "Member, PUP The Programmers' Guild (2023-Present)",
        "Research and Extensions Committee Member, PUP-ASCII (2022-2023)"
      ],
    },
    {
      logo: "/images/education-logos/nnhs-logo.png",
      degree: "Senior and Junior High School Diploma",
      school: "Norzagaray National High School",
      time: "2016 - 2022",
      location: "Norzagaray, Bulacan",
      bullets: [
        "Editor-in-Chief, Talisik (2021-2022)",
        "Protocol Officer, NNHS Supreme Student Government (2021-2022)",
        "President, Science, Technology, Engineering, and Mathematics (2020-2022)",
        "President - NNHS English and Filipino Club (2019-2020)",
        "Outstanding Campus Journalist (2019-2020)",
        "Regional Schools Press Conference 2019 Qualifier (Region 3)"
      ],
    },
  ];

  return (
    <div className="w-full">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-6">
        {schools.map((s, i) => (
          <div key={i} className="w-full">
            <ExperienceCard
              logo={s.logo}
              title={s.degree}
              company={s.school}
              time={s.time}
              location={s.location}
              bullets={s.bullets}
              tools={[]}
              logoSize="small"
              bodyClass="mt-3"
              statPill={i === 0 ? "Cumulative GPA: 1.14" : "With Honors"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;