import { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.query.value;
    event.target.elements.query.value = ""
    setPosts([...posts, query]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Post</button>
        <input type="text" name="query" />
      </form>
      {posts.map((post, index) => (
        <p key={index}>{post}</p>
      ))}
    </>
  );
}

export default App;
