import React from "react";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice.js";



const Header = ()=>{
    const user  = useSelector((store)=>store.app.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = async()=>{
        try {
            const res = await axios.get(`${API_END_POINT}/logout`);
            if(res.data.success){
                toast.success(res.data.msg);
            }
            dispatch(setUser(null));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const toggeHandler = ()=>{
        dispatch(setToggle())
    }


    return (

        <div className="absolute z-10 w-full bg-gradient-to-b from-black flex justify-between">
            <img className="w-56 " src="https://cdn.cookielaw.org/logos/e4940af9-5df7-4d61-93e0-d3592229d2ac/6aaca2ba-a5c4-4703-bdaa-7f0c77c9eab9/Netflix_Logo_PMS.png" alt="netflix"/>
            
           {user &&( <div className="flex mt-2 items-center">
                <h6 className="text-white font-semibold mr-2">{user.username}</h6>
                <div >
                    <button onClick={logoutHandler} className="border-solid border-2 rounded ... border-red-900 bg-red-800 text-white px-4 py-2 m-2">LogOut</button>
                    <button onClick={toggeHandler} className="border-solid border-2 rounded ... border-red-900 bg-red-800 text-white px-4 py-2 m-2">Search Movie</button>
                </div>
            </div>)}
        </div>
    )
}
export default Header