export type IsoDate = `${number}-${number}-${number}`;

export interface DateRange {
  start: IsoDate;
  end?: IsoDate;
  current?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "instagram" | "facebook" | "email";
}

export interface Profile {
  name: string;
  shortName: string;
  headline: string;
  introduction: string;
  about: readonly string[];
  email: string;
  phone: string;
  location: string;
  resumePath: string;
  siteUrl: string;
  socialLinks: readonly SocialLink[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  category: "Internship" | "Volunteering";
  range: DateRange;
  displayDate: string;
  location: string;
  logo: string;
  highlights: readonly string[];
  skills: readonly string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  range: DateRange;
  displayDate: string;
  location: string;
  logo: string;
  distinction?: string;
  highlights: readonly string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: IsoDate;
  file: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  documentation?: string;
  video?: string;
}

export interface Project {
  id: string;
  title: string;
  date: IsoDate;
  image: string;
  description: string;
  type: "individual" | "team";
  role?: string;
  tools: readonly string[];
  tags: readonly string[];
  links: ProjectLinks;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: readonly string[];
}

export type ChatRole = "assistant" | "user";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
}
