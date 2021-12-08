var nodemailer = require('nodemailer');
const crypto=require("crypto");
const uaparser = require("ua-parser-js");
const axios=require("axios");

async function sendWhoIs(req){
	let ip = req.headers["x-forwarded-for"] || req.ip;
    let useragent = uaparser(req.headers["user-agent"]);
    let browser = useragent["browser"]["name"];
    let os = useragent["os"]["name"];
    let device = useragent["device"];
    let dev_string=""
    Object.keys(device).forEach((key)=>{
    	dev_string+=` ${key}:${device[key]}\n`
    })
    
  	try{
	    let data = await getLocation(ip);

	    if(req.path==="/"){
	    	return sendReport(`New user visting home page\n ip: ${ip} \n city: ${data.city} \n region: ${data.region} \n country: ${data.country} \n org: ${data.org} \n browser:${browser} \n os:${os} \n ${dev_string} `);
	    }
	    if(!String(req.path).startsWith("/images/"))
	    return sendReport(`New user visting\n path:${req.path} ip: ${ip} \n city: ${data.city} \n region: ${data.region} \n country: ${data.country} \n org: ${data.org} \n browser:${browser} \n os:${os} \n ${dev_string} `);
	   		
	}
	catch(e){

	}
}

async function getLocation(ip) {
    try {
        let res = await axios.get("https://ipapi.co/" + ip + "/json/");
        if (res["data"]["error"] == true) {
            // console.log(res["data"]["reason"]);
        }
        return res["data"];
    } catch (err) {
        return {};
    }

}
  // useragent:${useragent["ua"]} \n\n
function sendReport(msg,isDevice=true,req){
	if(isDevice && req){
		let ip = req.headers["x-forwarded-for"] || req.ip;
		let useragent = uaparser(req.headers["user-agent"]);
		let device = useragent["device"];
		let os = useragent["os"]["name"];
		
		let dev_string=""
	    Object.keys(device).forEach((key)=>{
	    	dev_string+=`${key}:${device[key]}\n`
	    })
		msg+=`Ip:${ip} \n os:${os} \n ${dev_string}`
	}
	msg=encodeURIComponent(msg)
	axios
	.get(`https://api.telegram.org/bot${process.env.telegramToken}/sendMessage?chat_id=${process.env.chatId}&text=${msg}`)
	.then((res)=>{
		// console.log(res)
	})
	.catch((res)=>{
		// console.log(res)
	})
}

function generateToken(){
	const token=crypto.randomBytes(10).toString("hex");
	return token;
}	
function sendMail(subject,body,to_mail)
{
	 return new Promise((resolve,reject)=>{
			var transporter = nodemailer.createTransport({
			  service: 'gmail',
			  auth: {
			    user: process.env.EMAIL,
			    pass: process.env.PASSWORD
			  }
			});

			var mailOptions = {
			  from:process.env.EMAIL,
			  to: to_mail,
			  subject: subject,
			  html:body
			};

			transporter.sendMail(mailOptions, function(err, info){
			  if(err) {
					logError(err);
					 resolve(false);
			  } else {
			    console.log('Email sent: ' + info.response);
			      resolve(true);
			  }
			});
	});
}

async function sendPasswordReset(to_mail,user_name,link)
{
	console.log(link)
	let subject="Reset Your Password";
	let body="<p>Hai "+user_name+",</p>\
	 		<p>A request has been recevied to change the password for your Yuki22 account. This link only work for 20 minutes</p>\
	 		 <a href='"+link+"'>Reset Password </a>"
	let msg=await sendMail(subject,body,to_mail);
	return msg;

}

async function verfiyMail(to_mail,user_name,link){
	console.log(link)
	let subject="Verfiy Your Mail";
	let body="<p>Hai "+user_name+",</p>\
	 		<p>we're happy you signed up for Yuki22. To start exploring the Yuki22 confirm your email address\
	 		 <a href='"+link+"'>Verfiy Now</a>"

	let msg=await sendMail(subject,body,to_mail);
	return msg;

}

class AppError extends Error{
	constructor(err,status_code){
		super(err.message);
		this.status_code=status_code;
		this.message=err.message;
	}
}



/**
 * Get the error message from error object
 */
function dbErrorHandler(err){
	let message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message ="Email already Exist"
                break
            default:
                message = 'Something went wrong. Please try again'
        }
    } 
    else {
            message ="Something went wrong. Please try again"
    }

    return message;
}

// Used to log the error
function logError(msg,err){
	if(process.env.NODE_ENV!= "production"){
		console.log("------------------------------------");
		console.log("Error:",err,msg);
		console.log("------------------------------------");
	}

}



module.exports=
{
	sendPasswordReset,
	verfiyMail,
	AppError,
	logError,
	dbErrorHandler,
	generateToken,
	sendReport,
	sendWhoIs
};
