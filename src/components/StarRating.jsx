import React from 'react';
import {v4 as uuid} from 'uuid';

export default function StarRating ({rating}){
    let stars = [];
    if (rating == Math.ceil(rating) || rating == null){
        for(let i=1;i<=rating;i++){
            stars.push(<i key={uuid()} className="fas fa-star"></i>);
        }
        for (let i=rating+1;i<=5;i++){
            stars.push(<i key={uuid()} className="far fa-star"></i>)
        }
    }else{
        for (let i=1;i<Math.ceil(rating);i++){
            stars.push(<i key={uuid()} className="fas fa-star"></i>);
        }
        stars.push(<i key={uuid()} className="fas fa-star-half-alt"></i>);
        for (let i=Math.ceil(rating)+1;i<=5;i++){
            stars.push(<i key={uuid()} className="far fa-star"></i>)
        }
    }
    return(
        <>
            {stars}
        </>
    )
}