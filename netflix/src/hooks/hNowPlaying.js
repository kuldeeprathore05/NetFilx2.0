import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { NowPlaying, options } from "../utils/constant.js";
import {useDispatch} from "react-redux";

const Now_playing = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(NowPlaying, options);
        dispatch(getNowPlayingMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default Now_playing;