import React from 'react';
import ReviewCard from './ReviewCard';
const Reviews = ({reviews}) => {
    const hadleNoReviews = ()=>{
        if (reviews.length === 0){
            return <p style={{fontSize:'21px'}}> No reviews yet, Feel free to write a review...</p>
        }
    }
    return ( 
        <div className="reviews">
            <h1>Reviews</h1>
            <div className="review-cards">
                {/* {console.log(reviews)} */}
                {hadleNoReviews()}
                {(reviews).map((review,index)=>{return <ReviewCard key={index} avatar_id={review.user_pic} userName={review.user_name} rating={review.rating} review = {review.review} />})}
                {/* <ReviewCard avatar_id={2} userName={'User Name'} rating={4} review={'Your review goes here'}/> */}
            </div>
        </div>
     );
}
 
export default Reviews;