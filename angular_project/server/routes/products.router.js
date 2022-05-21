const express = require("express");
const router = express.Router();
const studentDetails = require("../models/Product");

// Route1 for adding product
router.post("/addSaleProduct", async (req, res) => {
  try {
    const { name,email,roll,address,plot_no } = req.body;
    const newObj={}
    if(address){newObj.address=address};
    if(plot_no){newObj.plot_no=plot_no};
    const StudentDetails = new studentDetails({
      name,email,roll
    });
    StudentDetails.address.push(newObj);

    await StudentDetails.save();
    res.status(200).json({ result: "saved successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// Route2 for search the productname wise
router.get("/searchProduct", async(req, res) => {
  try {
    const searchProduct=await AddSaleProduct.find({
      "$or":[
        {"productname":{$regex:req.query.name}}
      ]
    });
    res.status(200).json({"result":searchProduct});

  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
});
// Route:3 get the details
router.get('/getDetails',async(req,res)=>{
  try {
    console.log("subham");
    const getDetails=await studentDetails.find();
    if(!getDetails){
      return res.status(400).json({"error":"Not Found"});
    }
    res.status(200).json({"result":getDetails})
  } catch (error) {
    res.status(500).json({"error":"internal server error"});
  }
})
module.exports = router;
