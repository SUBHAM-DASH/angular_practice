const { default: mongoose } = require("mongoose");

//Defineing schema
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
  },
  state: {
    type: String,
  },
  gender: {
    type: String,
  },
  location: {
    type: String,
  },
  pimage: {
    type: String,
    required: true,
  },
  doc: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("candidate", candidateSchema);
