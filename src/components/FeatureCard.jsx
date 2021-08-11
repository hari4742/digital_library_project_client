import React from 'react';
const FeatureCard = (props) => {
    return ( 
        <div className="feature-card">
            <img src={props.img} alt="icon" />
            {/* <i class="fas fa-book-reader"></i> */}
            <h1>{props.feature}</h1>
            <hr />
            <p>{props.details}</p>
        </div>
     );
}
 
export default FeatureCard;