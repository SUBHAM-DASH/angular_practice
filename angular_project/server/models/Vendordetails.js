const mongoose=require('mongoose');
const {Schema}=mongoose;

const VendorDetails = new Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  createAt:{
    type:String,
  }
});
module.exports = mongoose.model("venordetails", VendorDetails);
