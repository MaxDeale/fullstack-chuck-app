import React from "react";
import { render, screen } from "@testing-library/react";
import HomeScreen from "./HomeScreen";

test("renders homescreen component correctly", () => {
  render(<HomeScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
