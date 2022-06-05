const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserDetails = new Schema({
    email:{
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    address:[
      {
        streetControl:{
          type:String,
          required:true
        },
        postalcodeControl:{
          type:Number,
          require:true
        }
      }
    ],
    tickets:{
      type:Array,
      default:[]
    }
});
module.exports = mongoose.model("userdetails", UserDetails);
