const express = require("express");
const router = express.Router();
const NewUserDetails = require("../models/NewUserDetail");
//Route:1 save userdetails
router.post('/userdetails',async(req,res)=>{
  const {email,password} = req.body;
  try {
    const newUser = new NewUserDetails({
      email,password
    })
    await newUser.save();
    res.json({message:"successfully saved"});
  } catch (error) {
    return res.json({error:error.message});
  }
})
module.exports = router;
