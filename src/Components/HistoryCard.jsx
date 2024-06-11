import React from "react";
import "../assets/CSS_files/history.css";
import pic from "../assets/images/backgroundImage.webp";
const HistoryCard = () => {
  return (
    <div className="history-card">
      <div className="thumbnail-wrapper">
        <img src={pic} alt="" className="history-thumbnail" />
        <div className="history-time">23:22</div>
      </div>
      <div className="history-details">
        <h3>Is Halo Season 3 based on the HALO trilogy??</h3>
        <span className="history-channel-name">Movie Clips 20K views</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur <br></br>adipisicing elit. Alias quis
          ...
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;
