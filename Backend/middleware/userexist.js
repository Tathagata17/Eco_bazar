const mongoose = require("mongoose");

const user = require("../models/user");

const userexist = async (req, res, next) => {
  try {
    if (await user.findOne({ email: req.body.email })) {
      return res.status(400).json({ message: "user already exist" });
    } else {
      next();
    }
  } catch (err) {
    res.status(404).json({ message: "Internal server error" });
  }
};

module.exports = userexist;
