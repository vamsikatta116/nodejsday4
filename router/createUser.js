const express=require("express")
const router=express.Router()
const logger=require("../models/logger")
const User=require("../models/userModel")
router.post("/signup",logger,async (req,res)=>{
    const data=req.body
    try{
        const user1=new User({
            email:data.email,
            password:data.password,
            mobile:data.mobile,
            area:data.area,
            pincode:data.pincode,
            address:data.area+data.pincode+data.country,
            counntry:data.country,
        })
        await user1.save().then(()=>res.send("user added"))
    }
    catch(err){
        res.send(err)
        }
})
module.exports=router