import { render, screen, fireEvent } from "@testing-library/react";
import OkButton from "./OkButton";

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
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<OkButton />);
    const button = screen.getByRole("button", { name: "OK" });
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith("ok");
    alertMock.mockRestore();
  });

  it("does not call alert without user interaction", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<OkButton />);
    expect(alertMock).not.toHaveBeenCalled();
    alertMock.mockRestore();
  });
});