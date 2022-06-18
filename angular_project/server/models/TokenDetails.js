const mongoose=require('mongoose');
const {Schema}=mongoose;

const TokenDetails = new Schema({
  refno:{
    type:Number,
    required:true
  },
  tokens:{
    type:String,
    required:true
  },
  createAt:{
    type:String
  }
});
module.exports = mongoose.model("tokendetails", TokenDetails);
