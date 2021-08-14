import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../components/Logo';
import login_img from "../images/login.png";
const LoginPage = () => {
    const history = useHistory();
    const handleLogIn = ()=>{
        history.push("/");
    }
    return ( 
        <div className="login-page-container">
            <div className="login-page">
                <img src={login_img} alt="person unlocking a lock"/>
                <div className="login-form">
                    <form onSubmit={(e)=>{e.preventDefault();}} autoComplete="off">
                        <p id="welcome">Welcome Back!</p>
                        <Logo/>
                        <h2>Login to your account</h2>
                        <input type="email" name="e_mail" id="e_mail" placeholder="E-Mail" />
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <input type="submit" onClick={handleLogIn} value="Log In"/>
                        <p id="new-here">New Here? <Link to="/sign-up">sign-up instead!</Link></p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;