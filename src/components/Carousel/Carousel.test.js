import { render, screen } from "@testing-library/react";
import Carousel from "./";

describe("Carousel", () => {
  test("should render the date", () => {
    const date = "2021-11-09";
    const imagesName = ["image11", "image2", "image3"];
    render(<Carousel date={date} imagesName={imagesName} />);
    const dateText = screen.getByText(/photo date/i);
    expect(dateText).toBeInTheDocument();
  });

  test("should render the images correctly", () => {
    const date = "2021-11-09";
    const imagesName = ["image11", "image2", "image3"];
    render(<Carousel date={date} imagesName={imagesName} />);
    const images = screen.getAllByAltText(/image/i);

    expect(images.length).toBe(imagesName.length);
  });
});
