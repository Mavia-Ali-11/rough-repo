import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/context';
import { db, doc, addDoc, setDoc, getDoc, collection, onSnapshot, query, orderBy } from '../config/firebase';

function MyTweets() {

    const { state } = useContext(GlobalContext);
    const [tweet, handleTweet] = useState("");
    const [tweetChars, handleTweetChars] = useState("");
    let [fetchedTweets, handleFetchedTweets] = useState([]);
    let [isDisbaled, handleDisability] = useState(false);

    useEffect(async () => {
        let tweetsClone = fetchedTweets.slice(0); 
        let dataFetcher = () => {
            const q = query(collection(db, "tweets"), orderBy("tweet_counter"));
                onSnapshot(q, (snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type == "added" && change.doc.data().uid == state.authUser.uid) {
                            tweetsClone.push(change.doc.data());
                        }
                    });
                    handleFetchedTweets(tweetsClone);
                })
        }

        if(state.authUser.uid == undefined) {
            let detectData = setInterval(() => {
                if (state.authUser.uid != undefined) {
                    dataFetcher();
                    clearInterval(detectData);
                } 
            }, 1000);
        } else {
            dataFetcher();
        }
    }, [])

    return (
        <div>
            <h2>Welcome to twitter - Home</h2>

            <textarea
                placeholder="What's happening?"
                rows="1" cols="35"
                value={tweet}
                onChange={(e) => {
                    handleTweet(e.target.value);
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
                    handleDisability(true);

                    const tweetsCounter = await getDoc(doc(db, "tweets_counter", "home_count"));
                    console.log(tweetsCounter.data().counter + 1);
                    
                    let dt = new Date();
                    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    let date = (months[dt.getMonth()]) + " " + dt.getDate() + ", " + dt.getFullYear();
                    let time = dt.getHours() + ":" + dt.getMinutes();
                    
                    await addDoc(collection(db, "tweets"), {
                        tweet_date: date,
                        tweet_time: time,
                        tweet_text: tweet,
                        uid: state.authUser.uid,
                        tweet_from: state.authUser.email,
                        tweet_by: state.authUser.username,
                        tweet_counter: tweetsCounter.data().counter
                    });

                    await setDoc(doc(db, "tweets_counter", "home_count"), {
                        counter: tweetsCounter.data().counter + 1
                    });

                    handleTweet("");
                    handleDisability(false);
                }
            } disabled={isDisbaled}>Tweet</button>

            <h2 style={{ textAlign: "center" }}>My tweets</h2>

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

export default MyTweets;