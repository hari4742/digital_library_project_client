import React, { useContext, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import backend from '../backend';
import { AuthContext } from '../context/AuthenticationContext';
import LoginBtn from './LoginBtn';
import Logo from './Logo';
import ProfileBtn from './Profile/ProfileBtn';
const Header = () => {
    
    const {isLogged,setLogged,setUser,user} = useContext(AuthContext);
    useEffect(()=>{
        const fetchUser = async()=>{
            let token = localStorage.getItem("token");
            // console.log(token);
            if(token){
                const response = await backend.post("/auth/verify",{},{headers:{token}});
                if(response.data.status === "success"){
                    setLogged(true);
                    const userInfo = await backend.get(`/auth/user/${response.data.user_id}`);
                    if(userInfo.data.status === "success"){
                        setUser(userInfo.data.data);
                        // console.log(user);
                    }else{
                        alert(userInfo.data.msg)
                    }
                    // alert(response.data.user_id);
                }else{
                    setLogged(false);
                    alert(response.data.msg);
                }
            }
        }
        fetchUser();
    },[]);
    return ( 
        <div className="header">
            <Logo/>
            <div className="nav">
                <p><NavLink style={{textDecoration:'none'}} exact to="/">Home</NavLink></p>
                <p><NavLink style={{textDecoration:'none'}} to="/books">Books</NavLink></p>
                <p><NavLink style={{textDecoration:'none'}} to="/about">About</NavLink></p>
                {/* <p><a href="/about">About</a></p> */}
            </div>
            {isLogged?<ProfileBtn/>:<LoginBtn/>}
            {/* <LoginBtn/> */}
        </div>
     );
}
 
export default Header;