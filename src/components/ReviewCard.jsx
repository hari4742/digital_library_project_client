import React from 'react';
import ProfileImg from './Profile/ProfileImage';
import StarRating from './StarRating';
const ReviewCard = (props) => {
    return ( 
        <div className="review-card">
            <ProfileImg avatar_id={props.avatar_id}/>
            <div className="review-content">
                <div className="user-name">
                    <p>{props.userName}</p>
                    <div className="star-rating">
                        <StarRating rating={props.rating}/>
                    </div>
                </div>
                <p className="user-review">
                    <p>{props.review}</p>
                    
                </p>
            </div>
        </div>
     );
}
 
export default ReviewCard;