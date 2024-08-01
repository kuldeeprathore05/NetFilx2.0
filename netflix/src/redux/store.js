import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js";
import movieReducer from './movieSlice.js';
import searchReducer from './searchSlice.js'
const store = configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        search:searchReducer
    }
});
export default store