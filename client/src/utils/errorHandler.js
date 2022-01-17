import swal from "sweetalert";

export default function errorHandler(isError,msg) {
	
	if(!isError){
		return swal({
              title: "Success",
              text: msg,
              icon: "success",
            });
	}else{
		if(!msg){
			msg="Something went wrong plse try again later"
		}
		return swal({
              title: "Error",
              content:{
              	element:"p",
              	attributes:{
              		innerText:msg,
              		className:"swal_text"
              	}
              }
            });
	}
}