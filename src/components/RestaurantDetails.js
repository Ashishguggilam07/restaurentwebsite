import { useParams } from "react-router-dom";
import useRestaurantMenuAPI from "../utils/useRestaurantMenuAPI";
import Shimmer from "./Shimmer";
import { img_url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantDetails=()=>{
    const {id}=useParams();
    const menu_data=useRestaurantMenuAPI(id);
    const dispatch=useDispatch()
    

    if (menu_data===null) return <Shimmer/>    

    const itemCards =
    menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

    function handleAddItem(item){
      
      dispatch(addItems(item));
    }

    return (
        <>
            <h1>Restuarent menu</h1>
            <h2>Restaurant id:{id}</h2>

            
            
           
            
            <div className="flex text-center">
      <div className="rest-menu-list">
        {itemCards.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.name / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
              
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={img_url + item.card.info.imageId}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

        </>
    )
}
export default RestaurantDetails;