const express = require("express");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  const values = req.body;
  const phoneno = values.phone;
  try {
    const hashedpassword = await bcrypt.hash(values.password, 10);
    const userdata = new user();
    userdata.Firstname = values.Firstname;
    userdata.lastname = values.lastname;
    if (phoneno.length > 10 || phoneno.length < 10) {
      return res.json({ message: "phone no is not valid" });
    }
    userdata.phone = phoneno;
    userdata.password = hashedpassword;
    userdata.email = values.email;
    await userdata.save();
    res.status(200).json({ message: "user signup sucess" });
  } catch (err) {
    res.status(404).json({ message: "Internal server error" });
    console.log(err);
  }
});

module.exports = router;
