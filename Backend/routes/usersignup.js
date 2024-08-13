const express = require("express");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const userexist=require("../middleware/userexist");

const router = express.Router();

router.post("/", userexist,async(req, res) => {
  const {Firstname,Lastname,Email,Phoneno,Password} = req.body;
  try {
    const hashedpassword = await bcrypt.hash(Password, 10);
    const userdata = new user();
    userdata.firstname = Firstname;
    userdata.lastname =Lastname;
    userdata.email = Email;
    if (Phoneno.length > 10 || Phoneno.length < 10) {
      return res.status(400).json({ message: "phone no is not valid" });
    }
    userdata.phoneno = Phoneno;
    userdata.password = hashedpassword;
    await userdata.save();
     return res.status(200).json({ message: "user signup sucess" });
  } catch (err) {
    //console.log(err);
     return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/",(req,res)=>{
  return res.status(200).json({message:"hello"});
})
module.exports = router;
