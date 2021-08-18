import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import backend from '../backend';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import WriteReview from '../components/WriteReview';
const BookDetails = (props) => {
    const {id,book_name} = useParams();
    const history = useHistory();
    const [book,setBook] = useState();
    const fetchBook = async()=>{
        const response = await backend.get(`/api/book/${id}/details`);
        let book = response.data.data;
        setBook(book?book:"no book");
        // console.log(book);
    }
    useEffect(()=>{
        fetchBook();
        document.querySelector(".book-details-page").scrollIntoView();
    },[]);

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
                                <StarRating rating= {3.5}/> <span>(total_ratings)</span>
                            </div>
                            <div className="btns">
                                <p id="btn-read"><a rel="noreferrer" target="_blank" href={`https://archive.org/details/${book?book.online_link:null}?ref=ol&view=theater`}>Read Now</a></p>
                                <p id="btn-save">Add to Collections</p>
                            </div>
                            <p id="description">
                                <span>Description:</span> {book?book.book_description:null}
                            </p>
                        </div>
                    </div>
                    <WriteReview/>
                    <Reviews/>
                </div>
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default BookDetails;