import React,{useEffect} from "react";
import Header from "./Header.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer.js";
import Now_playing from "../hooks/hNowPlaying.js"
import Upcoming from "../hooks/hUpComing.js"
import Top_rated from "../hooks/hTopRated.js"
import Popular from "../hooks/hPopular.js";
import SearchPage from "./SearchPage.js"



const Browse = ()=>{
    const navigate = useNavigate();
    const user = useSelector(store=>store.app.user)
    const toogle = useSelector(store=>store.movie.toggle)

 // my custom hooks
 Now_playing();
 Popular();
 Top_rated();
 Upcoming();


    useEffect(()=>{
        if(!user){
            navigate("/")
        } 
    },[])
    
    return (
        <div>
            <div>
                
                <Header/>
                {toogle?<SearchPage/>:<MainContainer/>}
            </div>
            
        </div>
    )
}
export default Browse