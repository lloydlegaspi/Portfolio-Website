import { render, screen } from "@testing-library/react";
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
      screen.getByRole("heading", { name: /recent work, brought forward/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute(
      "href",
      "/Legaspi_John_Lloyd_Resume.pdf",
    );
    expect(
      screen.getByRole("link", { name: /view all certifications/i }),
    ).toHaveAttribute("href", "/certifications");
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
      screen.getByText("Microsoft Certified: Azure Fundamentals (AZ-900)"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Civil Service Professional Eligibility"),
    ).toBeInTheDocument();
  });
});
