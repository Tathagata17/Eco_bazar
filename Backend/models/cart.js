const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user:{
    type:String,
    required:true,
  },
  mycart: [
    {
      productId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      image:{
        type:String,
        required:true,
      }
    },
  ],
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
