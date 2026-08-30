import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";
import CertificationsPage from "./certifications/page";
import ProjectsPage from "./projects/page";

describe("route smoke tests", () => {
  it("renders the main page", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "John Lloyd Legaspi" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Portrait of John Lloyd Legaspi" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /i build reliable data systems and decision-ready analytics/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", {
        name: /i build reliable data systems and decision-ready analytics/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Building production-quality data pipelines and analytics systems.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Data Engineering" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Analytics & BI" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Software Engineering" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Machine Learning" }),
    ).toBeInTheDocument();
    const experienceSection = screen.getByRole("region", {
      name: /working across data, analytics, and software/i,
    });
    expect(
      within(experienceSection).getByText(
        /hands-on experience building data pipelines, backend systems/i,
      ),
    ).toBeInTheDocument();
    const professionalExperience = within(experienceSection).getByRole("list", {
      name: "Professional experience",
    });
    expect(within(professionalExperience).getAllByRole("article")).toHaveLength(
      5,
    );
    expect(professionalExperience.querySelectorAll("svg")).toHaveLength(5);
    const leadershipExperience = within(experienceSection).getByRole("list", {
      name: "Leadership and community experience",
    });
    expect(within(leadershipExperience).getAllByRole("article")).toHaveLength(
      4,
    );
    expect(leadershipExperience.querySelectorAll("svg")).toHaveLength(4);
    expect(
      within(leadershipExperience).getByText(
        /reduced irrelevant data by 20.2%/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /recent work, brought forward/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute(
      "href",
      "/Legaspi_John_Lloyd_Resume.pdf",
    );
    const certificationsLink = screen.getByRole("link", {
      name: /view all certifications/i,
    });
    expect(certificationsLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/john-lloyd-legaspi/details/certifications/",
    );
    expect(certificationsLink).toHaveAttribute("target", "_blank");
    expect(certificationsLink).toHaveAttribute("rel", "noreferrer");
    const educationSection = screen.getByRole("region", {
      name: /academic foundation in computer science/i,
    });
    expect(
      within(educationSection).getByText(
        "Cumulative GWA: 1.12 (1.00 = highest)",
      ),
    ).toBeInTheDocument();
    expect(
      within(educationSection).getByRole("list", {
        name: "Relevant coursework",
      }),
    ).toBeInTheDocument();
    expect(
      within(educationSection).queryByText(/editor-in-chief/i),
    ).not.toBeInTheDocument();
    const featuredCertifications = screen.getByRole("list", {
      name: "Featured certifications",
    });
    expect(
      within(featuredCertifications).getAllByRole("listitem"),
    ).toHaveLength(6);
    expect(
      within(featuredCertifications).getByText("AZ-900"),
    ).toBeInTheDocument();
    expect(
      within(featuredCertifications).getByRole("link", {
        name: /microsoft certified: azure fundamentals/i,
      }),
    ).toHaveAttribute(
      "href",
      "https://learn.microsoft.com/api/credentials/share/en-us/JohnLloydLegaspi-0410/787E21E959DA3AF3?sharingId=AA931207731F096F",
    );
    expect(
      within(featuredCertifications).getByRole("link", {
        name: /microsoft certified: azure ai fundamentals/i,
      }),
    ).toHaveAttribute(
      "href",
      "https://learn.microsoft.com/api/credentials/share/en-us/JohnLloydLegaspi-0410/125C0A1BAC22778A?sharingId=AA931207731F096F",
    );
    expect(
      within(featuredCertifications).getByRole("link", {
        name: /data engineer associate/i,
      }),
    ).toHaveAttribute(
      "href",
      "https://www.datacamp.com/certificate/DEA0018906493000",
    );
  });
  it("renders the projects page", () => {
    render(<ProjectsPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Projects" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Tanggol")).toBeInTheDocument();
  });
  it("renders the certifications page from canonical content", () => {
    render(<CertificationsPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /credentials and continued learning/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Microsoft Certified: Azure Fundamentals"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Civil Service Professional Eligibility"),
    ).toBeInTheDocument();
  });
});
