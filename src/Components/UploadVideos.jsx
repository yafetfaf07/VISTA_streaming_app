import React from 'react'
import "../assets/CSS_files/video-upload.css"
const UploadVideos = () => {
  return (
    <div className="video-form">
        <h3>Add Video Form</h3>
        <span>Enter name</span>
        <input type="text" placeholder="Name of your video" />
        <span>Enter description</span>
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Something about the video..."
          spellCheck="true"
        ></textarea>
        <span>Add video</span>
        <input
          type="file"
          id="fileUp"
          placeholder="video name"
          accept="video/mp4"
          onChange={() => {
            setFileInfo();
          }}
        />
        <span>Add thumbnail</span>

        <input
          type="file"
          placeholder="thumbnai name"
          accept="image/png,image/jpeg,image/jpg"
          onChange={() => {
            setFileInfo();
          }}
        />
        <span>Choose category</span>
        <select>
          <option value="Politics">Politics</option>
          <option value="Gaming">Gaming</option>
          <option value="Documentary">Documentary</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>
  )
}

export default UploadVideos