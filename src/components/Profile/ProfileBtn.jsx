import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthenticationContext';
import ProfileImg from './ProfileImage';
const ProfileBtn = (props) => {
    const history = useHistory();
    const {user} = useContext(AuthContext);
    const handleClick = ()=>{
        history.push(`/user/${user.user_id}/profile/${user.f_name} ${user.l_name}`);
    }
    return ( 
        <div className="profile-btn" onClick={handleClick}>
            <span>
                <ProfileImg/>
                <p>{user.f_name}</p>
            </span>
            <i className="fas fa-bars"></i>
        </div>
     );
}
 
export default ProfileBtn;