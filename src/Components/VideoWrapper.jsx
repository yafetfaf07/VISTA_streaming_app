import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import '../assets/CSS_files/video-card.css'
const VideoWrapper = () => {
  const [video, setvideo] = useState([]);

  useEffect( () => {
    const fetchVideo = async () => {
      const response = await fetch("http://localhost:5036/api/User");  
      const videos = await response.json();
      // console.log(videos);

      setvideo(videos);
    }

    fetchVideo();

    console.log("This is the data",video);

  }, [])
  return (
    <div className="categories">
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
