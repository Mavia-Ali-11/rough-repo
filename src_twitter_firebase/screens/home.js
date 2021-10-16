import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../context/context';
import { db, setDoc, collection, doc } from '../config/firebase';

function Home() {

    const { state, dispatch } = useContext(GlobalContext);
    const [tweet, handleTweet] = useState("");
    const [tweetChars, handleTweetChars] = useState("");
    const history = useHistory();

    return (
        <div>
            <h2>Welcome to twitter - Home</h2>

            <textarea
                placeholder="What's happening?"
                rows="1" cols="35"
                value={tweet}
                onChange={(e) => {
                    handleTweet(e.target.value)
                    e.target.style.height = "5px";
                    e.target.style.height = (e.target.scrollHeight) - 3.5 + "px";

                    if (e.target.value.length > 280) {
                        handleTweet(tweet);
                        handleTweetChars("Your tweet exceeds a maximum limit of 280 charaters");
                    } else {
                        handleTweetChars("");
                    }
                }} />

            <br />

            <p style={{ color: "red" }}>{tweetChars}</p>

            <button onClick={
                async () => {

                    let dt = new Date();
                    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    let date = (months[dt.getMonth()]) + " " + dt.getDate() + ", " + dt.getFullYear();
                    let time = dt.getHours() + ":" + dt.getMinutes();




                    await setDoc(doc(db, "tweet", state.authUser.uid), {
                        tweetDate: date,
                        tweetTime: time,
                        // tweetBy: state.authUser.username,
                        // tweetFrom: state.authUser.email,
                        tweetText: tweet,
                    });
                }
            }>Tweet</button>

            <h2 style={{ textAlign: "center" }}>All tweets</h2>

            <div className="all-tweets posts">

                {
                    state.tweets.map((tweet, index) => {
                        return (
                            <div key={index}>
                                <div className="postDetails">
                                    <div>
                                        <h4>{tweet.tweetBy}</h4>
                                        <p>{tweet.tweetFrom}</p>
                                    </div>
                                    <div>
                                        <p>{tweet.tweetDate}</p>
                                        <p>{tweet.tweetTime}</p>
                                    </div>
                                </div>

                                <p>{tweet.tweetText}</p>

                                <div className="reactions">
                                    <div>Like</div>
                                    <div>Retweet</div>
                                    <div>Share</div>
                                </div>
                            </div>
                        )
                    })}
            </div>

        </div>
    )
}

export default Home;