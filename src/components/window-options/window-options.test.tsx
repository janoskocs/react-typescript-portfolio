import { render } from "@testing-library/react";
import WindowOptions from "./window-options";

describe("WindowOptions Component", () => {
  it("should render correctly", () => {
    const windowOptions = render(<WindowOptions>Test Content</WindowOptions>);
    expect(windowOptions.getByText("Test Content")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const windowOptions = render(
      <WindowOptions>Snapshot Content</WindowOptions>
    );
    expect(windowOptions.asFragment()).toMatchSnapshot();
  });
});
