import { useState } from 'react'
import './App.css'

function PostButton() {
  return (
    <button name = "postButton">
      +
    </button>
  );
}

function App() {
  return (
    <>
      
      <h1> Proster </h1>
      <div id = "postField">
        <label for = "postButton">Share your thoughts</label>
        <PostButton />
        {/* <input type="text" id="postContent" name = "What do you want to create today?"></input> */}
      </div>
    </>
  )
}

export default App
