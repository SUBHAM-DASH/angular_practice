const express=require('express');
const router=express.Router();
const UserDetails=require('../models/UserDetails');

//Route :1 create new Userdetails
router.post('/newuserdetails',async(req,res)=>{
    try {
      console.log(req.body);
      const {address,emailControl,phoneControl,tickets}=req.body;
      const user=new UserDetails({
        email:emailControl,
        phone:phoneControl
      })
      user.address.push(address);
      user['tickets']=tickets;

      await user.save();
      console.log("saved");
      res.status(200).json({"result":"Okay"});
    } catch (error) {
      return res.status(500).json({"error":error.message})
    }
});

//Route:2 get the details who are from bangaluru
router.get('/getDetails',async(req,res)=>{
  try {
    const getDetails=await UserDetails.find({address:{$elemMatch:{streetControl:"bangaluru"}}});

    console.log(getDetails);
    res.status(200).json({"result":getDetails});
  } catch (error) {
    return res.status(500).json({"error":error.message})
  }
})

module.exports=router;
