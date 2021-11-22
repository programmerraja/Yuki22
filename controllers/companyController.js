const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
var validator = require("validator");
const passport = require("passport");

const logError = require("../util/logError");
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
  getReviews:function(req,res){
    if(req.params.companyId){
      db.Reviews.find({companyId:req.params.companyId})
      .then((reviews)=>{
        res.json({status:"sucess",reviews:reviews});
      })
      .catch((err)=>{
        res.json({status:"failed",msg:"Something went wrong"});
      })
    }
  }
};

module.exports = company;
