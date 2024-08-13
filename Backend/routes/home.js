const express=require("express");
const {authuser} = require("../middleware/auth");
const {authadmin}=require("../middleware/auth");
const router=express.Router();

router.get("/",authadmin,(req,res)=>{
    res.send("hello");
})
router

module.exports=router;