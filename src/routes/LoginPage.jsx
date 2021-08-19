import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import backend from '../backend';
import Logo from '../components/Logo';
import { AuthContext } from '../context/AuthenticationContext';
import login_img from "../images/login.png";
const LoginPage = () => {
    const {isLogged,setLogged} = useContext(AuthContext);
    const history = useHistory();
    const handleLogIn = async()=>{
        let e_mail = document.getElementById("e_mail").value;
        let password = document.getElementById("password").value;
        const regex = /[A-Za-z0-9_\.]+@\w+\.[a-z]+/;
        if(e_mail === '' || password === ''){
            alert("Input fields can't be empty.");
            return false;
        }else if(!(regex.test(e_mail))){
            alert("Please Enter a valid mail.");
            return false;
        }else{
            const response = await backend.post("/auth/login",{e_mail,password});
            if(response.data.status === "success"){
                localStorage.setItem("token",response.data.token);
                setLogged(true);
                history.push("/");
            }else{
                alert(response.data.msg);
            }
        }
    }
    useEffect(()=>{
        // alert(isLogged);
        if(isLogged===true){
            history.push("/");
        }
        // alert(isLogged);
    },[]);
    const handleViewPassword=()=>{
        let password = document.getElementById("password");
        let eye = document.querySelector('.input-pass');
        eye.classList.replace('fa-eye-slash','fa-eye')
        if (password.type === 'password'){
            password.type = 'text';
        }else{
            eye.classList.replace('fa-eye','fa-eye-slash');
            password.type = 'password';
        }
        
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
                        <div className="login-password">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <i onClick={handleViewPassword} className="fas fa-eye-slash input-pass"></i>
                        </div>
                        <input type="submit" onClick={handleLogIn} value="Log In"/>
                        <p id="new-here">New Here? <Link to="/sign-up">sign-up instead!</Link></p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;