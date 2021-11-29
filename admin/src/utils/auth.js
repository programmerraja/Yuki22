

let loggedIn=false;

if(localStorage.getItem("loggedIn")){
	loggedIn=localStorage.getItem("loggedIn");
}
else{
	localStorage.setItem("loggedIn",false);
}

async function signIn(email,password){
	
	let body=JSON.stringify({"email":email,"password":password});

	let res=await fetch("/signin",{
											method:"post",
											headers:{"Content-Type":"application/json"},
											body:body
										}
							);

	res=await res.json();	
	if(res.status==="Sucess"){
		localStorage.setItem("loggedIn",true);
		return res;
	}
	else{
		return res;
	}
}

async function signUp(name,email,password) {

	let body=JSON.stringify({"name":name,"email":email,"password":password});

	let res=await fetch("/signup",{
											method:"post",
											headers:{"Content-Type":"application/json"},
											body:body
										}
							);

	res=await res.json();	
	return res;
}




let Auth={signUp,signIn,loggedIn};

export default Auth;