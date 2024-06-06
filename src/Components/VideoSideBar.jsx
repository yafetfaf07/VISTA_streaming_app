import React from 'react'
import "../assets/CSS_files/video-upload.css";
import channelLogo from "../assets/images/backgroundImage.webp"

const VideoSideBar = () => {
  return (
    <div id='video-sidebar'>
        <div className='channels-logo'>
        <img src={channelLogo} alt='' className='side-bar-channel-logo'/>
        <h4>Your channel</h4>
        </div>
        <div className="sides">Dashboard</div>
        <div className="sides">Content</div>
        <div className="sides">Analytics</div>
        <div className="sides">Upload videos</div>
    </div>
  )
}

export default VideoSideBar