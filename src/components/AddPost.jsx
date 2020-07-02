import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

function AddPost() {
  const [message, setMessage] = useState('');
  let history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    setMessage('');
    history.push('/');
  }

  return (
    <div>
      <h1 id="title">Add Post</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
  // redirect ? (
  //   <Redirect to={redirect} />
  // ) : (
  //   <div>
  //     <h1 id="title">Add Post</h1>
  //     <form className="form" onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         className="input"
  //         placeholder="Your message..."
  //         value={message}
  //         onChange={(e) => setMessage(e.target.value)}
  //       />
  //       <input type="submit" value="Post" />
  //     </form>
  //   </div>
  // );
}

export default AddPost;
