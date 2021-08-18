import React from 'react';
import displayImg from '../../images/profile_setting.png'
const ProfileSettingDisplay = (props) => {
    return ( 
        <div className="profile-setting-display">
            <h2>Profile Settings</h2>
            <img src={displayImg} alt="woman setting a profile"/>
        </div>
     );
}
 
export default ProfileSettingDisplay;