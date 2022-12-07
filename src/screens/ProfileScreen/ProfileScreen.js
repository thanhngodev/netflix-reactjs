import React from "react";
import { useSelector } from "react-redux";
import "./ProfileScreen.css";
import { auth } from "../../services/firebase";
import Navbar from "../../components/Navbar/Navbar";
import { selectUser } from "../../features/userSlice";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="http://zoeice.com/assets/img/uploads/profile.png" alt="" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
