import User from "../models/UserModel.js";
import bcrypt from "bcrypt"

export const Login = async(req, res) =>{
    const user = await User.findOne({
        where:{
            userEmail:req.body.userEmail
        }
    })
    if(!user)return res.status(404).json({msg:"User not found"});
    const comparePassword = await bcrypt.compare(req.body.userPassword, user.userPassword )
    if(!comparePassword)return res.status(404).json({msg:"Wrong Password"})
    req.session.userId = user.id
    const id = user.id
    const userID = user.userID
    const userName = user.userName
    const userPhone = user.userPhone
    const userEmail = user.userEmail
    const role = user.role
    res.status(200).json({id,userID,userName,userPhone,userEmail,role})
}

export const Me = async(req,res) =>{
    if(!req.session.userId){
        res.status(404).json({msg:"User Not Found"})
    }
    const user = await User.findOne({
        attributes:['userID','userName', 'userPhone','userEmail', 'role', 'id'],
        where:{
            id:req.session.userId
        }
    })
    if(!user) return res.status(404).json({msg:"User Not Found"})
    res.status(200).json(user)
}

export const logOut = async(req,res) =>{
    req.session.destroy((err) =>{
        if(err) return res.status(404).json({msg:"Can't log out"})
        res.status(200).json({msg:"You have logged out"})
    })
}