import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthenticationContext';
import Book from '../Book';
const Collections = (props) => {
    const {saved_books} = useContext(AuthContext);
    return ( 
        <div className="collections">
            <h2>Your Collections</h2>
            <div className="saved_books">
                {saved_books.map((book,index)=>{return <Book id={book.book_id} key={index} name={book.book_name} img={book.book_img}/>})}
            </div>
        </div>
     );
}
 
export default Collections;