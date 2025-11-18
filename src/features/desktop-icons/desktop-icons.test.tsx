import { render } from "@testing-library/react";
import DesktopIcons from "./desktop-icons";
import { MemoryRouter } from "react-router-dom";
import apps from "../../data/apps";
describe("DesktopIcons", () => {
  it("should render DesktopIcons component", () => {
    const DesktopIconsElement = render(
      <MemoryRouter>
        <DesktopIcons />
      </MemoryRouter>
    );
    expect(DesktopIconsElement.getByRole("list")).toBeInTheDocument();
  });
  it("should render correct number of desktop icons", () => {
    const DesktopIconsElement = render(
      <MemoryRouter>
        <DesktopIcons />
      </MemoryRouter>
    );
    expect(DesktopIconsElement.getAllByRole("listitem").length).toBe(
      apps.length
    );
  });

  it("should have correct alt text for each desktop icon", () => {
    const DesktopIconsElement = render(
      <MemoryRouter>
        <DesktopIcons />
      </MemoryRouter>
    );
    apps.forEach((app) => {
      const imgElement = DesktopIconsElement.getByAltText(app.icon.alt);
      expect(imgElement).toBeInTheDocument();
    });
  });
  it("should link to correct URL for each desktop icon", () => {
    const screen = render(
      <MemoryRouter>
        <DesktopIcons />
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");

    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", apps[index].link.url);
    });
  });
});
