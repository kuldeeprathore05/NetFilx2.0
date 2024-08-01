import React from "react";
import Browse from "./Browse.js";
import Login from "./Login.js";
import {createBrowserRouter , RouterProvider } from "react-router-dom"   //different routes pe route krne ke liye

const Body = ()=>{
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body