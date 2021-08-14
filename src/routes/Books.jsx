import React, { Fragment, useEffect, useState } from 'react';
import Book from '../components/Book';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import backend from '../backend';
const Books = () => {
    let categories = ["Art","Biography","Fantasy","Mathematics","Science","Science Fiction","Story"]
    const [books,setBooks] = useState();
    const [search,setSearch] = useState();
    const fetchBooks = async()=>{
        const response = await backend.get("/api/books");
        // console.log(response.data.data);
        let books = response.data.data?response.data.data:[];
        setBooks(books);
    }
    useEffect(()=>{
        fetchBooks();
    },[])
    const handleCategory= async(e)=>{
        let categories = document.getElementsByClassName('category');
        // e.target.classList.add("catergory-selected");
        for (let element of categories){
            if(element.innerText === e.target.innerText){
                element.classList.add("catergory-selected");
                // console.log(element);
            }else{
                element.classList.remove("catergory-selected");
            }
        }
        // console.log(e.target.innerText.toLocaleLowerCase());
        if(e.target.innerText === 'All'){
            fetchBooks();
        }else{
            const response = await backend.get(`/api/search/category?category=${e.target.innerText}`);
            let books = response.data.data;
            // console.log(books);
            setBooks(books?books:[]);
        }
    }
    const handleSearch = async(e)=>{
        setSearch(e.target.value);
        const response = await backend.get(`/api/search?q=${e.target.value}`);
        let books = response.data.data;
        setBooks(books?books:[]);
    }
    return ( 
        <Fragment>
            <Header/>
            <div className="books-page">
                <div className="books-categories">
                    <h3>Category</h3>
                    <hr />
                    <ul>
                    <li className="category catergory-selected" onClick={(e)=>{handleCategory(e)}}>All</li>
                        {categories.map((category,index)=>{return <li key={index} className="category" onClick={(e)=>{handleCategory(e)}}>{category}</li>})}
                    </ul>
                </div>
                <div className="books-container">
                    <Search search={search} handleSearch={handleSearch}/>
                    <p id="count">({books?books.length:0} books)</p>
                    <div className="books">
                        {books&&books.map((book,index)=>{
                            return <Book id={book.book_id} key={index} name={book.book_name} img={book.book_img}/>
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default Books;