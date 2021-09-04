import React, {useState} from 'react'
import {Avatar, Button } from "@material-ui/core";
import "./Tweetbox.css";
import TwitterLogo from "./logo.jpg";
import db from "../firebase/firebase";
import firebase from 'firebase';


function Tweetbox() {
    const [tweetMessage,setTweetMessage]=useState('')
    const [tweetImage,setTweetImage]=useState('')
    
    const sendTweet = (e)=>{
    e.preventDefault();
    db.collection("PostSort").add({
      
    displayName: "Neha Singh",
    username: "NEHASIN13865688",
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar:TwitterLogo,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
    ,
  });
  setTweetImage('')
  setTweetMessage('')
}

    return (
        <div className='tweetbox'>
           <form action="">
               <div className="tweetbox__input">
               <Avatar src={TwitterLogo} />
<input type="text"placeholder="What's happening?"
 value={tweetMessage}
 onChange={(e) => setTweetMessage(e.target.value)}
/>

               </div>
<input type="text"  className='tweetbox__imageInput'  placeholder="  Enter image URL" 
    value={tweetImage}
    onChange={(e) => setTweetImage(e.target.value)}
  />
               <Button onClick={sendTweet} type='submit' className='tweetbox__tweetButton'>Tweet</Button>
           </form>
               {}

        </div>
    )
}

export default Tweetbox
