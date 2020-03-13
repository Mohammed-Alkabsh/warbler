import React from "react";
import defaultProfileImage from "../images/user_default-image.jpg";

const UserAside = ({profileImageUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img src={profileImageUrl || defaultProfileImage} alt={username} className="img-thumbnail" />
            </div>
        </div>
    </aside>
)

export default UserAside;