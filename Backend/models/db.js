const mongoose =require("mongoose");

const connectdb=async()=>{
    try
    {
    await mongoose.connect("mongodb://localhost:27017/Ecobazar");
    console.log("db connected sucesss");
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports=connectdb;