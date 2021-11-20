var mongoose = require("mongoose");
const { String,Number } = mongoose.Schema.Types;

const CompainesSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    rating:{
      type:Number,
      required:true,
      default:0
    }
  },
);


const Compaines = mongoose.models.Compaines || mongoose.model("Compaines", CompainesSchema);

module.exports = Compaines;
