const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phoneno: {
            type: Number,
            required: true,
            unique: true
        },
        address: [{
           name:{type:String,required:true},
           landmark:{type:String},
           streetAddress:{type:String,required:true},
           Country:{type:String,required:true},
           state:{type:String,required:true},
           postalPin:{type:Number,required:true},
           Phoneno:{type:Number,required:true},
           email:{type:String}
        }]
    }
);

const usermodel = mongoose.model("users", userSchema);

module.exports = usermodel;
