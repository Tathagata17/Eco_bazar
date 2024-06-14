const mongoose=require("mongoose");

const userSchema= new mongoose.Schema(
    {
        Firstname:String,
        lastname:String,
        email:String,
        password:String,
        phone :Number,
        Adresss:{
            location:String,
            State:String,
            pin:Number,
        }
    }
);

const usermodel=mongoose.model("users",userSchema);

module.exports=usermodel;