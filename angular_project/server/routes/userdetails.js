const express=require('express');
const router=express.Router();
const UserDetails=require('../models/UserDetails');

//Route :1 create new Userdetails
router.post('/newuserdetails',async(req,res)=>{
  try {
    const {firstname,lastname,email,password}= req.body;
    const userDetails=new UserDetails({
      firstname,lastname,email,password
    });
    await userDetails.save();
    res.status(200).json({result:"saved successfully"});
  } catch (error) {
    return res.status(500).json({error:ErrorEvent.message});
  }
})

module.exports=router;
