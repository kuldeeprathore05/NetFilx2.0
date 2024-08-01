import React, { useState } from "react";
import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import  {setSearchMovieDetails} from "../redux/searchSlice"
import List from "./List.js";

const SearchPage = ()=>{
    

    const { movieName, searchedMovie } = useSelector(store => store.search);
    const [searchMovie ,setSearch]=useState("")
    const dispatch = useDispatch();
    const submitHandler =async(e)=>{
        e.preventDefault();
        const res =await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,options)
        const movies = res?.data?.results;
        dispatch(setSearchMovieDetails({searchMovie, movies}))
        setSearch("")
    }
    return(
        <>
        <div className="flex w-full">
            <form onSubmit={submitHandler} className="m-auto my-40 shadow-lg shadow-gray-400 border-red-800 border-2 rounded-md">
                <input value={searchMovie} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Enter movie ..." className="w-[40vw] text-sm px-4 py-2 mr-4  outline-none"></input>
                <button  className="border-solid border-2 rounded text-sm  border-red-900 bg-red-800 shadow-lg shadow-gray-400 text-white px-4 py-2 m-2 hover:opacity-80">Search</button>
            </form>
        </div>
         {
            searchedMovie ? ( <List title={movieName} headblack={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
        }
       </>
       
    )
}
export default SearchPage