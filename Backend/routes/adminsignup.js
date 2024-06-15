const express = require("express");
const admin = require("../models/admin");
const bcrypt = require("bcrypt");
const {adminexist} = require("../middleware/admincheck");
const router = express.Router();

router.post("/", adminexist,async (req,res) => {    
    const newadmin=new admin;
    const values=req.body;
   try
   { 
   const hashedpassword=await bcrypt.hash(values.password,10);
   newadmin.firstname=values.firstname;
   newadmin.lastname=values.lastname;
   newadmin.phoneno=values.phone;
   newadmin.email=values.email;
   newadmin.address.location=values.location;
   newadmin.address.State=values.state;
   newadmin.address.pin=values.pin;
   newadmin.password=hashedpassword;
   await newadmin.save();
   res.status(200).json({message:"admin signup successful"});
   }
   catch(err)
   {
      res.status(500).json({message:"Internal server error"});
   }
});

module.exports=router;
