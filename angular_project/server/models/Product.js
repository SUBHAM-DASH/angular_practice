const mongoose=require('mongoose');
const {Schema}=mongoose;

const StudentSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  roll:{
    type:Number,
    required:true
  },
  address:[Object],
  email:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("students", StudentSchema);
