import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyArticle } from "@/components/projects/CaseStudyArticle";
import { projects } from "@/content";
import {
  getProjectCaseStudy,
  projectCaseStudies,
} from "@/content/project-case-studies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projectCaseStudies.map(({ projectSlug }) => ({ slug: projectSlug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getProjectCaseStudy(slug);
  const project = projects.find((item) => item.id === slug);

  if (!caseStudy || !project) {
    notFound();
  }

  const canonical = `/projects/${slug}`;

  return {
    title: caseStudy.metadata.title,
    description: caseStudy.metadata.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: caseStudy.metadata.title,
      description: caseStudy.metadata.description,
      url: canonical,
      images: [
        {
          url: caseStudy.hero.src,
          width: caseStudy.hero.width,
          height: caseStudy.hero.height,
          alt: caseStudy.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.metadata.title,
      description: caseStudy.metadata.description,
      images: [caseStudy.hero.src],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getProjectCaseStudy(slug);
  const project = projects.find((item) => item.id === slug);

  if (!caseStudy || !project) {
    notFound();
  }

  return <CaseStudyArticle caseStudy={caseStudy} project={project} />;
}
