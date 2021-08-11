import React from 'react';
import {NavLink} from "react-router-dom";
import LoginBtn from './LoginBtn';
import Logo from './Logo';
const Header = () => {
    return ( 
        <div className="header">
            <Logo/>
            <div className="nav">
                <p><NavLink style={{textDecoration:'none'}} exact to="/">Home</NavLink></p>
                <p><NavLink style={{textDecoration:'none'}} to="/books">Books</NavLink></p>
                <p><NavLink style={{textDecoration:'none'}} to="/about">About</NavLink></p>
                {/* <p><a href="/about">About</a></p> */}
            </div>
            <LoginBtn/>
        </div>
     );
}
 
export default Header;