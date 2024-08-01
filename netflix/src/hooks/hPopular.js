import axios from "axios"
import { Popularo ,options } from "../utils/constant"
import  {useDispatch}  from "react-redux"
import { getPopularMovie } from "../redux/movieSlice"

 const Popular =async()=>{
    try {
        const dispatch = useDispatch()
        const res =await axios.get(Popularo,options)
        dispatch(getPopularMovie(res.data.results))


    } catch (error) {
        console.log(error)
    }
    
}
export default Popular