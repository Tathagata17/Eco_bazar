const express = require("express");
const { authuser } = require("../middleware/auth");
const user = require("../models/user");
const router = express.Router();

router.post("/", authuser, async (req, res) => {
  const { name, landmark, streetaddress, country, state, zip, email, phonno } =
    req.body;
  const addressdata = {
    name: name,
    landmark: landmark,
    streetAddress: streetaddress,
    Country: country,
    state: state,
    postalPin: zip,
    Phoneno: phonno,
    email: email,
  };
  console.log(addressdata);
  const userdata = await user.findOne({ email: req.user });
  userdata.address.push(addressdata);
  await userdata.save();
  res.status(200).json({message:"address added"});
});

router.get("/getaddress",authuser,async(req,res)=>{
    const respo=await user.findOne({email:req.user});
    const addressdata=respo.address;
    res.status(200).json({message:"success",adressdata:addressdata});
})

module.exports = router;
