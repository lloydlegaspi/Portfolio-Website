import { experiences, profile, projects } from "@/content";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl,
    image: `${profile.siteUrl}/images/profile/prof-pic-1.png`,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Metro Manila",
      addressCountry: "PH",
    },
    sameAs: profile.socialLinks
      .filter((link) => link.kind !== "email")
      .map((link) => link.href),
    jobTitle: experiences[0]?.title,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Polytechnic University of the Philippines",
    },
    knowsAbout: ["Data Science", "Machine Learning", "Software Development"],
    subjectOf: projects
      .filter((project) => project.featured)
      .map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.links.live ?? project.links.github,
      })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
