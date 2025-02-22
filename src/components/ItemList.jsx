import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        const isItemCards = item.itemCards ? true : false;
        return isItemCards ? (
          item.itemCards.map((itemCard) => {
            return (
              <div
                data-testid="foodItems"
                key={itemCard.card?.info?.id}
                className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
              >
                <div className="w-9/12">
                  <div className="py-2">
                    <p className="py-2 font-semibold">
                      {itemCard.card?.info?.name}
                    </p>
                    <p>
                      {" "}
                      - ₹
                      {itemCard.card?.info?.price
                        ? itemCard.card?.info?.price / 100
                        : itemCard.card?.info?.defaultPrice / 100}
                    </p>
                  </div>
                  <p className="py-2">{itemCard.card?.info?.description}</p>
                </div>

                <div className="w-3/12">
                  <div>
                    <button
                      className="p-2 rounded-lg bg-black text-white shadow-lg m-auto absolute cursor-pointer"
                      onClick={() => handleAddItem(item)}
                    >
                      Add +
                    </button>
                    <img
                      src={`${IMG_CDN_URL}/${itemCard.card?.info.imageId}`}
                      className="m-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div
            data-testid="foodItems"
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <p className="py-2 font-semibold">{item?.card?.info?.name}</p>
                <p>
                  - ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </p>
              </div>
              <p className="py-2">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12">
              <div></div>
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg m-auto absolute cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              <img src={`${IMG_CDN_URL}/${item.card.info.imageId}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
