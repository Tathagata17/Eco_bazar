const express=require("express");
const user=require("../models/user");
const isuser=require("../middleware/isusercheck");

const bcrypt=require("bcrypt");
const router=express.Router();

router.post("/",isuser,async(req,res)=>{

    const values=req.body;
    try{
        const userdata=await user.findOne({email:values.email});
        const hashedPassword=userdata.password;
        const result= await bcrypt.compare(values.password,hashedPassword);
        if(result==true)
            {
                res.status(200).json({message:"password login success"});
            }
            else
            {
                res.status(201).json({message:"incorrect password"});
            }
    }
    catch(err)
    {
        res.status(500).json({message:"internal server error here"});
    }
});

module.exports=router;