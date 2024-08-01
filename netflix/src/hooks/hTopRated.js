import axios from "axios"
import { TopRated ,options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getTopRatedMovie } from "../redux/movieSlice"
 const Top_rated =async()=>{
    try {
        const  dispatch = useDispatch()
        const res =await axios.get(TopRated,options)
        dispatch(getTopRatedMovie(res.data.results))
    } catch (error) {
        console.log(error)
    }
    
}
export default Top_rated
