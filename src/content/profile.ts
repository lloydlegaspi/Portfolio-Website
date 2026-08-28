import type { NavigationItem, Profile } from "@/types/portfolio";

export const profile = {
  name: "John Lloyd S. Legaspi",
  shortName: "John Lloyd Legaspi",
  headline: "Data science, machine learning, and software development",
  introduction:
    "Always eager to learn, build, and improve with data, code, and creativity.",
  about: [
    "I'm a Computer Science student at the Polytechnic University of the Philippines and a DOST Scholar. I enjoy solving problems with a logical and strategic mindset and planning work early.",
    "I continually work to become a better leader through every project and collaboration. Beyond academics and coding, I value walking and running as time to reset and recharge.",
  ],
  email: "jlloyd.legaspi@gmail.com",
  phone: "+63 945 581 6978",
  location: "Metro Manila, Philippines",
  resumePath: "/Legaspi_John_Lloyd_Resume.pdf",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lloydlegaspi.vercel.app",
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
  { href: "/#education", label: "Education" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const satisfies readonly NavigationItem[];
