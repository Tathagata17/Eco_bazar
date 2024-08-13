const mongoose =require("mongoose");
const productmodel=require("./products");

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
//const product=

//productmodel.create(product);

module.exports=connectdb;