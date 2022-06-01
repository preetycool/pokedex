/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

test("Should display subtitle", () => {
  render(<Loader subtitle='Party time' />);
  const subtitleText = screen.getByText("Party time");
  expect(subtitleText).toBeInTheDocument();
});

test("Should not display subtitle if it is not provided in props", () => {
  const { container } = render(<Loader />);
  expect(container.getElementsByClassName("loader__subtitle")).toBe(0);
});
