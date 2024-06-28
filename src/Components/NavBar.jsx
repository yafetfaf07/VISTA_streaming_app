import React from "react";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import logo from "../assets/images/Logo-removebg-preview.png";
import "../assets/CSS_files/movie-main.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const navigate = useNavigate();
  const {loginWithRedirect, isAuthenticated} = useAuth0()
  return (
    <nav className="nav-bar">
      <div className="logos">
        <img src={logo} alt="" onClick={ () => {
          navigate('/');
        }}/>
        <h2>Mumble</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="Search movies" />
      </div>
      {}
      <div className="interaction">
        <span class="material-symbols-outlined" onClick={() => {
          if(!isAuthenticated) {
            loginWithRedirect();
          }
          else {
            navigate('/videoupload');

          }
        }}>person_add</span>
        <LoginButton />
        <Profile />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default NavBar;
