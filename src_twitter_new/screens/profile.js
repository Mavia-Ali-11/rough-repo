import React from 'react';
import Sidebar from "../components/sidebar";
import Widgets from "../components/widgets";
import UserInfo from "../components/user-info";

function Profile() {
    return (
        <div className="mainParent">
            <Sidebar scrIndex="2" scrName="Profile" />
            <div>
                <UserInfo scrName="Profile" />
                <Widgets />
            </div>
        </div>
    )
}

export default Profile;