import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../components/Logo';
import signup_img from '../images/sign_up_high.png';
const SingUp = () => {
    let history = useHistory();
    const handleSignUP = ()=>{
        history.push("/");
    }
    return ( 
        <div className="signup-page-container">
            <div className="signup-page">
                <div className="img-box">
                    <img src={signup_img} alt="women_signing_up" />
                </div>
                <div className="signup-form">
                    <form onSubmit={(e)=>{e.preventDefault();}} autoComplete="off">
                        <p id="welcome-signup">Welcome !</p>
                        <Logo/>
                        <h2>Create New Account</h2>
                        <div className="full-name">
                            <input type="text" name="first_name" id="first_name" placeholder="First Name" />
                            <input type="text" name="last_name" id="last_name" placeholder="Last Name" />
                        </div>
                        <input type="email" name="e_mail" id="e_mail" placeholder="E-mail" />
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <input type="password" name="password_retype" id="password_retype" placeholder="Re-enter Password" />
                        <input type="submit" value="Sign Up" onClick={handleSignUP} />
                        <p> Already a user? <Link to="/login">Log in Instead!</Link></p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default SingUp;