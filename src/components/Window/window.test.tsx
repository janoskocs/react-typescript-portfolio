import { render } from "@testing-library/react";
import Window from "./window";
describe("Window Component", () => {
  it("should render children when isFocused is true", () => {
    const window = render(
      <Window isFocused={true}>
        <div data-testid="child">Child Content</div>
      </Window>
    );
    expect(window.getByTestId("child")).toBeInTheDocument();
  });
  it("should not render children when isFocused is false", () => {
    const window = render(
      <Window isFocused={false}>
        <div data-testid="child">Child Content</div>
      </Window>
    );
    expect(window.queryByTestId("child")).not.toBeInTheDocument();
  });
});
