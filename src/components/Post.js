import React from 'react';
import '../styles.css';

const Post = ({ post, deletePost }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt={post.title} className="post-image" />}
      {post.mapLink && (
        <div>
          <a href={post.mapLink} target="_blank" rel="noopener noreferrer">
            <br></br>
            View on Google Maps
          </a>
        </div>
      )}

      <br></br>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default Post;
