
import express from "express"
const app = express()
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
const port = 8080
import mongoose from "mongoose";

import cors from "cors"
const corsOption = {
    origin :'http://localhost:3000',
    credentials : true
}
app.use(cors(corsOption));

import dotenv from "dotenv"
dotenv.config({
    path:".env"
})


app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())


const main = async ()=>{
    await  mongoose.connect('mongodb://localhost:27017/netflix');
}

main()
.then(()=>{
    console.log("Connection successful")
}).catch((err)=>{console.log(err)})

import userRoute from "./routes/userRoute.js"



//api
app.use("/api/v1",userRoute)



app.listen(port,()=>{
    console.log("Listing to port 8080")
})
