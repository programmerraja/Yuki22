const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
var validator = require("validator");
const passport = require("passport");

const {verfiyMail,dbErrorHandler} = require("../util/util");


const company = {
    getCompanyList:function(req,res){
      db.Compaines.find({})
      .then((list)=>{
        res.json({status:"sucess",list:list});
      })
      .catch((err)=>{
        res.json({status:"failed",msg:"Something went wrong"});
      })
  },
  getReviews: function(req,res){
    if(req.params.companyId){
      db.Reviews.find({companyId:req.params.companyId})
      .then(async(reviews)=>{
        async function getUser(index){
          let user=await db.User.findOne({_id:reviews[index]["userId"]});
          if(user){
            reviews[index]["_doc"]["user"]={name:user.name,regno:user.regno,department:user.department};
          }
          if(reviews.length-1>index){
            await getUser(index+1);
          }
        }
        if(reviews.length){
          await getUser(0);
        }
        res.json({status:"sucess",reviews:reviews});
      })
      .catch((err)=>{
        console.log(err)
        res.json({status:"failed",msg:"Something went wrong"});
      })
    }
  }
};

// db.Reviews.aggregate([{ $match: { companyId:req.params.companyId } },
//    {
//     $lookup: {
//             from: "user",
//             localField: "userId",
//             foreignField: "_id",
//             as: "copies_sold"
//         }
// }])
module.exports = company;
