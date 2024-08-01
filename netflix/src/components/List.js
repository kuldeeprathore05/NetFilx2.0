import React from "react";
import Card from "./Card";
const List =({title,movies,headblack=false})=>{
    return(
        <div className="mb-4">
            <h1 className="text-3xl mb-4 ml-4  {headblack:text-black?text-white} font-semibold">{title}</h1>
            <div className="flex overflow-x-auto no-scrollbar   cursor-pointer">
                <div className='flex '>
                    {  movies?.map((movie)=>{
                    return(
                           <Card banner={movie.poster_path}/>
                    )
                 
                })}
                </div>
              
                
            </div>
            
        </div>
    )
}
export default List