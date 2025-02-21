import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
}) => {
  return (
    <div className="m-4 p-4 w-64 bg-gray-300 hover:bg-gray-400 rounded-lg">
      <img
        className="rounded-lg w-48 m-auto"
        src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
        alt="logo"
      />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} stars </h4>
    </div>
  );
};

export default RestaurantCard;
