import { render } from "@testing-library/react";
import WindowContent from "./window-content";

describe("Window Component", () => {
  it("should render correctly", () => {
    const windowContent = render(<WindowContent>Test Content</WindowContent>);
    expect(windowContent.getByText("Test Content")).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const windowContent = render(
      <WindowContent>Snapshot Content</WindowContent>
    );
    expect(windowContent.asFragment()).toMatchSnapshot();
  });
});
