import React from 'react'
import "../assets/CSS_files/video-upload.css";
import channelLogo from "../assets/images/backgroundImage.webp"

const VideoSideBar = ({isDashboards, isUploads, isEdits}) => {
  return (
    <div id='video-sidebar'>
        <div className='channels-logo'>
        <img src={channelLogo} alt='' className='side-bar-channel-logo'/>
        <h2>Fireship</h2>
        </div>
        <div className="sides" onClick={
          () => {
            isDashboards(true);
            isUploads(false);
            isEdits(false)
          }
        }>Dashboard</div>
        <div className="sides" onClick={
          () => {
            isDashboards(false);
            isUploads(false);
            isEdits(true)
          }
        }>Edit Videos</div>
        <div className="sides" onClick={
          () => {
            isDashboards(false);
            isUploads(true);
            isEdits(false)
          }
        }>Upload videos</div>
    </div>
  )
}

export default VideoSideBar