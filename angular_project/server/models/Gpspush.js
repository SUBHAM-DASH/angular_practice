const mongoose=require('mongoose');
const {Schema}=mongoose;

const GpsPush = new Schema({
  pushdata:{
    type:Number,
    required:true
  },
  createAt:{
    type:String
  }
});
module.exports = mongoose.model("gpspush", GpsPush);
