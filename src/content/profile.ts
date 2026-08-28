import type { NavigationItem, Profile } from "@/types/portfolio";

export const profile = {
  name: "John Lloyd S. Legaspi",
  shortName: "John Lloyd Legaspi",
  headline: "Data Engineering · Analytics · Software Development",
  introduction:
    "Computer Science graduate candidate with hands-on experience in data engineering, analytics, and software development.",
  about: [
    "I'm a Computer Science graduate candidate at the Polytechnic University of the Philippines and a DOST Scholar, with practical experience building data pipelines, analytics solutions, and software products.",
    "My recent work spans dimensional data warehouses, workflow orchestration, decision-support dashboards, backend services, and machine-learning applications.",
  ],
  email: "jlloyd.legaspi@gmail.com",
  phone: "+63 945 581 6978",
  location: "Metro Manila, Philippines",
  resumePath: "/Legaspi_John_Lloyd_Resume.pdf",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://lloyd-legaspi-portfolio.vercel.app",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/lloydlegaspi",
      kind: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/john-lloyd-legaspi/",
      kind: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/lloydiiex/",
      kind: "instagram",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/legaspi.lloyd/",
      kind: "facebook",
    },
    { label: "Email", href: "mailto:jlloyd.legaspi@gmail.com", kind: "email" },
  ],
} as const satisfies Profile;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
] as const satisfies readonly NavigationItem[];
