import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("render button", () => {
    render(<Button label="text" />);
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
