require("dotenv").config();

function logError(msg,err) {
   if (process.env.NODE_ENV !== "production") {
   		console.log("...............Error........................")
   		console.log(msg,err);
   		console.log("...............Error........................")
   		
   }	
}

module.exports=logError;
