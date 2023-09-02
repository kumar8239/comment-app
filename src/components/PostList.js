import React from "react";

const PostList = ({ posts, onSelectPost, selectedPostId }) => {
  return (
    <div className="post-list">
      <input
        type="text"
        placeholder="Filter by postId"
        onChange={(e) => onSelectPost(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => onSelectPost(post.postId)}
            className={selectedPostId === post.postId ? "selected" : ""}
          >
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
