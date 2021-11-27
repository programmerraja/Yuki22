import swal from "sweetalert";

export default function errorHandler(isError,msg) {
	
	if(!isError){
		swal({
              title: "Success",
              text: msg,
              icon: "success",
            });
	}else{
		if(!msg){
			msg="Something went wrong"
		}
		 swal({
              title: "Error",
              text: msg,
              icon: "error",
            });
	}
}