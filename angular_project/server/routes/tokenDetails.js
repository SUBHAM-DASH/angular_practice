const express = require("express");
const router = express.Router();
const TokenDetails = require("../models/TokenDetails");

//Route:1
router.post("/tokendetails", async (req, res) => {
  console.log(req.body);
  const { refno, createAt, tokens } = req.body;
  try {
    const TokenDetail = await TokenDetails({
      refno,
      createAt,
      tokens,
    });
    await TokenDetail.save();
    res.json({ message: "saved successfully" });
  } catch (error) {
    return res.json({ error: error.message });
  }
});

// Route:2
router.get("/totaltoken", async (req, res) => {
  try {
    const totalToken = await TokenDetails.find();
    res.json({ result: totalToken });
  } catch (error) {
    return res.json({ error: error.message });
  }
});
module.exports = router;
