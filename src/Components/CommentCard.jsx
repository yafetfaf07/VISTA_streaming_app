import React from "react";
import commentImage from "../assets/images/backgroundImage.webp";
import "../assets/CSS_files/comment.css";
const CommentCard = () => {
  return (
    <div className="comment-card">
      <div className="comment-card-image-wrapper">
        <img src={commentImage} alt="" />
      </div>
      <div>
        <div className="users">
          <span className="comment-card-username">@username</span>
          <span className="comment-card-time">3 hours ago</span>
        </div>
        <p className="comment-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam velit
          tempora deserunt repellat! Ab vitae voluptates voluptate quasi optio,
          a voluptatem culpa nisi incidunt sunt quas ipsam id unde dolor
          explicabo vel totam magnam recusandae cupiditate. Officiis ipsum quas
          quasi, nobis velit aut consequatur architecto labore, illum molestiae
          beatae tempora!
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
