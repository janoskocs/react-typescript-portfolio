import DesktopIcon from "./desktop-icon";
import apps from "../../../data/apps";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
describe("DesktopIcon", () => {
  it("should render correctly", () => {
    const icon = apps[0];
    const component = render(
      <MemoryRouter>
        <DesktopIcon icon={icon} />
      </MemoryRouter>
    );
    expect(component.getByText(icon.name)).toBeInTheDocument();
    expect(component.getByAltText(`${icon.icon.alt}`)).toBeInTheDocument();
  });
  it("should navigate to the correct link", () => {
    const icon = apps[1];
    const component = render(
      <MemoryRouter>
        <DesktopIcon icon={icon} />
      </MemoryRouter>
    );
    const linkElement = component.getByRole("link");
    expect(linkElement).toHaveAttribute("href", icon.link.url);
  });
  it("should open external links in a new tab", () => {
    const icon = apps.find((app) => app.link.type === "external");
    if (!icon) return;
    const component = render(
      <MemoryRouter>
        <DesktopIcon icon={icon} />
      </MemoryRouter>
    );
    const linkElement = component.getByRole("link");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });
  it("should open internal links in the same tab", () => {
    const icon = apps.find((app) => app.link.type === "internal");
    if (!icon) return;
    const component = render(
      <MemoryRouter>
        <DesktopIcon icon={icon} />
      </MemoryRouter>
    );
    const linkElement = component.getByRole("link");
    expect(linkElement).toHaveAttribute("target", "_self");
  });
});
