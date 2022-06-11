const mongoose=require('mongoose');
const {Schema}=mongoose;

const EmployeeDetails = new Schema({
  image:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  trackList:{
    type:Array
  }
});
module.exports = mongoose.model("employee", EmployeeDetails);
