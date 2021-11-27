var mongoose = require("mongoose");
const { String,Number } = mongoose.Schema.Types;

const CompainesSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
      unique:true
    },
    rating:{
      type:Number,
      required:true,
      default:0
    },
    noOfReviews:{
      type:Number
    }
  },
);


const Compaines = mongoose.models.Compaines || mongoose.model("Compaines", CompainesSchema);

module.exports = Compaines;
