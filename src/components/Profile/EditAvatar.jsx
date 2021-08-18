import React, { useContext, useState } from 'react';
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
import avatar0 from '../../images/avatar-0.png'
import { AuthContext } from '../../context/AuthenticationContext';
import backend from '../../backend';
const EditAvatar = (props) => {
    const {user,setUser} = useContext(AuthContext);
    const avatars = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar0]
    const[image,setImage] =useState(user.user_pic);
    const selectAvatar= (img_id)=>{
        switch(img_id){
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
                return <img id="user_avatar" src={avatar0} alt="user_icon" />;
                break;
            default:
                return <img src={user_icon} style={{transform:'scale(0.9)'}} alt="user_icon" />;    
        }
    }
    const handleSelect = (e)=>{
        let index = e.target.src.indexOf('avatar')
        let id = e.target.src.slice(index+7,index+8);
        // console.log(id);
        setImage(Number(id));
    }
    const handleSave = async()=>{
        const response = await backend.put('/auth/user/profile/avatar',{id:user.user_id,avatar:image})
        // console.log(response.data);
        setUser(response.data.data);
    }
    return ( 
        <div className="edit-avatar">
            {selectAvatar(image)}
            <div className="available-avatars">
                {avatars.map((avatar,index)=>{return <img key={index} src={avatar} onClick={(e)=>{handleSelect(e)}}  alt="user_icon" /> })}
            </div>
            <div className="save-btns">
                <p onClick={()=>{setImage(null)}}>Remove Avatar</p>
                <p onClick={handleSave}>Save</p>
            </div>
        </div>
     );
}
 
export default EditAvatar;