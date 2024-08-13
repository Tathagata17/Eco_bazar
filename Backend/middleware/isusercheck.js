const mongoose = require("mongoose");

const user = require("../models/user");

const isuser = async (req, res, next) => {
  try {
    if (await user.findOne({ email: req.body.Email })) {
        next();
    } else {
      return res.status(400).json({ message: "not a user" });

    }
  } catch (err) {
    res.status(404).json({ message: "Internal server error" });
  }
};

module.exports = isuser;
