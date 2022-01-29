const express= require("express")
const router=express.Router()
const User=require("../models/userModel")
const logger=require("../models/logger")
router.post("/finduser",async(req,res)=>{
    try{
        const data=req.body
        const result=await User.find()
        console.log(result)
        res.send("/nthe display of enterted/n"+result)
    }
    catch(err){
        res.send(err)
    }
})
module.exports=router