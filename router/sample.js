const express=require("express")
const res = require("express/lib/response")
const router=express.Router()
router.get("/home",(req,res)=>{
    res.status(200).send("home")
})
module.exports=router