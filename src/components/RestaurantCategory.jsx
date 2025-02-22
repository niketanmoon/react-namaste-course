import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div className="">
      <div className="w-3/4 bg-gray-200 shadow-lg shadow-slate-300 p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-2xl">
            {data.title} ({data?.itemCards?.length || data?.categories.length})
          </span>
          <span>🔽</span>
        </div>

        {showItems ? (
          <ItemList items={data?.itemCards || data?.categories} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
