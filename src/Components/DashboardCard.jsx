import React, { useRef, useState } from "react";
import "../assets/CSS_files/dashboard.css";
import bg from "../assets/images/backgroundImage.webp";
const DashboardCard = () => {
  const dialog = useRef();
  const [isVisible, setisVisible] = useState(false);
  return (
    <div className="dashboard-card-wrapper">
      <div className="dashboard-card-image-wrapper">
        <img src={bg} alt="" />
      </div>
      <div className="dashboard-description">
        <div className="dashboard-description-channel">
          <h3 className="title">
            Is Halo Season 3 based on the HALO trilogy??
          </h3>
          <span className="channel-name">
            <img src={bg} alt="" />
            Movie Clips <span style={{ margin: "5px" }}>20K views</span>
          </span>
        </div>
        <div className="dashboard-video-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quisquam blanditiis minima temporibus tempora, mollitia at quia
            molestias est debitis nulla?
          </p>
        </div>
      </div>
      <div className="dashboard-card-options">
        <span class="material-symbols-outlined">more_vert</span>
        <div className="dialog" >
        <button className="Edit" onClick={() => {
          dialog.current.classList.add("dialog-edit-actions")
          dialog.current.showModal();
        }}>Edit </button>
        <button className="Delete">X</button>
      </div>
      </div>
      <dialog className="dialog-edit" ref={dialog} >
        <h2>Edit Video</h2>
        <button style={{color:"white"}} onClick={() => {
          dialog.current.classList.remove("dialog-edit-actions")
          dialog.current.close();
        }}>X</button>
      <form>
        <div>
          <span>Name</span>
          <input type="text" />
        </div>
      </form>
      </dialog>
  
    </div>
  );
};

export default DashboardCard;
