import React from "react";
import MovieContainer from "./MovieContainer.js";
import List from "./List.js";
import { useSelector } from "react-redux";

const MainContainer =()=>{
    const movie = useSelector((store)=>store.movie)
    return(
        <div>
            <MovieContainer/>
            <div className="bg-black">
<div className="-mt-72 relative z-10">
                <List title={"Popular Movies"} movies={movie.popularMovie} />
                <List title={"UpComing Movies"} movies={movie.upcomingMovies}/>
                <List title={"Top Rated "} movies={movie.topRatedMovies}/>
                <List title={"Now PLaynig "} movies={movie.nowPlayingMovies}/>
            </div>
            </div>
            
            
        </div>
    )
}
export default MainContainer