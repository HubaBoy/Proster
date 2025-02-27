import { useState } from 'react'
import './App.css'

function PostField() {
  return (
    <div id = "postField">
      <label for = "postButton">Share your thoughts</label>
      <button name = "postButton">
        +
      </button>
      {/* <input type="text" id="postContent" name = "What do you want to create today?"></input> */}

    </div>
  );
}

function App() {
  return (
    <>
      <h1> Proster </h1>
      <PostField />
    </>
  )
}

export default App
