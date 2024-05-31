import React, { useContext, useState } from "react";
import "../CSS_files/movie-main.css";
import NavBar from "../Components/NavBar";
import HorizontalScroller from "../Components/HorizontalScroller";
import VideoWrapper from "../Components/VideoWrapper";
import Sidebar from "../Components/Sidebar";
import VideoDetails from "../Components/VideoDetails";
import UserContext from "../context/UserContext";
const MoviePage = () => {
  const {title} = useContext(UserContext);
  const {thumbnail} = useContext(UserContext);
  console.log(title);
  console.log(thumbnail);
    return (
      <div>
        <NavBar />
        <HorizontalScroller />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div>
            <VideoWrapper />
          </div>
        </div>
      </div>
    );
  

 
  
};

export default MoviePage;
