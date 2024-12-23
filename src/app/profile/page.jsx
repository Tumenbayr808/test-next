import React from "react";
import profileCss from "./profile.module.css";

const Profile = () => {
  return (
    <div className={profileCss.container}>
      <div>
        <a href="/">Go Back</a>
        <p>Profile page</p>
      </div>
    </div>
  );
};

export default Profile;
