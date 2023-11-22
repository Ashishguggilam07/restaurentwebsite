import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header";
import Restuarentcard from "./src/components/Restuarentcard";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import RestaurantDetails from "./src/components/RestaurantDetails";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";


//const header1=React.createElement("h1",{id:1},"hello welcome to react");
//const root1=ReactDOM.createRoot(document.getElementById("root"));
//root1.render(header1);
//console.log("hi working")



const approuter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path:"/About",
                element:<About/>,
                
            },
            {
                path: "/contact",
                element: <Contact />,
              },
            {
                path:"/restaurant/:id",
                element:<RestaurantDetails/>
            }
        ]

    },
    

])




function App(){
    return (
        <Provider store={appStore}>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </Provider>
    )
}

const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={approuter}/>);


