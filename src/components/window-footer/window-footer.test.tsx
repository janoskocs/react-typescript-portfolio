import { render } from "@testing-library/react";
import WindowFooter from "./window-footer";
describe("WindowFooter Component", () => {
  it("should render correctly", () => {
    const windowFooter = render(<WindowFooter>Test Content</WindowFooter>);
    expect(windowFooter.getByText("Test Content")).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const windowFooter = render(<WindowFooter>Snapshot Content</WindowFooter>);
    expect(windowFooter.asFragment()).toMatchSnapshot();
  });
});
