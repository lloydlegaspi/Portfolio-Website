import React from "react";
import Image from "next/image";

const EduCard = ({ logo, degree, school, time, location, bullets }) => (
  <article className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primaryDark/20">
    <div className="flex items-start gap-4">
      {logo ? (
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Image src={logo} alt={`${school} logo`} width={40} height={40} className="object-contain" />
        </div>
      ) : (
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800" />
      )}

      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-lg leading-tight">{degree}</h4>
            <div className="text-sm text-dark/60 dark:text-light/60">{school}</div>
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

const Education = () => {
  const schools = [
    {
      logo: "/images/education-logos/pup-logo.png",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      school: "Polytechnic University of the Philippines",
      time: "2022 - Present",
      location: "Sta. Mesa, Manila",
      bullets: [
        "DOST Junior Level Science Scholarship (JLSS) Awardee",
        "Data Co-Lead, Google Developer Student Clubs - PUP Main (2023-2024)",
        "Member, PUP The Programmers' Guild (2023-Present)",
        "Research and Extensions Committee Member, PUP-ASCII (2022-2023)"
      ],
    },
    {
      logo: "/images/education-logos/nnhs-logo.webp",
      degree: "Science, Technology, Engineering, and Mathematics",
      school: "Norzagaray National High School",
      time: "2016 - 2022",
      location: "Norzagaray, Bulacan",
      bullets: [
        "Editor-in-Chief, Talisik (2021-2022)",
        "Protocol Officer, NNHS Supreme Student Government (2021-2022)",
      ],
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h3 className="mb-6 text-3xl lg:text-4xl font-bold">Education builds foundations.</h3>
      </div>

  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
        {schools.map((s, i) => (
          <EduCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Education;