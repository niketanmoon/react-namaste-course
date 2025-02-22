const { render, screen } = require("@testing-library/react");
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant card component with props data", () => {
  render(<RestaurantCard {...MOCK_DATA} />);
  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it("Should render Restaurant card  with open label component with props data", () => {
  const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);
  render(<RestaurantCardWithOpenLabel {...MOCK_DATA} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();

  const openLabel = screen.getByText("Open");
  expect(openLabel).toBeInTheDocument();
});
