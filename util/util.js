var nodemailer = require('nodemailer');

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
	let subject="Reset Your Password";
	let body="<p>Hai "+user_name+",</p>\
	 		<p>A request has been recevied to change the password for your Yuki account. This link only work for 20 minutes</p>\
	 		 <a href='"+link+"'>Reset Password </a>"
	let msg=await sendMail(subject,body,to_mail);
	return msg;

}

async function verfiyMail(to_mail,user_name,link){

	let subject="Verfiy Your Mail";
	let body="<p>Hai "+user_name+",</p>\
	 		<p>we're happy you signed up for Yuki. To start exploringthe Yuki confirm your email address\
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
	console.log(err);
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
	console.log("------------------------------------");
	console.log("Error:",msg);
	console.log("------------------------------------");

}

module.exports=
{
	sendPasswordReset,
	verfiyMail,
	AppError,
	logError,
	dbErrorHandler
};
