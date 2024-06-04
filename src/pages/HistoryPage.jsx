import React from "react";
import "../assets/CSS_files/history.css";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";
import HistoryCard from "../Components/HistoryCard";
const HistoryPage = () => {
  return (
    <>
    <NavBar />
    <main style={{display:"flex"}}>
    <Sidebar />
      <div className="history-page">
        <h2>Watch History</h2>
        <div>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        </div>
     

      </div>
    </main>
   
    </>
  );
};

export default HistoryPage;
