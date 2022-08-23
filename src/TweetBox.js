import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@mui/material"
import db from './firebase-config';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e =>{
        e.preventDefault();     // It stops the refreash

        db.collection('posts').add({
            displayName:"Aditya Chouhan",
            username:"clever",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg' />
                    <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                    className='tweetBox__inputImage'
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox