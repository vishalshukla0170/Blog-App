import React, { useState } from 'react';
import Blog from './components/Blog';
import CreatePost from './components/CreatePost';
import './styles.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content, image, mapLink) => {
    const newPost = { id: Date.now(), title, content, image, mapLink };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container">
      <h1>My Blog</h1>
      <CreatePost addPost={addPost} />
      <Blog posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default App;
