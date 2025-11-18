import apps from "../../../../data/apps";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import TaskbarApp from "./taskbar-app";

describe("Taskbar app", () => {
  it("About Me app is focused when on '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TaskbarApp app={{ ...apps[0], isFocused: true }} />
      </MemoryRouter>
    );

    const link = screen.getByText("About Me").closest("a");
    expect(link).toHaveClass("button-3d-focused");
  });
  it("My Projects app is not focused when not on its route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TaskbarApp app={{ ...apps[1], isFocused: false }} />
      </MemoryRouter>
    );

    const link = screen.getByText("Contact Me").closest("a");
    expect(link).toHaveClass("button-3d");
  });
});
