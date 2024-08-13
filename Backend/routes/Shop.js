const express = require("express");
const router = express.Router();
const products = require("../models/products");
const cart = require("../models/cart");
const { authuser } = require("../middleware/auth");

router.get("/", async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const totalitems = await products.countDocuments();
  const totalpages = Math.ceil(totalitems / limit);
  try {
    const responsedata = await products
      .find({})
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    return res.status(200).json({
      message: "success",
      shopdata: responsedata,
      pages: totalpages,
      totalitems: totalitems,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getbyid/:id", async (req, res) => {
  const { id } = req.params;
  const respo = await products.findOne({ _id: id });
  return res.status(200).json({ message: "success", productdata: respo });
});
router.post("/filterdata", async (req, res) => {
  const { filterquery } = req.body;
  const { page = 1, limit = 12 } = req.query;
  console.log(filterquery);
  const response = await products
    .find({ category: { $in: filterquery } })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  const totaldocuments = await products.countDocuments({category:{$in:filterquery}});
  const totalpages = Math.ceil(totaldocuments / limit);
  //console.log(totalpages);

  return res
    .status(200)
    .json({
      message: "sucess",
      productdata: response,
      pages: totalpages,
      totalitems: totaldocuments,
    });
});

module.exports = router;
