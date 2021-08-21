import React from 'react';
import backend from '../../backend';
import StarRating from '../StarRating';
const UserReviewCard = (props) => {
    const handleDeleteReview = async()=>{
        const response = await backend.delete(`/review/${props.review_id}/delete/user/${props.user_id}`);
        // console.log(response.data.data);
        if(response.data.status === 'success'){
            props.fetchUserReviews();
            alert("Your review has been deleted..");
        }
    }
    return ( 
        <div className="user-review-card">
            <div className="review-content">
                <div className="book-name">
                    <p>{props.book_name}</p>
                    <div className="star-rating">
                        <StarRating rating={props.rating}/>
                    </div>
                </div>
                <hr />
                <p className="user-review">
                    <p>{props.review}</p>
                </p>
            </div>
            <div className="delete-btn" onClick={handleDeleteReview}>
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
     );
}
 
export default UserReviewCard;