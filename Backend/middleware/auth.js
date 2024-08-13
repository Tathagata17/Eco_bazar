const jwt = require("jsonwebtoken");

const authuser = async (req, res, next) => {
  try {
    const token = req.cookies.usertoken;
    if (!token) {
      return res.status(201).json({ message: "no token" });
    }
    const result = await jwt.verify(
      token,
      process.env.secretkey,
      (err, user) => {
        if (err) {
          return res.status(200).json({ message: " not an authenticated user" });
        } else {
          req.user = user.email;
          //return  res.status(200).json({ message: " authenticated user" });
          next();
        }
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const authadmin = async (req, res, next) => {
    try {
      const token = req.cookies.admintoken;
      if (!token) {
        return res.status(201).json({ message: "no token" });
      }
      const result = await jwt.verify(
        token,
        process.env.secretkey,
        (err, admin) => {
          if (err) {
            return res.status(200).json({ message: " not an authenticated admin" });
          } else {
            req.admin = admin.email;
            return  res.status(200).json({ message: " authenticated admin" });
            next();
          }
        }
      );
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports = {authuser,authadmin};
