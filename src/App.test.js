import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders loading on page load", () => {
  render(<App />);
  const loadingText = screen.getByText("...Loading");
  expect(loadingText).toBeInTheDocument();
});
