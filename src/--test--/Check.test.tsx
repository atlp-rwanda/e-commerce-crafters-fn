import React from "react";
import { render, screen } from "@testing-library/react";
import Check from "../pages/Check";

describe("Test component", () => {
  test("renders content", () => {
    render(<Check />);

    const heading = screen.getByText(
      /If you want to part of the program click button belows/i
    );
    expect(heading).toBeTruthy();

    const button = screen.getByRole("button", { name: /confirm/i });
    expect(button).toBeTruthy();

  });
});


