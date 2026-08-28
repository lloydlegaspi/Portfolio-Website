import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "@/content";
import { getProjectCaseStudy } from "@/content/project-case-studies";
import { CaseStudyArticle } from "./CaseStudyArticle";

function renderCaseStudy(slug: string) {
  const caseStudy = getProjectCaseStudy(slug);
  const project = projects.find((item) => item.id === slug);

  if (!caseStudy || !project) {
    throw new Error(`Missing test fixture for ${slug}`);
  }

  return render(<CaseStudyArticle caseStudy={caseStudy} project={project} />);
}

describe("CaseStudyArticle", () => {
  it("renders the Movie screening evidence and contextual figures", () => {
    const { container } = renderCaseStudy("movie-analytics-pipeline");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /movie analytics end-to-end data pipeline/i,
      }),
    ).toBeInTheDocument();
    expect(container).toHaveTextContent("44,940");
    expect(container).toHaveTextContent("7,388");
    expect(container).toHaveTextContent("83.6%");
    expect(container).toHaveTextContent("22");
    expect(container).toHaveTextContent("141");
    expect(screen.getAllByRole("figure")).toHaveLength(6);
  });

  it("renders the Olist pipeline facts and contextual figures", () => {
    const { container } = renderCaseStudy("olist-ecommerce-pipeline");

    expect(container).toHaveTextContent("1,550,922");
    expect(container).toHaveTextContent("9 source files");
    expect(container).toHaveTextContent("17");
    expect(container).toHaveTextContent("9 mapped loads");
    expect(container).toHaveTextContent("24");
    expect(container).toHaveTextContent("311");
    expect(screen.getAllByRole("figure")).toHaveLength(6);
  });
});
