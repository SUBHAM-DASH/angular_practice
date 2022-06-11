const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserDetails = new Schema({
  barcode:{
    type:String,
    required:true
  },
  album:{
    type:String,
    required:true
  },
  artist:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("userdetails", UserDetails);
