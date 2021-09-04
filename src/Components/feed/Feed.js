import React from 'react'
import "./Feed.css";
import Post from '../post/Post';
import Tweetbox from '../tweetbox/Tweetbox';
import { useState } from "react";
import { useEffect } from "react";
import db from "../firebase/firebase";
import FlipMove from "react-flip-move";
import TwitterLogo from "../tweetbox/logo.jpg"


function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("PostSort")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
    
      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              timestamp={post.timestamp}
              avatar={TwitterLogo}
              image={post.image}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
