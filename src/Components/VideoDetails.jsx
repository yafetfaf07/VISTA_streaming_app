import React, { useContext, useRef, useState } from "react";
import UserContext from "../context/UserContext";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import "../assets/CSS_files/video-details.css";
import thumbnailpic from "../assets/images/backgroundImage.webp";
import randomVideo from "../assets/videos/API.mp4"
import RecommendedVideos from "./RecommendedVideos";
const VideoDetails = () => {
  const { title } = useContext(UserContext);
  const { thumbnail } = useContext(UserContext);
  const videoRef = useRef(null);
  const [duration, setduration] = useState(null);
  console.log(title);
  console.log(thumbnail);

  const onloadedData = () => {
    setduration(videoRef.current.duration);
    console.table("Duration",formatDuration(duration));
    console.log(videoRef)
    
  }

  function formatDuration(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
  
    let formattedTime = "";
    if (hours > 0) {
      formattedTime += hours + ":";
    }
    formattedTime += minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    return formattedTime;
  }

  

  return (
    <div>

      <NavBar />
      <div className="video-detail-wrapper">
        <Sidebar />
        <main>
        <div className="left">
          <div className="thumbnail-wrapper">
            <video
              src={randomVideo}
              controls
              poster={thumbnailpic}
              className="video-thumbnail"
              ref={videoRef}
              // onLoadedMetadata={() => {
              //   onloadedData();
              // }}
            ></video>

          </div>
          <h2 onClick={() => {
            onloadedData();
          }} className="video-details-title">{title}</h2>

          <div className="channel-descriptions">
            <div className="first-div">
              <div>
                <img src={thumbnailpic} alt="channel-logo" className="channel-logo"/>
              </div>
              <div className="channel-details">
                <span>Movie Clips</span>
                <span>5K followers</span>
              </div>
            </div>

            <div className="follow">
              <span>Follow</span>
            </div>

            <div className="like">
              <span>Like </span>
              <span>Dislike</span>
            </div>

            <div className="comments">
              <span>Comments</span>
            </div>

            <div className="Share">
              <span>Share</span>
            </div>

            <div className="Save">
              <span>Save</span>
            </div>
          </div>

          
            
            </div>
        <div className="right">
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />

        </div>
          

        </main>
        {/* <span style={{ color: "yellow", fontSize: "5rem" }}>{thumbnail}</span> */}
      </div>
    </div>
  );
};

export default VideoDetails;
