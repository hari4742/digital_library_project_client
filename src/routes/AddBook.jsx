import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import backend from '../backend';
const AddBook = (props) => {
    const history = useHistory();
    const [bookName,setBookName] = useState("");
    const [bookAuthor,setBookAuthor] = useState("");
    const [category,setCategory] = useState("Category");
    const [bookImg,setBookImg] = useState("");
    const [onlineLink,setOnlineLink] = useState("");
    const [bookDescription,setDescription] = useState("");
    const  handleSaveBook = async ()=>{
        if(bookName === "" || bookAuthor === "" || category === "Category" || bookImg === "" || onlineLink === "" || bookDescription === ""){
            alert(" Input Fields can't be empty.. ");
            return;
        }else{
            const response = await backend.post("/api/books/add",{book_name:bookName,author:bookAuthor,category:category,book_img:bookImg,online_link:onlineLink,book_description:bookDescription});
            if(response.data.status === "success"){
                alert("Book is successfully added!..");
                // console.log(response.data);
                setBookName("");
                setBookImg("");
                setBookAuthor("");
                setCategory("Category");
                setDescription("");
                setOnlineLink("");
            }else{
                alert(response.data.msg);
            }
        }
    }
    return ( 
        <div className="add-book">
            <h1>Add a Book</h1>
            <form onSubmit={(e)=>{e.preventDefault();}}>
                <input onChange={(e)=>{setBookName(e.target.value);}} type="text" name="book_name" id="book_name" placeholder="Book Name" value={bookName} />
                <input onChange={(e)=>{setBookAuthor(e.target.value);}} type="text" name="author" id="author" placeholder="Book Author" value={bookAuthor} />
                <select onChange={(e)=>{setCategory(e.target.value);}} name="categorty" id="category" value={category}>
                    <option value="Category" disabled>Category</option>
                    <option value="Art">Art</option>
                    <option value="Biography">Biography</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Story">Story</option>
                    <option value="Science Fiction">Science Fiction</option>
                </select>
                <input onChange={(e)=>{setBookImg(e.target.value);}} type="number" name="book_img" id="book_img" placeholder="Book Cover Number" value={bookImg} />
                <input onChange={(e)=>{setOnlineLink(e.target.value);}} type="text" name="online_link" id="online_link" placeholder="Online link" value={onlineLink} />
                <textarea onChange={(e)=>{setDescription(e.target.value);}} name="book_description" id="book_description" cols="50" rows="3" placeholder="Book Description" value={bookDescription}></textarea>

            </form>
            <div className="add-book-btns">
                <p onClick={()=>{history.goBack();}}><i className="fas fa-arrow-left"></i>Back</p>
                <p onClick={handleSaveBook}>Save</p>
            </div>
        </div>
     );
}
 
export default AddBook;