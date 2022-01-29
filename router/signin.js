const express= require("express")
const router=express.Router()
const User=require("../models/userModel")
const logger=require("../models/logger")
const bcrypt=require("bcrypt")
router.post("/updateuser",async(req,res)=>{
    try{
        const data=req.body
        const result=await User.findOne({email:data.email})
        console.log(result)
        res.send("updated successfully"+result)
    }
    catch(err){
        res.send(err)
    }
})
module.exports=router