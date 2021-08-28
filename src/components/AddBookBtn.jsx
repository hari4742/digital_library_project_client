import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthenticationContext';
const AddBookBtn = (props) => {
    const history = useHistory();
    const {user} = useContext(AuthContext);
    const handleAddBook = ()=>{
        // console.log(user);
        if (user.isadmin === "true"){
            history.push(`/admin/${user.user_id}/add/book`);
        }
    }
    return ( 
        <div className="add-book-btn" onClick={handleAddBook}>
            Add Book
        </div>
     );
}
 
export default AddBookBtn;