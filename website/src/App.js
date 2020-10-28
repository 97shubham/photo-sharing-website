import './App.css';
import Post from './Post';
import React, { useEffect, useState } from "react";


function App() {
  const [posts, setPosts] = useState([
    {
      username: "shubhamsingh",
      caption: " Nature is alive",
      imageURL: "/image_1.jpg"
    },
    {
      username: "user2",
      caption: " hello",
      imageURL: "/image_2.jpg"
    },
    {
      username: "user3",
      caption: " green leafs",
      imageURL: "/image_3.jpeg"
    }
  ]);
  
  return (
    <div className="app">

     <div className="app__header">
       <img
       className="app__headerImage"
       src='/logo.jpg'
       alt=""
       />
     </div>

     <h1>Timeline</h1>

     {
       posts.map(post => (
         <Post username={post.username} caption={post.caption} imageURL={post.imageURL} />
       ))
     }

    </div>
  );
}

export default App;
