const mongoose=require("mongoose");

const adminSchema= new mongoose.Schema(
    {
        firstname:String,
        lastname:String,
        email:String,
        phoneno:Number,
        password:String,
        address:
        {
            location:String,
            State:String,
            pin:Number,
        }
    }
);

const adminmodel=mongoose.model("admin",adminSchema);

module.exports=adminmodel;