import React, { useState } from "react";
import "../assets/CSS_files/video-upload.css";
import VideoSideBar from "../Components/VideoSideBar";
import UploadVideos from "../Components/UploadVideos";
import NavBar from "../Components/NavBar";
import VideoDashboard from "../Components/VideoDashboard";
import VideoEdit from "../Components/VideoEdit";
const VideoUploadPage = () => {
  const [isDashboard, setisDashboard] = useState(true);
  const [isUpload, setisUpload] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  if (isDashboard) {
    return (
      <div className="video-uploaded">
        <NavBar />
        {/* <h2 className="video-upload-header">Channel Content</h2> */}

        <div>
        <VideoSideBar isDashboards = {setisDashboard} isUploads = {setisUpload} isEdits = {setisEdit}/>

          <VideoDashboard  />

        </div>
      </div>
    );
  } 
  // else if (isEdit) {
  //   return (
  //     <div className="video-uploaded">
  //       <NavBar />
  //       {/* <h2 className="video-upload-header">Channel Content</h2> */}
     

  //       <div>
  //       <VideoSideBar isDashboards = {setisDashboard} isUploads = {setisUpload} isEdits = {setisEdit} />
  //       <VideoEdit   />
  //         <div style={{ width: "300px" }}></div>
  //       </div>
  //     </div>
  //   );
  // } 
  else if (isUpload) {
    return (
      <div className="video-uploaded">
        <NavBar />
        {/* <h2 className="video-upload-header">Channel Content</h2> */}

        <div>
          <VideoSideBar isDashboards = {setisDashboard} isUploads = {setisUpload} isEdits = {setisEdit} />
          <UploadVideos/>
          <div style={{ width: "300px" }}></div>
        </div>
      </div>
    );
  }

};

export default VideoUploadPage;
