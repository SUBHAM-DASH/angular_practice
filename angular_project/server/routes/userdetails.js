const express = require("express");
const router = express.Router();
const UserDetails = require("../models/UserDetails");

//Route :1 create new Userdetails
router.post("/newuserdetails", async (req, res) => {
  const {barcode,album,artist,date,price}= req.body;
  try {
    const newData=new UserDetails({
      barcode:barcode,
      album:album,
      artist:artist,
      date:date,
      price:price
    })
    await newData.save();
    res.json({result:"saved successfully"})
  } catch (error) {
    return res.json({error:error.message});
  }
});

//Route:2 get the details who are from bangaluru
router.get("/getDetails", async (req, res) => {
  try {
    const getDetails = await UserDetails.find();
    res.json({result:getDetails});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//Route:3 get the details with search
router.post('/getsearchdetail',async(req,res)=>{
  console.log(req.body);
  try {
    // let searchData = await UserDetails.find({
    //   "$or":[
    //     {"barcode":{$regex}}
    //   ]
    // })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})

module.exports = router;
