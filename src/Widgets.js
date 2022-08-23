import React from 'react'
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"

import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder='Search Twitter' type="text" />
            </div>

            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1561647932033875968"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="WisdenIndia"
                    options={{ height: 400 }}
                />

                <TwitterShareButton 
                    url={"https://github.com/Aditya-creator323"}
                    options = {{text : "#reactjs is awesomee", via:"aditya"}}
                />
            </div>
        </div>
    )
}

export default Widgets