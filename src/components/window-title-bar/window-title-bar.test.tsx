import { render } from "@testing-library/react";
import WindowTitleBar from "./window-title-bar";

describe("WindowTitleBar Component", () => {
  it("should render correctly", () => {
    const windowTitleBar = render(
      <WindowTitleBar icon={"/icons/about-me.png"} iconAlt="Retro computer">
        Test Content
      </WindowTitleBar>
    );
    expect(windowTitleBar.getByText("Test Content")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const windowTitleBar = render(
      <WindowTitleBar icon={"/icons/about-me.png"} iconAlt="Retro computer">
        Test Content
      </WindowTitleBar>
    );
    expect(windowTitleBar.asFragment()).toMatchSnapshot();
  });
  it("should have correct alt text for icon", () => {
    const windowTitleBar = render(
      <WindowTitleBar icon={"/icons/about-me.png"} iconAlt="Retro computer">
        Test Content
      </WindowTitleBar>
    );
    const imgElement = windowTitleBar.getByAltText("Retro computer");
    expect(imgElement).toBeInTheDocument();
  });
});
