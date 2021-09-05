import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
    return ( 
        <Link style={{textDecoration:'none'}} to="/">
            <div className="logo">
                <p>Digital</p>
                <p>Library</p>
            </div>
        </Link>
     );
}
 
export default Logo;