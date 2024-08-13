const bodyParser = require("body-parser");
const express=require("express");
const connectdb=require("./models/db");
const cookiesparser=require("cookie-parser");
const cors =require("cors");
require('dotenv').config();

const app=express();
connectdb();
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(cookiesparser());

app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(express.json()); // Parses incoming JSON requests

//user signup route
app.use("/usersignup",require("./routes/usersignup"));
//user login route
app.use("/userlogin",require("./routes/userlogin"));
//admin signup
app.use("/adminsignup",require("./routes/adminsignup"));
//admin login
app.use("/adminlogin",require("./routes/adminlogin"));
app.use("/home",require("./routes/home"));
app.use("/shop",require("./routes/Shop"));
app.use("/cart",require("./routes/Cart"));
app.use("/wishlist",require("./routes/wishlist"));
app.use("/userdetail",require("./routes/User"));






app.listen(4000,()=>{
    console.log("server is running");
})
