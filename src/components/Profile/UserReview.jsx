import React, { useContext, useEffect, useState } from 'react';
import backend from '../../backend';
import { AuthContext } from '../../context/AuthenticationContext';
import UserReviewCard from './UserReviewCard';
const UserReview = (props) => {
    const {user} = useContext(AuthContext);
    const [userReviews,setUserReviews] = useState([]);
    const fetchUserReviews = async()=>{
        const response = await backend.get(`/review/get/user/${user.user_id}`);
        setUserReviews(response.data.data);
        // console.log(response.data.data)
    }
    useEffect(()=>{
        fetchUserReviews();
    },[])

    const handleNoReviews = ()=>{
        if (userReviews.length === 0){
            return <p>No reviews yet. Write reviews and help other to chose a book...</p>
        }
    }
    return ( 
        <div className="user-reviews-page">
            <h2>Your Reviews</h2>
                {handleNoReviews()}
            <div className="user-reviews">
                {userReviews.map((userReview,index)=>{return <UserReviewCard key={index} book_name={userReview.book_name} rating={userReview.rating} review={userReview.review} user_id={user.user_id}  review_id = {userReview.review_id} fetchUserReviews={fetchUserReviews} />})}
                {/* <UserReviewCard/> */}
            </div>
        </div>
     );
}
 
export default UserReview;