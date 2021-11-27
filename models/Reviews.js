var mongoose = require("mongoose");
const { String,Number ,ObjectId} = mongoose.Schema.Types;


const ReviewsSchema = new mongoose.Schema(
  {
    companyId:{
      type: ObjectId,
      ref: "Compaines",
    },
    userId:{
      type: ObjectId,
      ref: "User",
    },
    rounds:{
      type:Number,
    },
    roundsDetails:{
      type:Object
    },
    isPlaced:{
      type:Number
    },
    salary:{
      type:String
    },
    placementType:{
      type:String
    },
    attendedOn:{
      type:String
    },
    mobileNo:{
      type:Number
    },
    advice:{
      type:String
    },
    pros:{
      type:String
    },
    cons:{
      type:String
    },
    rating: {
      type:Number
    }
  }
);


const Reviews = mongoose.models.Reviews || mongoose.model("Reviews", ReviewsSchema);

module.exports = Reviews;