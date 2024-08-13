const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  user:{
    type:String,
    required:true,
  },
  mywishlist: [
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
      image:{
        type:String,
        required:true,
      }
    },
  ],
}, { timestamps: true });

const wishlist = mongoose.model("wishlists", wishlistSchema);

module.exports = wishlist;
