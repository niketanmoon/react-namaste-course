import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL, MENU_API_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //   const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(
  //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5869809&lng=73.7591762&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  //     );
  //     const json = await data.json();
  //     setResInfo(json.data);
  //   };

  //   if (resInfo === null) return <Shimmer />;

  //   const { name, cuisines, costForTwoMessage } =
  //     resInfo?.cards[0]?.card?.card?.info;
  //   const { itemCards } =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  async function getRestaurantInfo() {
    const data = await fetch(MENU_API_URL + id);
    const json = await data.json();
    const recommendedMenu =
      await json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (item) => item?.card?.card?.title === "Recommended"
      )?.card?.card?.itemCards;
    console.log(recommendedMenu);
    setRestaurant(json.data?.cards[2]?.card?.card?.info);

    recommendedMenu ? setMenu(recommendedMenu) : setMenu([]);
  }
  if (!restaurant || !menu) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>Name: {restaurant.name}</h2>
        <img src={`${IMG_CDN_URL}/${restaurant.cloudinaryImageId}`} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h2>Menu</h2>

        <ul>
          {menu?.map((r) => (
            <li key={r?.card?.info?.id}>{r?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
