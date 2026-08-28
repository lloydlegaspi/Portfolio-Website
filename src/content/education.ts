import type { Education } from "@/types/portfolio";

export const education = [
  {
    id: "pup-bscs",
    degree: "Bachelor of Science in Computer Science",
    institution: "Polytechnic University of the Philippines",
    range: { start: "2022-01-01", current: true },
    displayDate: "2022 – Present",
    location: "Sta. Mesa, Manila",
    logo: "/images/education-logos/pup-logo.png",
    distinction: "Cumulative GPA: 1.14",
    highlights: [
      "DOST Junior Level Science Scholarship Awardee",
      "Consistent President's Lister (2022–Present)",
      "Data Co-Lead, Google Developer Student Clubs – PUP Main (2023–2024)",
      "Member, PUP The Programmers' Guild (2023–Present)",
    ],
  },
  {
    id: "nnhs",
    degree: "Senior and Junior High School Diploma",
    institution: "Norzagaray National High School",
    range: { start: "2016-01-01", end: "2022-12-31" },
    displayDate: "2016 – 2022",
    location: "Norzagaray, Bulacan",
    logo: "/images/education-logos/nnhs-logo.png",
    distinction: "With Honors",
    highlights: [
      "Editor-in-Chief, Talisik (2021–2022)",
      "Protocol Officer, NNHS Supreme Student Government (2021–2022)",
      "President, Science, Technology, Engineering, and Mathematics (2020–2022)",
      "Regional Schools Press Conference 2019 Qualifier (Region 3)",
    ],
  },
] as const satisfies readonly Education[];
