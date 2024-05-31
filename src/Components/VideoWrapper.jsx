import React, { useState } from "react";
import VideoCard from "./VideoCard";
import '../CSS_files/video-card.css'
const VideoWrapper = () => {
  return (
    <div className="categories" >
      <h2>Gaming</h2>
      <div className="gaming">
        <VideoCard  />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      <h2>Trending</h2>
      <div className="Trending">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      <h2>Recommended for you</h2>
      <div className="recommended">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default VideoWrapper;
