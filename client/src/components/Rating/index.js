import React from "react";
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarBorder';

import "./style.css"


function PrimaryRating({ number }) {
  let stars = [];
  
  if (!number) {
    number = 4;
  }

  let rating = parseInt(number);

  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon className="primaryRatingIcon ml-1 mr-1" key={i} />);
  }

  if (number%1 !== 0) {
    stars.push(<StarHalfIcon className="primaryRatingIcon ml-1 mr-1" key={6} />);

    for (let i=parseInt(rating)+1; i < 5; i++) {
      stars.push(<StarOutlineIcon className="primaryRatingIcon ml-1 mr-1" key={i} />);
    }
  } else {
    for (let i=rating; i < 5; i++) {
      stars.push(<StarOutlineIcon className="primaryRatingIcon ml-1 mr-1" key={i} />);
    }
  }

  return (
    <div className="d-flex flex-row justify-content-start align-items-center">
      <span className="primaryRating">{number.toFixed(1)}</span>
      <StarIcon className="primaryRatingIcon" />
    </div>
  );
}

export default PrimaryRating;
