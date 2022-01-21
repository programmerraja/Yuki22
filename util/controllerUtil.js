
const controllerUtil={

		checkReview:(review)=>{
			if(review.name && review.attended_on && review.placement_type && review. rounds && review.rounds_detail){
				return true;
			}
			else{
				return false
			}
		},

		createReview:(review)=>{
			return   {
						companyId:review.companyId,
                        userId:review.userId,
                        placementType:review.placement_type,
                        offCampusDetail:review.off_campus_detail,
                        attendedOn:review.attended_on,
                        rounds:review.rounds,
                        roundsDetails:review.rounds_detail,
                        isPlaced:review.is_placed,
                        rating:review.rating,
                        pros:review.pros,
                        cons:review.cons,
                        salary:review.salary,
                        mobileNo:review.mobile_no,
                        role:review.role,
                        isAnonymous:review.is_anonymous
                    }
		},
        createNewReview:(review)=>{
          return  {
              placementType:review.placement_type,
              offCampusDetail:review.off_campus_detail,
              attendedOn:review.attended_on,
              rounds:review.rounds,
              roundsDetails:review.rounds_detail,
              isPlaced:review.is_placed,
              rating:review.rating,
              pros:review.pros,
              cons:review.cons,
              salary:review.salary,
              mobileNo:review.mobile_no,
              role:review.role,
              isAnonymous:review.is_anonymous
            }
        }

}

module.exports=controllerUtil
