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
    offCampusDetail:{
      type:String
    },
    attendedOn:{
      type:String
    },
    mobileNo:{
      type:Number
    },
    role:{
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
    },
    isAnonymous:{
      type:Boolean,
      default:false
    },
    likes:{
      type: [{type: String}]
    }
  },
  { timestamps: true }
);


const Reviews = mongoose.models.Reviews || mongoose.model("Reviews", ReviewsSchema);

module.exports = Reviews;
