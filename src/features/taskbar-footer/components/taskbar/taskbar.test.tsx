import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Taskbar from "./taskbar";
import apps from "../../../../data/apps";

const renderTaskbar = (route: string) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Taskbar />
    </MemoryRouter>
  );

const getInternalApps = () => apps.filter((a) => a.link.type === "internal");
const getExternalApps = () => apps.filter((a) => a.link.type === "external");

describe("Taskbar Component", () => {
  it("renders and focuses the correct internal app for a route", () => {
    const app = getInternalApps()[0];

    renderTaskbar(app.link.url);

    const button = screen.getByText(app.name);
    const link = button.closest("a");

    expect(button).toBeInTheDocument();
    expect(link).not.toBeNull();
    expect(link).toHaveClass("button-3d-focused");
  });

  it("does not display external apps in the taskbar", () => {
    renderTaskbar("/github");

    const externalApps = getExternalApps();

    externalApps.forEach((ext) => {
      expect(screen.queryByText(ext.name)).not.toBeInTheDocument();
    });
  });

  it("adds an internal app when navigating to its route", () => {
    const app = apps.find((a) => a.id === "my-projects");

    renderTaskbar(app!.link.url);

    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("switches focus between internal apps when route changes", () => {
    const about = apps.find((a) => a.id === "about-me")!;

    render(
      <MemoryRouter initialEntries={[about.link.url]}>
        <Taskbar />
      </MemoryRouter>
    );

    // About Me focused
    let aboutLink = screen.getByText(about.name).closest("a");
    expect(aboutLink).not.toBeNull();
    expect(aboutLink).toHaveClass("button-3d-focused");
  });

  it("does not duplicate a running application", () => {
    const aiApp = apps.find((a) => a.id === "janos-ai")!;

    const { rerender } = renderTaskbar(aiApp.link.url);

    expect(screen.getAllByText(aiApp.name).length).toBe(1);

    // Navigate to the same route again
    rerender(
      <MemoryRouter initialEntries={[aiApp.link.url]}>
        <Taskbar />
      </MemoryRouter>
    );

    expect(screen.getAllByText(aiApp.name).length).toBe(1);
  });
});
