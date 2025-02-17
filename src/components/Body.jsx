import { RESTAURANT_API_URL, restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const filterData = (searchText, allRestaurants) => {
  const filteredData = allRestaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredData;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_API_URL);
    const json = await data.json();
    const totalRestaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(totalRestaurants);
    setFilteredRestaurants(totalRestaurants);
  }
  //   if (!allRestaurants.length) return null;
  return allRestaurants?.length !== 0 ? (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />{" "}
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <Shimmer />
  );
};
export default Body;
