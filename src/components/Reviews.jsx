import React from 'react';
import ReviewCard from './ReviewCard';
const Reviews = ({reviews}) => {
    return ( 
        <div className="reviews">
            <h1>Reviews</h1>
            <div className="review-cards">
                {/* {console.log(reviews)} */}
                {(reviews).map((review,index)=>{return <ReviewCard key={index} avatar_id={review.user_pic} userName={review.user_name} rating={review.rating} review = {review.review} />})}
                {/* <ReviewCard avatar_id={2} userName={'User Name'} rating={4} review={'Your review goes here'}/> */}
            </div>
        </div>
     );
}
 
export default Reviews;