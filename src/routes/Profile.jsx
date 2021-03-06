import React, { Fragment, useContext, useEffect} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {BrowserRouter as Router,Switch,Route, useLocation, Link,NavLink, useHistory} from "react-router-dom";
import ProfileImg from '../components/Profile/ProfileImage';
import { AuthContext } from '../context/AuthenticationContext';
import ProfileSettingDisplay from '../components/Profile/ProfileSettingDisplay';
import EditAvatar from '../components/Profile/EditAvatar';
import UpdateInfo from '../components/Profile/UpdateInfo';
import Collections from '../components/Profile/Collections';
import UserReview from '../components/Profile/UserReview';
import backend from '../backend';

const Profile = (props) => {
    
    const location = useLocation();
    const history = useHistory();
    const {user,setLogged,setUser,saved_books,setSavedBooks}=useContext(AuthContext);

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
                    if(user.user_id){
                        const saved = await backend.get(`/auth/user/${user.user_id}/profile/get/saved_books`);
                        // console.log(saved.data);
                        setSavedBooks(saved.data.data);
                        // console.log(saved_books);
                    }
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
    useEffect(()=>{
        fetchUser();
        document.querySelector(".profile-page").scrollIntoView();
    },[]);
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
                                <Link style={{textDecoration:"none"}} to={`${location.pathname}edit_avatar`}><i className="fas fa-pen"></i></Link>
                                
                                <p>{user.f_name} {user.l_name}</p>
                                <hr />
                                <div className="nav-opt">
                                    <NavLink style={{textDecoration:"none"}} activeClassName="setting-selected" to={`${location.pathname}personal_details`}>Personal Details</NavLink>
                                    <NavLink style={{textDecoration:"none"}} activeClassName="setting-selected" to={`${location.pathname}collections`}>Collections({saved_books.length})</NavLink>
                                    <NavLink style={{textDecoration:"none"}} activeClassName="setting-selected" to={`${location.pathname}reviews`}>Your Reviews</NavLink>
                                </div>
                                <p id="logout" onClick={handleLogOut}> Log Out</p>
                            </div>
                        </div>
                            <Switch>
                                <Route exact path={`${location.pathname}`} component={ProfileSettingDisplay}/>
                                <Route exact path={`${location.pathname}edit_avatar`} component={EditAvatar}/>
                                <Route exact path={`${location.pathname}personal_details`} component={UpdateInfo}/>
                                <Route exact path={`${location.pathname}collections`} component={Collections}/>
                                <Route exact path={`${location.pathname}reviews`} component={UserReview}/>
                            </Switch>
                    </Router>
            </div>
                <Footer/>
        </Fragment>
     );
}
 
export default Profile;