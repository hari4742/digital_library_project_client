import React, { useState } from 'react';
const WriteReview = (props) => {
    const [review,setReview] = useState("");
    const [rating,setRating] = useState("Rating");
    return ( 
        <div className="write-review">
            <h2>Write a Review</h2>
            <div className="review-input">
                <textarea value={review} onChange={(e)=>{setReview(e.target.value);}} name="reviewBox" id="reviewBox" cols="80" rows="5" placeholder="Tell others what you think about this book..." required></textarea>
                <div className="review-btns">
                    <select value={rating} onChange={(e)=>{setRating(e.target.value);}} name="rating" id="rating" required>
                        <option disabled>Rating</option>
                        <option value="1">&#11088;</option>
                        <option value="2">&#11088;&#11088;</option>
                        <option value="3">&#11088;&#11088;&#11088;</option>
                        <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
                        <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
                    </select>
                    <p id="submit-btn"> Submit </p>
                </div>
            </div>
        </div>
     );
}
 
export default WriteReview;