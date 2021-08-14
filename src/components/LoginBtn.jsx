import React from 'react';
import { Link } from 'react-router-dom';
const LoginBtn = () => {
    return ( 
        <Link style={{textDecoration:'none'}}  to="/login">
            <div className="login-btn" >
                <i className="fas fa-user"></i>
                <p>Login</p>
            </div>
        </Link>
     );
}
 
export default LoginBtn;