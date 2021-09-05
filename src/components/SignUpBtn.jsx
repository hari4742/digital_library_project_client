import React from 'react';
import { Link } from 'react-router-dom';
const SignUpBtn = (props) => {
    return ( 
        <Link style={{textDecoration:'none'}} to="/sign-up">
            <div className="sign-up-btn">
                <i className="fas fa-sign-in-alt"></i>
                <p>Sign In</p>
            </div>
        </Link>
     );
}
 
export default SignUpBtn;