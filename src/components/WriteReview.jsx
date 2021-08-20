import React, { useContext, useState } from 'react';
import backend from '../backend';
import { AuthContext } from '../context/AuthenticationContext';
const WriteReview = ({user_id,book_id,fetchReviews,fetchBook}) => {
    const [review,setReview] = useState("");
    const [rating,setRating] = useState("Rating");
    const {isLogged} = useContext(AuthContext);
    const handleAddReview = async()=>{
        if(isLogged){
            if(review===''){
                alert("Review can't be empty");
                return false;
            }else if(rating==='Rating'){
                alert('Please Select star rating..');
                return false;
            }else{
                const response = await backend.post('/review/add/user',{user_id,book_id,rating,review})
                // setReviews([response.data.data,...reviews]);
                fetchBook();
                fetchReviews();
                alert("Review submitted Successfully!..");
                setReview('');
                setRating('Rating');
            }
        }else{
            alert("Please log in or sign up to write a review..");
        }
    }
    return ( 
        <div className="write-review">
            <h2>Write a Review</h2>
            <div className="review-input">
                <textarea value={review} onChange={(e)=>{setReview(e.target.value);}} onClick={()=>{if(!(isLogged)){alert("Please Log in or Sign up to write review..")}}} name="reviewBox" id="reviewBox" cols="80" rows="5" placeholder="Tell others what you think about this book..." required></textarea>
                <div className="review-btns">
                    <select value={rating} onChange={(e)=>{setRating(e.target.value);}} name="rating" id="rating" required>
                        <option disabled>Rating</option>
                        <option value="1">&#11088;</option>
                        <option value="2">&#11088;&#11088;</option>
                        <option value="3">&#11088;&#11088;&#11088;</option>
                        <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
                        <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
                    </select>
                    <p id="submit-btn" onClick={handleAddReview}> Submit </p>
                </div>
            </div>
        </div>
     );
}
 
export default WriteReview;