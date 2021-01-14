import React from "react";
import { render, screen } from "@testing-library/react";
import Categories from "./Categories";

test("renders categories component correctly", () => {
  let testCats = ["food", "movie", "dev", "animal"];
  render(<Categories categories={testCats} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
