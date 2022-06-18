const express = require("express");
const { async } = require("rxjs");
const router = express.Router();
const Gpspush = require("../models/Gpspush");

// Route :1 All total details year wise
router.post('/yeardetails',async(req,res)=>{
  console.log(req.body);
  try {

  } catch (error) {
    return res.json({error:error.message});
  }
})

//Route:2 All Details month and year wise
router.post('/monthyeardetails',async(req,res)=>{
  console.log(req.body);
  try {

  } catch (error) {
    return res.json({error:error.message});
  }
})

//Route:3 All Details from and to wise

router.post('/fromandtodetails',async(req,res)=>{
  console.log(req.body);
  try {

  } catch (error) {
    return res.json({error:error.message});
  }
})

//Route:4 All Details of Today
router.post('/todaydetails',async(req,res)=>{
  console.log(req.body);
  try {

  } catch (error) {
    return res.json({error:error.message});
  }
})
module.exports = router;
