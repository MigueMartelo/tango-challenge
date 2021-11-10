import { render, screen } from "@testing-library/react";

import Main from "./";

describe("Main", () => {
  test("renders the datePicker text", () => {
    render(<Main />);
    const datePickerText = screen.getByText(/select your birth date/i);
    expect(datePickerText).toBeInTheDocument();
  });

  test("should render the input", () => {
    render(<Main />);
    const datePicker = screen.getByPlaceholderText(/select date/i);
    expect(datePicker).toBeInTheDocument();
  });

  test("should render the button", () => {
    render(<Main />);
    const button = screen.getByText(/get the photos/i);
    expect(button).toBeInTheDocument();
  });
});
