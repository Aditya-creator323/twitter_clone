import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@mui/material"

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg' />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input
                    className='tweetBox__inputImage'
                    placeholder="Enter image URL"
                    type="text"
                />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox