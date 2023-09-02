import React from "react";
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>Id:</strong> {comment.id}<br/>
             <strong>Name:</strong> {comment.name}<br/>
            <strong>Email:</strong> {comment.email}
            <p>{comment.body}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CommentList;
