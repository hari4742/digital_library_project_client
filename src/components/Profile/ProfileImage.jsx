import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthenticationContext';
import user_icon from '../../icons/user.png'
import avatar1 from '../../images/avatar-1.png'
import avatar2 from '../../images/avatar-2.png'
import avatar3 from '../../images/avatar-3.png'
import avatar4 from '../../images/avatar-4.png'
import avatar5 from '../../images/avatar-5.png'
import avatar6 from '../../images/avatar-6.png'
import avatar7 from '../../images/avatar-7.png'
import avatar8 from '../../images/avatar-8.png'
import avatar9 from '../../images/avatar-9.png'
import avatar10 from '../../images/avatar-0.png'

const ProfileImg = (props) => {
    const {user} = useContext(AuthContext);
    const selectAvatar= (avatar_id)=>{
        switch(avatar_id){
            case 1:
                return <img id="user_avatar" src={avatar1} alt="user_icon" />;
                break;
            case 2:
                return <img id="user_avatar" src={avatar2} alt="user_icon" />;
                break;
            case 3:
                return <img id="user_avatar" src={avatar3} alt="user_icon" />;
                break;
            case 4:
                return <img id="user_avatar" src={avatar4} alt="user_icon" />;
                break;
            case 5:
                return <img id="user_avatar" src={avatar5} alt="user_icon" />;
                break;
            case 6:
                return <img id="user_avatar" src={avatar6} alt="user_icon" />;
                break;
            case 7:
                return <img id="user_avatar" src={avatar7} alt="user_icon" />;
                break;
            case 8:
                return <img id="user_avatar" src={avatar8} alt="user_icon" />;
                break;
            case 9:
                return <img id="user_avatar" src={avatar9} alt="user_icon" />;
                break;
            case 0:
                return <img id="user_avatar" src={avatar10} alt="user_icon" />;
                break;
            default:
                return <img src={user_icon} style={{transform:'scale(0.9)'}} alt="user_icon" />;    
        }
    }
    return ( 
        <div className="profile-img">
            {selectAvatar(props.avatar_id?props.avatar_id:user.user_pic)}
        </div>
     );
}
 
export default ProfileImg;