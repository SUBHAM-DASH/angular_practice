const express = require("express");
const router = express.Router();
const EmployeeDetails = require("../models/Employee");
const multer = require('multer');


const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./uploads/employee_details');
  },
  filename:function(req,file,cb){
    cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname);
  }
});

const upload =multer({
  storage:storage
});
const admin_uploads=upload.fields([{name:'image',maxCount:2}]);



// Route1 for adding product
router.post("/employeedetail",admin_uploads, async (req, res) => {
  try {
    console.log(req.body);
    res.send(req.body);
  } catch (error) {
    return res.json({error:error.message});
  }
});

module.exports = router;
