import React from 'react';
import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';
const HBtns = (props) => {
    return ( 
        <div className="header-btns">
            <LoginBtn/>
            <p id="or">/</p>
            <SignUpBtn/>
        </div>
     );
}
 
export default HBtns;