import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MultiButtonText from "./MultiButtonText";

describe("MultiButtonText", () => {
  test("renders initial message", () => {
    render(<MultiButtonText />);
    expect(screen.getByText("Click a button !")).toBeInTheDocument();
  });

});