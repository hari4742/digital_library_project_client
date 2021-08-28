import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import backend from '../backend';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import WriteReview from '../components/WriteReview';
import { AuthContext } from '../context/AuthenticationContext';
const BookDetails = (props) => {
    const {id,book_name} = useParams();
    const history = useHistory();
    const {isLogged,user,saved_books,setSavedBooks,setLogged,setUser} = useContext(AuthContext);
    const [book,setBook] = useState();
    const [reviews,setReviews] = useState([]);
    const fetchBook = async()=>{
        const response = await backend.get(`/api/book/${id}/details`);
        let book = response.data.data;
        setBook(book?book:"no book");
        // console.log(book);
    }
    const fetchReviews = async()=>{
        const responce = await backend.get(`/review/get/book/${id}`);
        setReviews(responce.data.data);
        // console.log(responce.data.data);
    }
    const fetchUser = async()=>{
        let token = localStorage.getItem("token");
        // console.log(token);
        if(token){
            const response = await backend.post("/auth/verify",{},{headers:{token}});
            if(response.data.status === "success"){
                setLogged(true);
                const userInfo = await backend.get(`/auth/user/${response.data.user_id}`);
                if(userInfo.data.status === "success"){
                    setUser(userInfo.data.data);
                    if(user.user_id){
                        const saved = await backend.get(`/auth/user/${user.user_id}/profile/get/saved_books`);
                        // console.log(saved.data);
                        setSavedBooks(saved.data.data);
                        // console.log(saved_books);
                    }
                }else{
                    alert(userInfo.data.msg)
                }
                // alert(response.data.user_id);
            }else{
                setLogged(false);
                alert(response.data.msg);
            }
        }
    }
    useEffect(()=>{
        fetchUser();
        fetchBook();
        fetchReviews();
        document.querySelector(".book-details-page").scrollIntoView();
    },[]);
    // useEffect(()=>{
    //     fetchReviews();
    // },[reviews]);
    const handleAddCollection = async()=>{
        if(isLogged){
            const response = await backend.post("/auth/user/profile/add/book",{user_id:user.user_id,book_id:id});
            if (response.data.status === 'success'){
                alert(`${book_name} is added to your collection.`);
                setSavedBooks([...saved_books,{book_id:id,book_img:response.book_img,book_name}])   
            }
        }else{
            alert("Please Log In to add!");
        }
    }
    const [button,setButton] = useState(<p id="btn-save" onClick={handleAddCollection}>Add to Collections</p>);
    const handleRemoveCollection = async ()=>{
        const response = await backend.delete(`/auth/user/${user.user_id}/profile/remove/book/${id}`);
        if(response){
            const saved = await backend.get(`/auth/user/${user.user_id}/profile/get/saved_books`);
            // console.log(saved.data);
            setSavedBooks(saved.data.data);
            setButton(<p id="btn-save" onClick={handleAddCollection}>Add to Collections</p>);
            alert(`${book_name} has been removed from collections`);
        }
    }
    useEffect(()=>{
        for (let book of saved_books){
            if(book.book_id === id){
                setButton(<p id="remove-book" onClick={handleRemoveCollection}>Remove from Collections</p>);
                // console.log("uee");
            }
        }
    },[]);
    useEffect(()=>{
        for (let book of saved_books){
            if(book.book_id === id){
                setButton(<p id="remove-book" onClick={handleRemoveCollection}>Remove from Collections</p>);
                // console.log("ues")
            }
        }
    },[saved_books]);
    window.onload = ()=>{
        for (let book of saved_books){
            if(book.book_id === id){
                setButton(<p id="remove-book" onClick={handleRemoveCollection}>Remove from Collections</p>);
                // console.log('window on load')
            }
        }
    }
    return ( 
        <Fragment>
            <Header/>
            <div className="book-details-page">
                <div className="back-btn">
                {/* <span class="fas fa-angle-double-left"></span> */}
                {/* <i class="fas fa-arrow-alt-circle-left"></i> */}
                <i onClick={()=>{history.goBack()}} className="fas fa-arrow-left"></i>
                <p onClick={()=>{history.goBack()}}id="back-btn">Back</p>
                </div>
                <div className="book-details">
                    <div className="book-details-content">
                        <div className="content-img-box">
                            <img src={`https://covers.openlibrary.org/b/id/${book?book.book_img:null}-L.jpg`} alt={`${book_name}_cover_page}`}/>
                        </div>
                        <div className="details">
                            <p id="title">{book?book.book_name:null}</p>
                            <p><span>Author:</span> {book?book.author:null}</p>
                            <p><span>Genre:</span> {book?book.category:null}</p>
                            <div className="star-rating">
                                <StarRating rating= {book?book.avg_rating:null}/> <span>({book?book.total_reviews:null})</span>
                            </div>
                            <div className="btns">
                                <p id="btn-read"><a rel="noreferrer" target="_blank" href={`https://archive.org/details/${book?book.online_link:null}?ref=ol&view=theater`}>Read Now</a></p>
                                {button}
                                {/* <p id="remove-book" onClick={handleRemoveCollection}>Remove from Collections</p><p id="btn-save" onClick={handleAddCollection}>Add to Collections</p> */}
                            </div>
                            <p id="description">
                                <span>Description:</span> {book?book.book_description:null}
                            </p>
                        </div>
                    </div>
                    <WriteReview user_id={user?user.user_id:null} book_id={id} fetchBook={fetchBook} fetchReviews={fetchReviews} />
                    <Reviews reviews={reviews}/>
                </div>
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default BookDetails;