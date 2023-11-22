import { useOnline } from "../utils/useOnline";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function Header(){

    const onlinestatus=useOnline();
    const cartItems=useSelector(store=>store.cart.items)

    return(
       <div className="flex justify-around border border-solid border-black rounded-3xl ml-3 mr-2 mt-1" >
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGGR12MsIgR6uvi0IGjfo4k5nKfpBwRu_Q1l4SBj_QhyMn4KxcobP18CIvR2BhnhO62g&usqp=CAU"></img>
        <ul>
            <li>Onlinestatus: {onlinestatus ? "🟢":"🔴"}</li>
            <li className="text-blue-500 underline font-bold"><Link to="/">Home</Link></li>
            <li className="text-blue-500 underline font-bold"><Link to="/About">AboutUs</Link></li>
            <li className="text-blue-500 underline font-bold"><Link to="/contact">ContactUs</Link></li>
            <li className=" font-bold"><Link to="/cart">Cart- {cartItems.length} items</Link></li>
            
        </ul>
       </div> 
    )
};
export default Header;