import React, { useState } from 'react';

function AddPost() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1 id="title">Add Post</h1>
      <form>
        <input
          type="text"
          className="input"
          placeholder="Your message..."
          value={message}
        />
      </form>
    </div>
  );
}

export default AddPost;
