const admin = require("../models/admin");

const adminexist = async (req, res, next) => {
  try {
    if(await admin.findOne({email:req.body.email}))
        {
            return res.status(400).json({message:"admin already exist"});
        }
        else
        {
            next();
        }
  } catch (err) {
    res.status(500).json({message:"Internal server error"});
  }
};
const isadmin=async (req,res,next)=>{
    try
    {
        if(await admin.findOne({email:req.body.email}))
        {
            next();
        }
        else
        {
            return res.status(200).json({message:"not a admin"})
        }
    }
    catch(err)
    {
        res.status(500).json({message:"Internal server error"});
    }
};
module.exports={adminexist,isadmin};