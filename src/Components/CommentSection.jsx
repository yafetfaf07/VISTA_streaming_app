import React, { useState } from "react";
import "../assets/CSS_files/comment.css";
import profileimage from "../assets/images/backgroundImage.webp";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  const [totalComments, settotalComments] = useState(2);
  return (
    <div>
      <div className="comment-section-wrapper">
        <h2>
          <p className="total-comments">{totalComments}</p>Comment
        </h2>
        <div className="add-comment">
          <img src={profileimage} alt="" className="profile-image" />
          <input type="text" placeholder="Add a comment.." />
          <button>Post</button>
        </div>
      </div>
      <div className="comment-card-wrapper">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default CommentSection;
