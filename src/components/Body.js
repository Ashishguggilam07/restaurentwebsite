import Restuarentcard from "./Restuarentcard";
import { restaurants } from "../utils/restuarents";
import { useState, useEffect } from "react";
import TopratedRestuarents from "./TopratedRestuarents";
import axios from "axios";
import Shimmer from "./Shimmer";
import { useOnline } from "../utils/useOnline";
import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Body=()=>{
    const [searchtext,setsearch]=useState("");
    const [allRestaurants,setAllRestaurant]=useState([])
    const [filteredres,setfilteredrestuarents]=useState([])

    const online=useOnline();
    if (!online){
        return <h1>Please check your connection</h1>
    }
    function filterrestuatants(){
        const filtereddata=allRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
        setfilteredrestuarents(filtereddata);
    }

    function toppratedrestuarents(gotdata){
        setfilteredrestuarents(gotdata);

    }
    
    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData(){

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
          const response = await data.json();

        setfilteredrestuarents(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
      
        setAllRestaurant(
            response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        )
        
    }




    return(

        
        <div>
            <div className="search">
            <input className="inp" type="search" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"
             onChange={(e)=>setsearch(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={filterrestuatants}>search</button>
            </div>

            <TopratedRestuarents details={toppratedrestuarents} filteredrestuarent={filteredres}/>

       
        {
            filteredres.length===0 ?(<Shimmer/>):(<div className="cards">
            {
                filteredres.map(restuarent=>(<Link to={`/restaurant/${restuarent.info.id}`}><Restuarentcard key={restuarent.info.id} details={restuarent.info}/></Link>))
            }
            </div>)
        }
        
        
        
        

        </div>
        
        
    )
}
export default Body;