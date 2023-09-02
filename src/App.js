import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchComments } from "./api";
import PostList from "./components/PostList";
import CommentList from "./components/CommentList";

function App() {
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    fetchComments()
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const handleSelectPost = (postId) => {
    setSelectedPostId(postId);
    setFilteredComments(
      comments.filter((comment) => comment.postId === postId)
    );
  };

  return (
    <div className="app">
      <PostList
        posts={comments}
        onSelectPost={handleSelectPost}
        selectedPostId={selectedPostId}
      />
      <CommentList comments={filteredComments} />
    </div>
  );
}

export default App;
