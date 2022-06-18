const mongoose=require('mongoose');
const {Schema}=mongoose;

const NewUserDetails = new Schema({
  email:{
    type:String,
    required:true,
    trim:true
  },
  password:{
    type:String,
    required:true
  },
  createAt:{
    type:Date,
    default:Date.now
  }
});
module.exports = mongoose.model("newuserdetails", NewUserDetails);
