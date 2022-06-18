const express = require("express");
const router = express.Router();
const Gpspush = require("../models/Gpspush");

//Route:1
router.post("/gpspushdetails", async (req, res) => {
  console.log(req.body);
  const { pushdata, createAt } = req.body;
  try {
    const Gps = new Gpspush({
      pushdata,
      createAt,
    });
    await Gps.save();
    res.json({ message: "saved successfully" });
  } catch (error) {
    return res.json({ error: error.message });
  }
});
//Route:2
router.get("/totalgpspush", async (req, res) => {
  try {
    const totalgps = await Gpspush.find();
    res.json({ result: totalgps });
  } catch (error) {
    return res.json({ error: error.message });
  }
});
module.exports = router;
