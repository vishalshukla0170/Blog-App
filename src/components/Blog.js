import React from 'react';
import Post from './Post';
import "../styles.css"

const Blog = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default Blog;