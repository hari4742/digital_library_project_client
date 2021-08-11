import React from 'react';
import displayImg from '../images/people_reading_books.jpg'
const DisplayHome = () => {
    return ( 
        <div className="display-home">
            <div className="display-text">
                <h1>Lorem Ipsum</h1>
                <span>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <p>adipisicing elit. Nulla, hic.</p>
                </span>
            </div>
            <div className="display-img">
                <img src={displayImg} alt="people_reading_books"/>
            </div>
        </div>
     );
}
 
export default DisplayHome;