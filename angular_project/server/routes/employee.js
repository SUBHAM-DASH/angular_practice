const express = require("express");
const router = express.Router();
const EmployeeDetails = require("../models/Employee");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/employee_details");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});
const admin_uploads = upload.fields([{ name: "Image", maxCount: 2 }]);

// Route:1 for adding product
router.post("/employeedetails", admin_uploads, async (req, res) => {
  // console.log(req.body);
  // console.log(req.files);
  const { firstname, lastname, email, password, cpassword } = req.body;
  try {
    const newEmployee = new EmployeeDetails({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      cpassword: cpassword,
      albumimage: req.files.Image[0].filename,
    });
    await newEmployee.save();
    console.log(newEmployee);
    res.json({ result: "saved successfully" });
  } catch (error) {
    return res.json({ error: error.message });
  }
});

//Route:2 for geting the product
router.get("/getemployeedetals",async(req,res)=>{
  try {
    const getDetails= await EmployeeDetails.find();
    res.json({status:"success",result:getDetails});
  } catch (error) {
    return res.json({ error: error.message });
  }
})
module.exports = router;
