import React, { useState } from "react";
import "../assets/CSS_files/comment.css";

const CommentSection = () => {
  const [totalComments, settotalComments] = useState(2);
  return (
    <div className="comment-section-wrapper">
      <h2>
        <p className="total-comments">{totalComments}</p>Comment
      </h2>
    </div>
  );
};

export default CommentSection;
