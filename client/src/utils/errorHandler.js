import swal from "sweetalert";

export default function errorHandler(isError,msg) {
	if(!isError){
		if(!msg){
			msg="Something went wrong"
		}
		swal({
              title: "Success",
              text: msg,
              icon: "success",
            });
	}else{
		 swal({
              title: "Error",
              text: msg,
              icon: "error",
            });
	}
}