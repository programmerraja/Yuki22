const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
var validator = require("validator");
const passport = require("passport");
var mongoose = require("mongoose");

const {verfiyMail,dbErrorHandle,sendReport} = require("../util/util");

// db.Compaines.find({}).then((a)=>{a.forEach(g=>{console.log(g)})})

// db.Compaines.findOneAndUpdate({_id:"61c9c88eef4e99002903a767"},{name:"american megatrends"}).then((a)=>console.log(a))


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
  getSortedCompanyList:function(req,res){
    if(req.query.sortBy && req.query.type){
      db.Compaines.find({})
      .sort({[req.query.sortBy]:req.query.type})
      .then((list)=>{
        res.json({status:"sucess",list:list});
      })
      .catch((err)=>{
        res.json({status:"failed",msg:"Something went wrong"});
      })  
    }
  },
  getReviews: function(req,res){
    if(req.params.companyId){
       let lookup={from: "users",localField: "userId",foreignField: "_id",as: "user"}
       db.Reviews.aggregate(
        [
           {$match: 
                {companyId: mongoose.Types.ObjectId(req.params.companyId) }
           },
           {$lookup:lookup},
        ]
        ).then(async(reviews)=>{

             //appending company data to first one
             let company=await db.Compaines.findOne({_id:req.params.companyId});
             reviews[0]["company"]={...company._doc};

             //removing user detail if it is Anonymous and put as obj
             reviews.forEach(review=>{
                if(review.isAnonymous){
                  review.user={name:"anonymous",dept:"",regNo:""};
                }else{
                  review.user={name:review.user[0].name,department:review.user[0].department,regNo:review.user[0].regno};
                }
             })

             res.json({status:"sucess",reviews:reviews});
             sendReport(`some one looking for reviews for the company ${reviews[0]["company"]["name"]}`,true,req);
      })
      .catch((err)=>{
        console.log(err)
        res.json({status:"failed",msg:"Something went wrong"});
      })
    }
  },
  
  getSortedReviews:function(req,res){
    if(req.params.companyId && req.query.sortBy && req.query.type){
       let lookup={from: "users",localField: "userId",foreignField: "_id",as: "user"}
       db.Reviews.aggregate(
        [
           {$match: 
                {companyId: mongoose.Types.ObjectId(req.params.companyId) }
           },
           {$lookup:lookup},
           {$sort:{[req.query.sortBy]:parseInt(req.query.type)}}
        ]
        )
        .then(async(reviews)=>{
             //appending company data to first one
             let company=await db.Compaines.findOne({_id:req.params.companyId});
             reviews[0]["company"]={...company._doc};

             //removing user detail if it is Anonymous and put as obj
             reviews.forEach(review=>{
                if(review.isAnonymous){
                  review.user={name:"anonymous",dept:"",regNo:""};
                }else{
                  review.user={name:review.user[0].name,department:review.user[0].department,regNo:review.user[0].regno};
                }
             })
             res.json({status:"sucess",reviews:reviews});
      })
      .catch((err)=>{
        console.log(err)
        res.json({status:"failed",msg:"Something went wrong"});
      })
    }
  }
};

module.exports = company;
