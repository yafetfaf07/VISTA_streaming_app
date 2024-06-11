import React from "react";
import "../assets/CSS_files/movie-main.css"

import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="side-bar">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div>
        <div onClick={() => {
              navigate('/');
          }}>
          <span class="material-symbols-outlined">home</span>
          <span>Home</span>
        </div>
        <div>
          <span class="material-symbols-outlined">browse</span>
          <span>Browse</span>
        </div>
        <div>
          <span class="material-symbols-outlined">trending_up</span>
          <span>Trending</span>
        </div>
        <div>
          <span class="material-symbols-outlined">schedule</span>
          <span>
            Watch <br></br> later
          </span>
        </div>
        <div onClick={() => {
          navigate('/history');
        }}>
          <span class="material-symbols-outlined">history</span>
          <span>History</span>
        </div>
      </div>
      <div>
        <span class="material-symbols-outlined">light_mode</span>
      </div>
    </div>
  );
};

export default Sidebar;
