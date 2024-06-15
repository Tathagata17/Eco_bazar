const express=require("express");
const admin=require("../models/admin");
const {isadmin}=require("../middleware/admincheck")
const bcrypt=require("bcrypt");
const router=express.Router();

router.post("/",isadmin,async(req,res)=>{

    const values=req.body;
    try{
        const admindata=await admin.findOne({email:values.email});
        const hashedPassword=admindata.password;
        const result = await bcrypt.compare(values.password,hashedPassword);
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