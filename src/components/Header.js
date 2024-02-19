import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        // navigate("/error")
      });
  };

  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netfilx_Logo"
      />
      <div className="flex">
        <img
          className="w-12 h-12"
          src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
          alt="user_icon"
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
