import React from "react";
import "../assets/CSS_files/dashboard.css";
import bg from "../assets/images/backgroundImage.webp";
const DashboardCard = () => {
  return (
    <div className="dashboard-card-wrapper">
      <div className="dashboard-card-image-wrapper">
        <img src={bg} alt="" />
      </div>
      <div className="dashboard-description">
        <div>
          <h3>Is Halo Season 3 based on the HALO trilogy??</h3>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
