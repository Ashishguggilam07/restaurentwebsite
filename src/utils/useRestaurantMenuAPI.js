import { MENU_API } from "./constants";
import { useState,useEffect } from "react";
const useRestaurantMenuAPI=(id)=>{

    const [menudata,setmenuData]=useState(null);

    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata=async ()=>{
        const data=await fetch(MENU_API+id);
        const json=await data.json();
        setmenuData(json);

    };
    return menudata;
};

export default useRestaurantMenuAPI;