import { render, screen, within } from "@testing-library/react";
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
    const figures = screen.getAllByRole("figure");
    const figuresWithTitle = (title: string) =>
      figures.filter((figure) => within(figure).queryByText(title));

    expect(figures).toHaveLength(7);
    expect(
      screen.getAllByRole("img", {
        name: /production partner screening overview/i,
      }),
    ).toHaveLength(2);
    expect(figuresWithTitle("Home")).toHaveLength(1);
    expect(figuresWithTitle("About the Report")).toHaveLength(1);
    expect(figuresWithTitle("Production Partner Screening")).toHaveLength(2);
    expect(figuresWithTitle("Company Screening Evidence")).toHaveLength(1);
    expect(
      within(
        screen
          .getByRole("heading", {
            level: 2,
            name: "Dashboard as evidence navigation",
          })
          .closest("section")!,
      ).getAllByRole("figure"),
    ).toHaveLength(4);
    expect(
      screen.getAllByRole("link", { name: /open full-resolution/i }),
    ).toHaveLength(7);
  });

  it("renders the Olist pipeline facts and contextual figures", () => {
    const { container } = renderCaseStudy("olist-ecommerce-pipeline");

    expect(container).toHaveTextContent("1,550,922");
    expect(container).toHaveTextContent("9 source files");
    expect(container).toHaveTextContent("17");
    expect(container).toHaveTextContent("9 mapped loads");
    expect(container).toHaveTextContent("24");
    expect(container).toHaveTextContent("311");
    const reportSection = screen
      .getByRole("heading", {
        level: 2,
        name: "Regional marketplace analytics",
      })
      .closest("section")!;
    const reportFigures = within(reportSection).getAllByRole("figure");

    expect(screen.getAllByRole("figure")).toHaveLength(7);
    expect(reportFigures).toHaveLength(4);
    expect(
      reportFigures.map(
        (figure) => figure.querySelector("figcaption > span")?.textContent,
      ),
    ).toEqual([
      "Home",
      "Reporting Context",
      "State Opportunity Deep Dive",
      "Decision Summary",
    ]);
    expect(
      within(reportSection).getAllByRole("link", {
        name: /open full-resolution/i,
      }),
    ).toHaveLength(4);
    expect(
      screen.getAllByRole("img", { name: /regional opportunity overview/i }),
    ).toHaveLength(2);
  });
});
