import React from "react";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import logo from "../assets/images/Logo-removebg-preview.png";
import "../assets/CSS_files/movie-main.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <div className="logos">
        <img src={logo} alt="" />
        <h2>Mumble</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="Search movies" />
      </div>
      {}
      <div className="interaction">
        <span class="material-symbols-outlined" onClick={() => {
          navigate('/videoupload');
        }}>videocam</span>
        <LoginButton />
        <Profile />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default NavBar;
