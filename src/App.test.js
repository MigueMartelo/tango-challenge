import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the challenge title", () => {
    render(<App />);
    const titleChallenge = screen.getByText(/tango challenge/i);
    expect(titleChallenge).toBeInTheDocument();
  });
});
