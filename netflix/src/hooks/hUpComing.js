import axios from "axios"
import { UpComing ,options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getUpcomingMovie } from "../redux/movieSlice"



 const Upcoming =async()=>{
    try {
        const dispatch = useDispatch()
        const res =await axios.get(UpComing,options)
        dispatch(getUpcomingMovie(res.data.results))
    } catch (error) {
        console.log(error)
    }
    
}
export default Upcoming
