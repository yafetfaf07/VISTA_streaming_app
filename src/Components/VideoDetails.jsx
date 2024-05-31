import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import "../CSS_files/video-details.css";
import thumbnailpic from "../assets/images/backgroundImage.webp";
import randomVideo from "../assets/videos/API.mp4";
const VideoDetails = () => {
  const { title } = useContext(UserContext);
  const { thumbnail } = useContext(UserContext);
  console.log(title);
  console.log(thumbnail);
  return (
    <div>
      <NavBar />
      <div className="video-detail-wrapper">
        <Sidebar />
        <main>
          <div className="thumbnail-wrapper">
            <video
              src={randomVideo}
              controls
              poster={thumbnailpic}
              className="video-thumbnail"
            ></video>

            <h2 className="video-details-title">{title}</h2>
          </div>

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
        </main>
        {/* <span style={{ color: "yellow", fontSize: "5rem" }}>{thumbnail}</span> */}
      </div>
    </div>
  );
};

export default VideoDetails;
