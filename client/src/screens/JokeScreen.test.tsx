import React from "react";
import { render, screen } from "@testing-library/react";
import JokeScreen from "./JokeScreen";

test("renders Jokescreen component correctly", () => {
  let testCat = "food";
  render(<JokeScreen category={testCat} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
