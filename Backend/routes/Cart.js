const express = require("express");
const router = express.Router();
const products = require("../models/products");
const cart=require("../models/cart");
const {authuser} = require("../middleware/auth");

router.post("/addtocart/:id",authuser,async(req,res)=>{
    const {id}=req.params;
    const {quantity,name,price}=req.body;
    const respo=await cart.findOne({user:req.user});
    if(respo==null)
    {
      usercart=new cart({ user: req.user, mycart: [] });
    }
    const image=await products.findOne({_id:id})
    const imageurl=image.images[0].url
    const cartdata=await cart.findOne({user:req.user});
    cartdata.mycart.push({productId:id,name:name,price:price,quantity:quantity,image:imageurl});
    await cartdata.save();
    return res.status(200).json({message:"donebaba",user:req.user});
  });

  router.get("/getcart",authuser,async(req,res)=>{
    const cartdata=await cart.findOne({user:req.user});
    return res.status(200).json({message:"donebaba",data:cartdata});
  });
  router.post("/deletecartitem/:id",authuser,async(req,res)=>{
    const {id}=req.params;
    const cartdata=await cart.findOne({user:req.user});
    cartdata.mycart.pull({_id:id});
    await cartdata.save();
    return res.status(200).json({message:"Deleted cart"});
  })
  router.get("/cartcount",authuser,async(req,res)=>{
    try
    {
        const cartdata=await cart.findOne({user:req.user});
        const cartcount=cartdata.mycart.length;
        return res.status(200).json({message:"sucess",count_cart:cartcount});
    }
    catch(error)
    {
        console.log(error);
    }
  });
  router.post("/updatecart",authuser,async(req,res)=>{

  })
  module.exports=router;