import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/content";

export function buildPortfolioContext(): string {
  return JSON.stringify({
    profile: {
      name: profile.name,
      headline: profile.headline,
      introduction: profile.introduction,
      about: profile.about,
      email: profile.email,
      location: profile.location,
      socialLinks: profile.socialLinks,
    },
    experience: experiences,
    education,
    projects,
    certifications,
    skills: skillGroups,
  });
}
