const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:atlasdb@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
const User=mongoose.model("publications",{
   email:{
    type:String,
    unique:true,
    required:[true,"please enter the email"],
   },
   userName:{
    type:String,
    minlength:[5,"please enter atleast 5 characters"],
    maxlength:15
   },
   password:{
       type:String,
       required:[true,"enter your password"]
   },
   mobile:{
       type:Number,
       requred:[true,"enter your number"],
       minlength:10,
       maxlenghth:10
   },
   country:{
       type:String,
       default:"IND",
       required:true
   },
   area:String, //optional ,so not created object
   pincode:{
       type:Number,
       required:true
   },
   address:String,

   interest:{
    type:[String],
    enum:["react","node","express"],
    required:true
   }
})
module.exports=User 