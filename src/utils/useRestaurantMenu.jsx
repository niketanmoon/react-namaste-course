import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + id);
    const json = await data.json();
    const recommendedMenu =
      await json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (item) => item?.card?.card?.title === "Recommended"
      )?.card?.card?.itemCards;
    setRestaurant(json.data?.cards[2]?.card?.card?.info);

    recommendedMenu ? setMenu(recommendedMenu) : setMenu([]);
  };

  return [restaurant, menu];
};

export default useRestaurantMenu;
