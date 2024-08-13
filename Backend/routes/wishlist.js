const express = require("express");
const products = require("../models/products");
const { authuser } = require("../middleware/auth");
const wishlist = require("../models/whishlist");
const router = express.Router();

router.get("/", authuser, async (req, res) => {
  const respo = await wishlist.findOne({ user: req.user });
  const mywishlist = respo.mywishlist;
  res.status(200).json({ message: "success", wishlistdata: mywishlist });
});
router.get("/carttotal", authuser, async (req, res) => {
  let wishlistcount = await wishlist.findOne({ user: req.user });
  if (!wishlistcount) {
    wishlistcount = new wishlist({ user: req.user, mywishlist: [] });
  }
  const wishlistelements = wishlistcount.mywishlist.length;
  return res
    .status(200)
    .json({ message: "success", totalcount: wishlistelements });
});
router.post("/addtowishlist/:id", authuser, async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const { id } = req.params;
    //console.log(id);
    //console.log(name,price,image);
    // Check if the user already has a wishlist
    let wishlistdata = await wishlist.findOne({ user: req.user });

    // If no wishlist exists, create a new one
    if (!wishlistdata) {
      wishlistdata = new wishlist({ user: req.user, mywishlist: [] });
    }

    // Add the new product to the wishlist
    wishlistdata.mywishlist.push({
      productId: id,
      name: name,
      price: price,
      image: image,
    });

    // Save the updated wishlist
    await wishlistdata.save();

    return res.status(200).json({ message: "donebaba" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error });
  }
});

router.post("/removelike/:id", authuser, async (req, res) => {
  const { id } = req.params;
  const wishlistdata = await wishlist.findOne({ user: req.user });
  wishlistdata.mywishlist.pull({productId: id });
  await wishlistdata.save();
  res.status(200).json({ message: "deleted success" });
});
module.exports = router;
