import React from 'react';
import ReviewCard from './ReviewCard';
const Reviews = (props) => {
    return ( 
        <div className="reviews">
            <h1>Reviews</h1>
            <div className="review-cards">
                <ReviewCard avatar_id={10}/>
                <ReviewCard avatar_id={3}/>
                <ReviewCard avatar_id={6}/>
                <ReviewCard avatar_id={0}/>
                <ReviewCard avatar_id={1}/>
            </div>
        </div>
     );
}
 
export default Reviews;