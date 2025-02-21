import { RESTAURANT_API_URL, restaurantList } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection!
      </h1>
    );
  }
  //   if (!allRestaurants.length) return null;
  return allRestaurants?.length !== 0 ? (
    <div className="body px-16">
      <div className="">
        <div className="search-container m-4 p-4">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="px-2 py-2 border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurant-list flex flex-wrap">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};
export default Body;
