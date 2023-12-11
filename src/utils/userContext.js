import { createContext } from "react";

const userContext=createContext({
    loggedInUser:"default user",
    items:[],
    addItem:(item)=>{
        items.push(item);
    }
});

export default userContext;