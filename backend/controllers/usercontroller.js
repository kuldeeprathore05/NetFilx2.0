
import {User} from '../models/userModel.js'
import bcryptjs from "bcryptjs"
import jwt from  "jsonwebtoken"
export const Register =async (req,res)=>{
    
    try { 
        const {username , email , password}= req.body;
        if(!username ||!email ||!password){
            return res.status(401).json({
            success:false,
            msg:"Details required"
        })
        }
        const existingUser =await User.findOne({email})
        if(existingUser){
            return res.status(401).json({
            success:false,
            msg:"Already registered"
        })
        }
        const hashpassword =await bcryptjs.hash(password,10)
        await User.create({username,email,password:hashpassword})
        return res.status(200).json({
            success:true,
            msg:"Done"
        })
    }
    catch(error){
        console.log(error)
    }
}


export  const Login =async (req,res)=>{
    const {username , password}=req.body;
    if(!username || !password){
        return res.status(401).json({
            success:false,
            msg:"Enter username & password"
        })
    }
    const user =await User.findOne({username})
    if(!user){
        return res.status(401).json({
            success:false,
            msg:"Invalid username or password"
        })
    }
    const isPasswordCorrect =await bcryptjs.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(401).json({
            success:false,
            msg:"Invalid username or password"
        })
    }
    

    const payLoad ={username ,password}
    const token = jwt.sign(payLoad,"somethingsomething",{expiresIn:"1d"})
     
    return res.cookie("token",token,{httpOnly:true}).status(200).json({
        success:true,
        msg:`Welcome back ${user.username}`,
        user,
        
    })
}



export const Logout = (req,res)=>{
    return res.status(200).cookie("token",".",{httpOnly:true}).json({
        success:true,
        msg:"Logged Out"
    })
}