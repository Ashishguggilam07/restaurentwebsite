
import { img_url } from "../utils/constants";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Restuarentcard=(props)=>{
    const { name ,avgRating ,cuisines ,costForTwo,cloudinaryImageId }=props.details;
    return(
    <div className="restcard">
        <img className="imgcard" src={`${img_url}${cloudinaryImageId}`}></img>
        <div className="cardcontent">
        <div className="left">
            <h1 className="text-xl font-mono">{name}</h1>
            <h5>{cuisines}</h5>
        </div>
        <div className="right">
            <button className="border-4 border-black rounded-lg px-0.5 bg-green-600">★{avgRating}</button>
            <h3>Rs.{costForTwo}</h3>
        </div>
        </div>
        
        

    </div>
    )
}
export default Restuarentcard;