import React from 'react';
import ProfileImg from './Profile/ProfileImage';
import StarRating from './StarRating';
const ReviewCard = (props) => {
    return ( 
        <div className="review-card">
            <ProfileImg avatar_id={props.avatar_id}/>
            <div className="review-content">
                <div className="user-name">
                    <p>User Name</p>
                    <div className="star-rating">
                        <StarRating rating={4}/>
                    </div>
                </div>
                <p className="user-review">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolorem laboriosam aliquid natus ab repellendus consequuntur.
                </p>
            </div>
        </div>
     );
}
 
export default ReviewCard;