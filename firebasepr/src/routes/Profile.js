import { signOut, getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom"

function Profile() {
  const navigate = useNavigate();
  const onLogoutButton = () => {
    const auth = getAuth();
    signOut(auth);
    navigate("/")
  }
  return (
    <div>
      Profile
      <button onClick={onLogoutButton}>Log out</button>
    </div>
  );
}

export default Profile;
