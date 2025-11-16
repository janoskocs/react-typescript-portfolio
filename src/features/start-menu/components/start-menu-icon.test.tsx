import { render } from "@testing-library/react";
import apps from "../../../data/apps";
import StartMenuIcon from "./start-menu-icon";
import { MemoryRouter } from "react-router-dom";
describe("StartMenuIcon", () => {
  it("should render correctly", () => {
    const app = apps[0];
    const setIsStartMenuOpen = vitest.fn();
    const startMenuIcon = render(
      <MemoryRouter>
        <StartMenuIcon app={app} setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    expect(startMenuIcon).toMatchSnapshot();
    expect(startMenuIcon.getByText(app.name)).toBeInTheDocument();
    expect(startMenuIcon.getByAltText(app.icon.alt)).toBeInTheDocument();
  });
  it("should hide start menu on clicking the icon", () => {
    const app = apps[0];
    const setIsStartMenuOpen = vitest.fn();
    const startMenuIcon = render(
      <MemoryRouter>
        <StartMenuIcon app={app} setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    const linkElement = startMenuIcon.getByText(app.name).closest("a");
    if (linkElement) {
      linkElement.click();
    }
    expect(setIsStartMenuOpen).toHaveBeenCalledWith(false);
  });
  it("should have correct link attributes for external links", () => {
    const app = apps.find((a) => a.link.type === "external");
    if (!app) return;
    const setIsStartMenuOpen = vitest.fn();
    const startMenuIcon = render(
      <MemoryRouter>
        <StartMenuIcon app={app} setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    const linkElement = startMenuIcon.getByText(app.name).closest("a");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should have correct link attributes for internal links", () => {
    const app = apps.find((a) => a.link.type === "internal");
    if (!app) return;
    const setIsStartMenuOpen = vitest.fn();
    const startMenuIcon = render(
      <MemoryRouter>
        <StartMenuIcon app={app} setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    const linkElement = startMenuIcon.getByText(app.name).closest("a");
    expect(linkElement).toHaveAttribute("target", "_self");
  });

  it("should be focusable via keyboard", () => {
    const app = apps[0];
    const setIsStartMenuOpen = vitest.fn();
    const startMenuIcon = render(
      <MemoryRouter>
        <StartMenuIcon app={app} setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    const linkElement = startMenuIcon.getByText(app.name).closest("a");
    expect(linkElement).toHaveAttribute("tabindex", "0");
  });
  it("should have hover styles", () => {
    const app = apps[0];
    const setIsStartMenuOpen = vitest.fn();
    const startMenuIcon = render(
      <MemoryRouter>
        <StartMenuIcon app={app} setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    const linkElement = startMenuIcon.getByText(app.name).closest("a");
    expect(linkElement).toHaveClass("hover:bg-blue-950");
    expect(linkElement).toHaveClass("hover:text-white");
  });

  it("should render the correct icon image", () => {
    const app = apps[0];
    const setIsStartMenuOpen = vitest.fn();
    const startMenuIcon = render(
      <MemoryRouter>
        <StartMenuIcon app={app} setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    const imgElement = startMenuIcon.getByAltText(
      app.icon.alt
    ) as HTMLImageElement;
    expect(imgElement.src).toContain(`/icons/${app.icon.src}`);
    expect(imgElement.width).toBe(32);
    expect(imgElement.height).toBe(32);
  });
});
