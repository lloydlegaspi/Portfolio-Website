import type { NavigationItem, Profile } from "@/types/portfolio";

export const profile = {
  name: "John Lloyd S. Legaspi",
  shortName: "John Lloyd Legaspi",
  headline: "Data Engineering · Analytics · Software Development",
  introduction:
    "Computer Science graduate candidate with hands-on experience in data engineering, analytics, and software development.",
  about: {
    heading: "I build reliable data systems and decision-ready analytics.",
    introduction:
      "I work across data engineering, analytics, and software development—turning raw data into tested pipelines, dimensional models, and business-facing products.",
    supporting:
      "My focus is on reproducibility, clear data models, maintainable code, and systems that are easy to explain and extend.",
    currentFocus:
      "Building production-quality data pipelines and analytics systems.",
  },
  email: "jlloyd.legaspi@gmail.com",
  phone: "+63 945 581 6978",
  location: "Metro Manila, Philippines",
  resumePath: "/Legaspi_John_Lloyd_Resume.pdf",
  certificationsUrl:
    "https://www.linkedin.com/in/john-lloyd-legaspi/details/certifications/",
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
  { href: "/certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
] as const satisfies readonly NavigationItem[];
