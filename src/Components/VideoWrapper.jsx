import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "../assets/CSS_files/video-card.css";
import { Spin } from "antd";
const VideoWrapper = () => {
  const [video, setvideo] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);

    //  console.log("Not seted",videos);
    setTimeout(async () => {
      setisLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          
        }}
      >
        <Spin
          style={{
          transform:"translate(500px, 200px)"
          }}
          spinning={true}
          size="large"
        ></Spin>
      </div>
    );
  }


  return (
    <div className="categories">
      <h2>Gaming</h2>
      <div className="gaming">
        <VideoCard />
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
