import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../context/context';
import { db, doc, addDoc, setDoc, collection, onSnapshot, query } from '../config/firebase';

function Home() {

    const { state, dispatch } = useContext(GlobalContext);
    const [tweet, handleTweet] = useState("");
    const [tweetChars, handleTweetChars] = useState("");
    let [fetchedTweets, handleFetchedTweets] = useState([]);
    let [tweetsTracker, handleTweetsTracker] = useState(`${state.tweetsCount.counter}`);
    const history = useHistory();


    useEffect(async () => {
        let tweetsClone = fetchedTweets.slice(0);
        const q = query(collection(db, 'tweets'));
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type == "added") {
                    tweetsClone.push(change.doc.data());
                    console.log(change.doc.data());
                }
            });
            handleFetchedTweets(tweetsClone);
        })

    }, [])
    
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
                    
                    // const docRef = await addDoc(collection(db, "tweets"), {
                    //     uid: state.authUser.uid,
                    //     tweet_date: date,
                    //     tweet_time: time,
                    //     tweet_by: state.authUser.username,
                    //     tweet_from: state.authUser.email,
                    //     tweet_text: tweet,
                    // });


                    
                    
                    // await setDoc(doc(db, "tweets_counter", "home_count"), {
                    //     counter: state.tweetsCount.counter + 1
                    // });

                    // handleTweetsCounter((state.tweetsCount.counter + 1))

                    // dispatch({ type: "TWEETS_COUNT", payload: tweetsCounter });

                    // handleTweetsTracker(state.tweetsCount.counter);
                    console.log(tweetsTracker);

                    
                    
                    
                    
                    
                    handleTweet("");
                    
                    
                    
                }
            }>Tweet</button>

            <h2 style={{ textAlign: "center" }}>All tweets</h2>

            <div className="all-tweets posts">
                {
                    fetchedTweets.map((tweet, index) => {
                        return (
                            <div key={index}>
                                <div className="postDetails">
                                    <div>
                                        <h4>{tweet.tweet_by}</h4>
                                        <p>{tweet.tweet_from}</p>
                                    </div>
                                    <div>
                                        <p>{tweet.tweet_date}</p>
                                        <p>{tweet.tweet_time}</p>
                                        <p>{tweet.timestamp}</p>
                                    </div>
                                </div>

                                <p>{tweet.tweet_text}</p>

                                <div className="reactions">
                                    <div>Like</div>
                                    <div>Dislike</div>
                                    <div>Retweet</div>
                                    <div>Share</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home;