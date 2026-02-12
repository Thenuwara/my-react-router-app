import { render, screen, fireEvent } from "@testing-library/react";
import OkButton from "./OkButton";

// Mock window.alert
beforeEach(() => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("OkButton", () => {
  it("renders the button with text 'OK'", () => {
    render(<OkButton />);
    expect(screen.getByRole("button", { name: "OK" })).toBeInTheDocument();
  });

  it("renders as a contained variant button", () => {
    render(<OkButton />);
    const button = screen.getByRole("button", { name: "OK" });
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("calls alert with 'ok' when clicked", () => {
    render(<OkButton />);
    const button = screen.getByRole("button", { name: "OK" });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("ok");
  });

  it("calls alert each time the button is clicked", () => {
    render(<OkButton />);
    const button = screen.getByRole("button", { name: "OK" });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledTimes(3);
  });
});