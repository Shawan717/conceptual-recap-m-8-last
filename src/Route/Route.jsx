import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import PhonesCard from "../components/Phones/Phone/PhonesCard";
import ErrorElement from "./ErrorElement/ErrorElement";


const myCreateRoute=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/phones.json')
            },
            {
                path:"/favorites",
                element: <Favorites></Favorites>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/phonesCard/:id",
                element: <PhonesCard></PhonesCard>,
                loader:()=>fetch('/phones.json')
            }

        ]
    }
])

export default myCreateRoute;