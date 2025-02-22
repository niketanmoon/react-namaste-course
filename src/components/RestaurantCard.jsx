import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId } = props;
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

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 p-1 text-white ml-4 rounded-r-sm">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
