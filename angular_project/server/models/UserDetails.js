const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserDetails = new Schema({
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
    createAt:{
      type:String,
      default:Date.now
    }
});
module.exports = mongoose.model("userdetails", UserDetails);
