import React, { useEffect, useRef, useState } from "react";
import "../assets/CSS_files/video-upload.css";
const UploadVideos = ( ) => {
  const [videoname, setvideoname] = useState("");
  const [videodetails, setvideodetails] = useState("");
  const [videoFile, setvideoFile] = useState({});
  const [imageFile, setimageFile] = useState({});
  const [categories, setcategories] = useState("");
  const [videoduration, setvideoduration] = useState("");
  const [previews, setpreviews] = useState();
  const videoRef = useRef(null);

 

  const handleVideo = () => {
    if (!videoname && !videodetails && !videoFile && !imageFile && !categories)
      throw new Error("Please enter all the details");
 

    const fd = new FormData();
    fd.append("VideoName", videoname);
    fd.append("VideoDetails", videodetails);
    fd.append("VideoFile", videoFile);
    fd.append("ImageFile", imageFile);
    fd.append("Categories", categories);
    fd.append("Duration", videoduration);

    console.log("Video Object", fd.get("VideoFile"));
    console.log("Video Object", typeof(fd.get("VideoFile")));

    console.log("Image Object", fd.get("ImageFile"));
    console.log("Check the category", fd.get("Categories"));
    console.log(
      "Check the duration PLEASE WORK!!!!!!!!!! ",
      fd.get("Duration")
    );
    console.log("The whole Object", fd);
    // useEffect( () => {
    //   fetch("the url", {
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(fd)
    //   })
    // }, [])
  };
  return (
    <div className="video-form">
      <h3>Add Video Form</h3>
      <span>Enter name</span>
      <input
    
        type="text"
        placeholder="Name of your video"
        onChange={(e) => setvideoname(e.target.value)}
      />
      <span>Enter description</span>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="Something about the video..."
        
        onChange={(e) => {
          setvideodetails(e.target.value[0]);
        }}
        
      ></textarea>
      <span>Add video</span>
      <input
        type="file"
        id="fileUp"
        placeholder="video name"
        accept="video/mp4"
        onChange={(e) => {
          setvideoFile(e.target.files[0]);
        }}
      />
      <span>Add thumbnail</span>

      <input
        type="file"
        placeholder="thumbnai name"
        accept="image/png,image/jpeg,image/jpg"
        onChange={(e) => {
          setimageFile(e.target.files[0]);
        }}
      />
      <span>Choose category</span>
      <select
        onChange={(e) => {
          setcategories(e.target.value);
        }}
        style={{backgroundColor:"#04081f", padding:"10px"}}
      >
        <option value="Politics">Politics</option>
        <option value="Gaming">Gaming</option>
        <option value="Documentary">Documentary</option>
        <option value="Fashion">Fashion</option>
      </select>

      <button onClick={handleVideo} className="upload-btn">Upload</button>
      {
        // <video
        //   ref={videoRef}
        //   src={URL.createObjectURL(videoFile)}
        //   style={{ display: "none" }}
        // ></video>
      }
    </div>
  );
};

export default UploadVideos;
