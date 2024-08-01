import React, { useState } from "react";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import Header from "./Header";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { setUser } from "../redux/userSlice.js";
import { setLoading } from "../redux/userSlice.js";



const Login = ()=>{
    const [isLogin,setIsLogin]=useState(false)
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isLoading = useSelector(store=>store.app.isLoading)

    const loginHandler= ()=>{
        setIsLogin(!isLogin)
    }
    
    const getData =async(e)=>{
        e.preventDefault();
        dispatch(setLoading(true))
        if(isLogin){
            const user = {username: userName ,password}
            console.log(user)
            try{
               const res = await axios.post(`${API_END_POINT}/login`,user,{
                headers:{
                    'Content-Type':'application/json',
                },
                withCredentials:true
               })
               console.log(res)
               if(res.data.success){
                   toast.success(res.data.msg)
               } 
                dispatch(setUser(res.data.user))
                navigate("/browse")
                
            }
            catch(error){
                toast.error(error.response.data.msg)
            }finally{
                dispatch(setLoading(false))
            }
           

        }
        else{
            //register
            dispatch(setLoading(true))
            const user = {username:userName ,email,password}
            console.log(user)
            try{
                const res = await axios.post(`${API_END_POINT}/register`,user,{
                    headers:{
                        'Content-Type':'application/json',
                    },
                    withCredentials:true
                   })
            console.log(res)
            if(res.data.success){
                toast.success(res.data.msg)
            }
            setIsLogin(true)
            }
            catch(error){
                toast.error(error.response.data.msg)
            }finally{
                dispatch(setLoading(false))
            }
        }
        
        setEmail("")
        setPassword("")
        setUserName("")
    }
    return (
        <div>
            <Header/>
            <div className="absolute w-[100vw]">
                <img className="w-[100vw] h-[100vh]" src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="banner"/>
            </div>
            <form onSubmit={getData} className="opacity-85 px-8 absolute rounded ...  w-3/12  bg-black left-0 right-0 mx-auto my-36">
                <div className="flex my-8 mx-4  flex-col px-2 py-4">
                    <h3 className="font-bold text-xl text-white mx-auto">{isLogin?"Login" :"SignUp"}</h3>
                    <input value={userName} onChange={(e)=>{setUserName(e.target.value)}} className="outline-none rounded-sm bg-gray-800 my-2 p-2 text-sm text-white" type="text" placeholder="Username"/>
                    {!isLogin && <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="outline-none rounded-sm bg-gray-800 my-2 p-2 text-sm text-white" type="text" placeholder="Email"/>}
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="outline-none rounded-sm bg-gray-800 my-2 p-2 text-sm text-white" type="text" placeholder="Password"/>
                    <button className="bg-red-800 text-white py-2">{isLoading?"loading...":(isLogin?"Login" :"SignUp")}</button>
                    <p className=" text-sm text-white mt-2 ">{isLogin?"New to Netflix" :"Already have an account?"}<span className="ml-2 text-blue-400" onClick={loginHandler}>{isLogin?"SignUp" :"Login"}</span></p>
                </div>
            </form>
        </div>
        
    )
}
export default Login