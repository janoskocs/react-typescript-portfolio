import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import TaskbarFooter from "./taskbar-footer";

describe("TaskbarFooter", () => {
  it("should render TaskbarFooter component", () => {
    const Taskbar = render(
      <MemoryRouter>
        <TaskbarFooter setIsStartMenuOpen={() => {}} />
      </MemoryRouter>
    );
    expect(Taskbar.getByRole("contentinfo")).toBeInTheDocument();
  });
  it("should toggle start menu on button click", () => {
    let isStartMenuOpen = false;

    const setIsStartMenuOpen = vi.fn((update) => {
      // React passes a function when toggling
      if (typeof update === "function") {
        isStartMenuOpen = update(isStartMenuOpen);
      } else {
        isStartMenuOpen = update;
      }
    });

    const { getByLabelText } = render(
      <MemoryRouter>
        <TaskbarFooter setIsStartMenuOpen={setIsStartMenuOpen} />
      </MemoryRouter>
    );

    const button = getByLabelText("Start Menu");

    button.click();
    expect(isStartMenuOpen).toBe(true);

    button.click();
    expect(isStartMenuOpen).toBe(false);
  });
});
