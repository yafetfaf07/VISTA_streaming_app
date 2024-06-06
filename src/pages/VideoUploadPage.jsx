import React from "react";
import "../assets/CSS_files/video-upload.css";
import VideoSideBar from "../Components/VideoSideBar";
import UploadVideos from "../Components/UploadVideos";
const VideoUploadPage = () => {
  function setFileInfo() {
    //change div content
    var file = document.getElementById("fileUp").files[0];

    var Pname = file.name;
    Pname = Pname.slice(0, Pname.indexOf(".")); //get filename without extension
    var Ptype = file.type;
    //turns into KB,MB, etc...
    //returns 1, 2 or 3
    // var Pdur = file.duration;
    //returns size * (100 || 10 || 1)
    /* a lot of stuff throwing this info to the HTML */
    console.log(Pname);
    console.log(Ptype);

    // console.log(Pdur)
  }
  return (
    <div className="video-uploaded">
            <h2 className="video-upload-header">Channel Content</h2>

      <div>
      <VideoSideBar />
      <UploadVideos />
      <div style={{width:"300px"}}></div>
      </div>
    
    </div>
  );
};

export default VideoUploadPage;
