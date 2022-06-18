const mongoose=require('mongoose');
const {Schema}=mongoose;

const OrderDetails = new Schema({
  productname:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  createAt:{
    type:String
  }
});
module.exports = mongoose.model("orderdetails", OrderDetails);
