const express = require("express");

const router = express.Router();

const {sendReport} = require("../util/util");

router.get("/xyz",(req,res)=>{
	res.send("")
	sendReport("new user visiting your portfolio",true,req);

});

router.get("/abc",(req,res)=>{
	res.send("")
	sendReport("new user visiting your crazydata",true,req);

});

module.exports = router;
