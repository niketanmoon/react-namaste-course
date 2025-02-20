import { useParams } from "react-router";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menu] = useRestaurantMenu(id);

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
