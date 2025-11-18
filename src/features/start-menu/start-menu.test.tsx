import { render } from "@testing-library/react";
import StartMenu from "./start-menu";
import { MemoryRouter } from "react-router-dom";
describe("StartMenu", () => {
  it("should render StartMenu component", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <StartMenu isStartMenuOpen={true} setIsStartMenuOpen={() => {}} />
      </MemoryRouter>
    );
    expect(getByLabelText("Start Menu navigation")).toBeInTheDocument();
  });
  it("should hide StartMenu when isStartMenuOpen is false", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <StartMenu isStartMenuOpen={false} setIsStartMenuOpen={() => {}} />
      </MemoryRouter>
    );
    expect(getByLabelText("Start Menu navigation")).toHaveClass("hidden");
  });
  it("should show StartMenu when isStartMenuOpen is true", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <StartMenu isStartMenuOpen={true} setIsStartMenuOpen={() => {}} />
      </MemoryRouter>
    );
    expect(getByLabelText("Start Menu navigation")).not.toHaveClass("hidden");
  });

  it("should call setIsStartMenuOpen when an app is clicked", () => {
    const setIsStartMenuOpen = vi.fn();
    const { getByText } = render(
      <MemoryRouter>
        <StartMenu
          isStartMenuOpen={true}
          setIsStartMenuOpen={setIsStartMenuOpen}
        />
      </MemoryRouter>
    );

    const appElement = getByText("My Projects");
    appElement.click();
    expect(setIsStartMenuOpen).toHaveBeenCalledWith(false);
  });
});
