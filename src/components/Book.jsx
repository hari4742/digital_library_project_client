import React from 'react';
import { useHistory } from 'react-router-dom';
const Book = (props) => {
    let history = useHistory();
    const handleClick = ()=>{
        history.push(`/books/book/${props.id}/details/${props.name}`);
    }
    return ( 
        <div className="book" onClick={handleClick}>
            <div className="img-box">
                <img src={`https://covers.openlibrary.org/b/id/${props.img}-L.jpg`} alt="some pic"/>
            </div>
            <div className="text-box">
                <h3>
                    {props.name}
                </h3>
            </div>
        </div>
     );
}
 
export default Book;