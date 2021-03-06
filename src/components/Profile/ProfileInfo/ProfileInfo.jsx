import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  let me = props.userData[0];

  return (
    <div>
      {/* <div>
        <img src='./img/profile_wallpaper.jpg' className={classes.profimg} />
      </div> */}
      <div className={classes.usrInfo}>
        <div className={classes.usrAvaName}>
          <img src={me.avatar} className={classes.usrAvatarImage} alt="alt" />
          <span className={classes.usrName}>
            {me.fullname}
            {/* <div className={classes.usrDescription}>The best man in the world!!!</div> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
