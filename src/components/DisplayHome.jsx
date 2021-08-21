import React from 'react';
import displayImg from '../images/people_reading_books.jpg'
const DisplayHome = () => {
    return ( 
        <div className="display-home">
            <div className="display-text">
                <h1>BOOKS  24/7</h1>
                <span>
                    <p>A Reader lives a thousand lives before</p>
                    <p>he dies.</p>
                </span>
            </div>
            <div className="display-img">
                <img src={displayImg} alt="people_reading_books"/>
            </div>
        </div>
     );
}
 
export default DisplayHome;