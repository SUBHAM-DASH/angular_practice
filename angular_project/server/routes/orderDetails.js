const express = require("express");
const router = express.Router();
const OrderDetails = require("../models/OrderDetail");

//Route:1
router.post("/orderdetails", async (req, res) => {
  const { productname, price, createAt } = req.body;
  try {
    const Orders = new OrderDetails({
      productname,
      price,
      createAt,
    });
    await Orders.save();
    res.json({ message: "saved successfully" });
  } catch (error) {
    return res.json({ error: error.message });
  }
});

// Route:2
router.get("/totalorder", async (req, res) => {
  try {
    const totalOrders = await OrderDetails.find();
    res.json({ result: totalOrders });
  } catch (error) {
    return res.json({ error: error.message });
  }
});
module.exports = router;
