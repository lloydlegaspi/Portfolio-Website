import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { projects } from "@/content";
import { ProjectsExplorer } from "./ProjectsExplorer";

describe("ProjectsExplorer", () => {
  it("opens an accessible image dialog, closes with Escape, and restores focus", async () => {
    const user = userEvent.setup();
    const imageProjects = projects.filter((project) => project.image);
    render(<ProjectsExplorer projects={imageProjects.slice(0, 2)} />);
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
