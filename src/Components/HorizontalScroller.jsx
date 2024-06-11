import React from "react";
import "../assets/CSS_files/movie-main.css"

const HorizontalScroller = () => {
  return (
    <div style={{ display: "flex" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      {/* <button className="left-scroller">
        <span class="material-symbols-outlined">
          keyboard_double_arrow_left
        </span>
      </button> */}
      <div className="scroll-menu">
        <a href="#">Trending</a>
        <a href="#">Gaming</a>
        <a href="#">Politics</a>
        <a href="#">Computer Science</a>
        <a href="#">Language</a>
        <a href="#">Language</a>
        <a href="#">Language</a>
        <a href="#">Language</a>
        <a href="#">Language</a>
        <a href="#">Language</a>
        <a href="#">Language</a>

        

       
      </div>
      {/* <button className="right-scroller">
        <span class="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </button> */}
    </div>
  );
};

export default HorizontalScroller;
