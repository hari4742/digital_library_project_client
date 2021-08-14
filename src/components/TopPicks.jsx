import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
const TopPicks = (props) => {
    return ( 
        <div className="top-picks">
            <h2>Top Picks</h2>
            <div className="top-picks-books">
                {props.top3.map((book,index)=>{return <Book key={index} id={book.book_id} img={book.img} name={book.title}/>})}
            </div>
            <p><Link to="/books" style={{textDecoration:'none',color:"white"}}> More Books</Link></p>
        </div>
     );
}
 
export default TopPicks;