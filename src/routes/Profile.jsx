import React, { Component, Fragment, useContext, useEffect, useReducer } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {BrowserRouter as Router,Switch,Route, useLocation, Link,NavLink, useHistory} from "react-router-dom";
import ProfileImg from '../components/Profile/ProfileImage';
import { AuthContext } from '../context/AuthenticationContext';
import ProfileSettingDisplay from '../components/Profile/ProfileSettingDisplay';
import EditAvatar from '../components/Profile/EditAvatar';

const Profile = (props) => {
    const location = useLocation();
    const history = useHistory();
    const {user,setLogged,setUser}=useContext(AuthContext);
    useEffect(()=>{
        document.querySelector(".profile-page").scrollIntoView();
    },[])
    const handleLogOut = ()=>{
        localStorage.removeItem("token");
        setUser({});
        setLogged(false);
        history.replace('/');
    }
    return ( 
        <Fragment>
                <Header/> 
            <div className="profile-page">
                    <Router>
                        <div className="profile-content">
                            <div className="profile-nav">
                                <Link style={{textDecoration:"none"}} to={`${location.pathname}`}><ProfileImg/></Link>
                                <Link style={{textDecoration:"none"}} to={`${location.pathname}edit_avatar`}><i class="fas fa-pen"></i></Link>
                                
                                <p>{user.f_name} {user.l_name}</p>
                                <hr />
                                <div className="nav-opt">
                                    <NavLink style={{textDecoration:"none"}} activeClassName="setting-selected" to={`${location.pathname}/personal_details`}>Personal Details</NavLink>
                                    <NavLink style={{textDecoration:"none"}} activeClassName="setting-selected" to={`${location.pathname}/collections`}>Collections</NavLink>
                                    <NavLink style={{textDecoration:"none"}} activeClassName="setting-selected" to={`${location.pathname}/reviews`}>Your Reviews</NavLink>
                                </div>
                                <p id="logout" onClick={handleLogOut}> Log Out</p>
                            </div>
                        </div>
                            <Switch>
                                <Route exact path={`${location.pathname}`} component={ProfileSettingDisplay}/>
                                <Route exact path={`${location.pathname}edit_avatar`} component={EditAvatar}/>

                            </Switch>
                    </Router>
            </div>
                <Footer/>
        </Fragment>
     );
}
 
export default Profile;