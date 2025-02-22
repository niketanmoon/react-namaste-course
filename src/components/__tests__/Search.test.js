import Body from "../Body";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router"; // Note: should be react-router-dom
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Body Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render restaurants on initial load", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const cards = screen.getAllByTestId("testResCard");
    expect(cards.length).toBe(20);
  });

  it("should filter restaurants with search input as burger", async () => {
    // Render with act
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    // Get elements after initial render
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    // Perform search action
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "burger" } });
      fireEvent.click(searchBtn);
    });

    // Assert results after search
    const cards = screen.getAllByTestId("testResCard");
    expect(cards.length).toBe(2);
  });
});
