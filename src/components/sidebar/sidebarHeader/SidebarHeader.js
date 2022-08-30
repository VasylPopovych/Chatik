import React, { useContext } from "react";
import classes from "./sidebarHeader.module.scss";
import guest_avatar from "../../../assets/guest_avatar.jpg";
import VerificationIcon from "../../common/verificationIcon/VerificationIcon";
import { Context } from "../../..";
import { useAuthState } from "react-firebase-hooks/auth";

const SidebarHeader = () => {
  const { firebaseAuth } = useContext(Context);
  const [user] = useAuthState(firebaseAuth);

  const logout = () => {
    firebaseAuth.signOut();
    localStorage.removeItem("logedAsGuest");
    window.location.reload();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>
        {user ? <img src={user.photoURL} alt="avatar" /> : <img src={guest_avatar} alt="avatar" />}
        <VerificationIcon />
      </div>
      <div className={classes.logout_button} onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default SidebarHeader;
