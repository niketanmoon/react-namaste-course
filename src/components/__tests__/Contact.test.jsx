import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
//it is alias of it

describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside my contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const buttonSubmitText = screen.getByText("Submit");
    expect(buttonSubmitText).toBeInTheDocument();
  });

  test("Should load input name inside my contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  test("Should load input message inside my contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Message");
    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside my contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});

describe("Contact us page test cases with IT", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside my contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const buttonSubmitText = screen.getByText("Submit");
    expect(buttonSubmitText).toBeInTheDocument();
  });

  it("Should load input name inside my contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  it("Should load input message inside my contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Message");
    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside my contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
