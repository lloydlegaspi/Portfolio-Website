import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";
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
  });
  it("renders the projects page", () => {
    render(<ProjectsPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Projects" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Tanggol")).toBeInTheDocument();
  });
});
