const mongoose=require('mongoose');
const {Schema}=mongoose;

const EmployeeDetails = new Schema({
  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  cpassword:{
    type:String,
    required:true
  },
  albumimage:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("employee", EmployeeDetails);
