const User= require("./User")
const Compaines= require("./Compaines")
const Reviews= require("./Reviews")
const fs = require("fs");


//for back up the data

// User.find({}).then((u)=>{
// fs.writeFile("./user.json",JSON.stringify(u),"utf-8",(e)=>{console.log(e,"saved")})  
// })

// Compaines.find({}).then((u)=>{
// fs.writeFile("./company.json",JSON.stringify(u),"utf-8",(e)=>{console.log(e,"saved")})  
// })

// Reviews.find({}).then((u)=>{
// fs.writeFile("./reviews.json",JSON.stringify(u),"utf-8",(e)=>{console.log(e,"saved")})  
// })


module.exports = {User,Compaines,Reviews};
