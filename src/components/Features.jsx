import React from 'react';
import FeatureCard from './FeatureCard';
import read_book from '../icons/open-book.png';
import book from '../icons/book.png';
import rating from '../icons/rating.png'
const Features = () => {
    return ( 
        <div className="features">
            <h1>Features</h1>
            <div className="feature-cards">
                <FeatureCard feature="Read Online" img={read_book} details="You can read those books online with out need to download them."/>
                <FeatureCard feature="Add to Collection" img={book} details="Save the books that you like and read them later."/>
                <FeatureCard feature="Reviews" img={rating} details=" Give reviews and rating for books that you read which help other to pick."/>
            </div>
        </div>
     );
}
 
export default Features;