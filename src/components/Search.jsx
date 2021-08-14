import React from 'react';
const Search = (props) => {
    return ( 
        <div className="books-search">
            <input onChange={(e)=>{props.handleSearch(e)}} value={props.value} type="search" name="search" id="search" placeholder="Search for book . . ." />
            <i className="fas fa-search"></i>
        </div>
     );
}
 
export default Search;