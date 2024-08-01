import React from "react";

const Card =({banner})=>{
    if(banner===null)return null
    return(
        <div className="w-48 ml-4 rounded-md overflow-hidden">
           <img  src={`https://image.tmdb.org/t/p/w500${banner}`} alt="movie_banner" />
        </div>
    )
}
export default Card