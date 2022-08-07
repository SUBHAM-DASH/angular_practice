const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');
const upload = require('../middleware/upload');

// upload.fields([{name:"pimage",maxCount:1}])

//candidate save detail
router.post('/resume',upload.none(),async(req,res)=>{
  console.log(req.body);
  console.log(req.files);
  let imageData = new Buffer.from(req.body.image[2],"base64").toString("ascii");
  console.log(imageData);
  // try {
    // const {name,email,dob,state,gender,location}= req.body;
    // const pImage=req.files['pimage'][0].filename;
    // const doc=req.files['doc'][0].filename;

    // if(name && email && pImage && doc){
    //   const newDoc = new Candidate({
    //     name:name,
    //     email:email,
    //     dob:dob,
    //     state:state,
    //     gender:gender,
    //     location:location,
    //     pimage:pImage,
    //     doc:doc
    //   })
    //   await newDoc.save();
    //   res.json({status:"success",message:"successfully saved"})
  //   }else{
  //     res.json({failed:"all fields are required"});
  //   }
  // } catch (error) {

  // }
});
module.exports = router;
