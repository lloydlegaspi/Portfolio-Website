import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { projects } from "@/content";
import { ProjectsExplorer } from "./ProjectsExplorer";

describe("ProjectsExplorer", () => {
  it("shows case-study links only for projects with published case studies", () => {
    render(<ProjectsExplorer projects={projects.slice(0, 3)} />);

    expect(
      screen.getByRole("link", {
        name: /view movie analytics .* case study/i,
      }),
    ).toHaveAttribute("href", "/projects/movie-analytics-pipeline");
    expect(
      screen.getByRole("link", {
        name: /view olist ecommerce .* case study/i,
      }),
    ).toHaveAttribute("href", "/projects/olist-ecommerce-pipeline");
    expect(screen.getAllByText("View case study →")).toHaveLength(2);
  });

  it("opens an accessible image dialog, closes with Escape, and restores focus", async () => {
    const user = userEvent.setup();
    const modalFixtures = projects.filter((project) =>
      ["tanggol", "tala"].includes(project.id),
    );
    render(<ProjectsExplorer projects={modalFixtures} />);
    const trigger = screen.getByRole("button", {
      name: /enlarge image for tanggol/i,
    });
    await user.click(trigger);
    expect(screen.getByRole("dialog", { name: "Tanggol" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
