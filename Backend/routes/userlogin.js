const express=require("express");
const user=require("../models/user");
const isuser=require("../middleware/isusercheck");
const jwt=require("jsonwebtoken"); 

const bcrypt=require("bcrypt");
const router=express.Router();

router.post("/",isuser,async(req,res)=>{
    const values=req.body;
    //console.log(values.Password,values.Email);
    try{
        const userdata=await user.findOne({email:values.Email});
        const hashedPassword=userdata.password;
        const result= await bcrypt.compare(values.Password,hashedPassword);
        if(result==true)
            {
                const token=jwt.sign({email:values.Email},process.env.secretkey,{ expiresIn: "5d" })
                res.cookie("usertoken", token);
                res.status(200).json({message:"Password login success"});
            }
            else
            {
                res.status(201).json({message:"Incorrect password"});
            }
    }
    catch(err)
    {
        //console.log(err);
        res.status(500).json({message:"internal server error here"});
    }
});

module.exports=router;