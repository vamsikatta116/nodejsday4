const express= require("express")
const router=express.Router()
const User=require("../models/userModel")
const logger=require("../models/logger")
router.post("/delete",async(req,res)=>{
    try{
        const data=req.body
        const result=await User.remove({email:data.email})
        console.log(result)
        res.send("deleted successfully")
    }
    catch(err){
        res.send(err)
    }
})
module.exports=router