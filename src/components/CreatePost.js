import React, { useState } from 'react';
import '../styles.css';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [mapLink, setMapLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content, image, mapLink);
    setTitle('');
    setContent('');
    setImage('');
    setMapLink('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Add your images with URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label>Google Map Link:</label>
        <input
          type="text"
          value={mapLink}
          onChange={(e) => setMapLink(e.target.value)}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default CreatePost;
