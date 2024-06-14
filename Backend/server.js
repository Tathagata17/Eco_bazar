const bodyParser = require("body-parser");
const express=require("express");
const connectdb=require("./models/db");

const app=express();
connectdb();

app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(express.json()); // Parses incoming JSON requests

//user signup route
app.use("/usersignup",require("./routes/usersignup"));
//user login route
app.use("/userlogin",require("./routes/userlogin"));






app.listen(3000,()=>{
    console.log("server is running");
})
