import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/context';
import { db, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, collection, onSnapshot, query, orderBy, deleteField, FieldValue, increment } from '../config/firebase';

function Home() {

    const { state } = useContext(GlobalContext);
    const [tweet, handleTweet] = useState("");
    const [tweetChars, handleTweetChars] = useState("");
    let [fetchedTweets, handleFetchedTweets] = useState([]);
    let [fetchedReactions, handleFetchedReactions] = useState([]);
    let [isDisbaled, handleDisability] = useState(false);

    useEffect(async () => {
        let tweetsClone = fetchedTweets.slice(0);
        let dataFetcher = async () => {
            const q = query(collection(db, "tweets"), orderBy("tweet_counter"));
            onSnapshot(q, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type == "added") {
                        let tweetData = change.doc.data();
                        tweetData.tweet_id = change.doc.id;
                        tweetsClone.push(tweetData);
                    }
                });
                handleFetchedTweets(tweetsClone);
            })

            const reactions = await getDocs(collection(db, "reactions"));
            let tweetsReactionsClone = fetchedReactions.slice(0);
            reactions.forEach((doc) => {
                let tweetsReaction = doc.data();
                tweetsReaction.tweet_id = doc.id;
                tweetsReactionsClone.push(tweetsReaction);
            });
            handleFetchedReactions(tweetsReactionsClone);
        }

        if (state.authUser.uid == undefined) {
            let detectData = setInterval(() => {
                if (state.authUser.uid != undefined) {
                    clearInterval(detectData);
                    dataFetcher();
                }
            }, 1000);
        } else {
            dataFetcher();
        }
    }, [])

    let decider = (likedData, dislikedData, id) => {
        if (likedData.includes(true)) {
            return (
                <div className="reactions">
                    <div>
                        {
                            <button onClick={(e) => {
                                if (e.target.className == "liked") {
                                    deleteReaction(id, "like");
                                    e.target.className = "neutral";
                                } else {
                                    addLike(id);
                                    e.target.className = "liked";
                                }
                            }} className="liked" id={id + "liked"}>Like</button>
                        }
                    </div>
                    <div>
                        {
                            <button onClick={(e) => {
                                if (e.target.className == "disliked") {
                                    deleteReaction(id, "dislike");
                                    e.target.className = "neutral";
                                } else {
                                    addDislike(id);
                                    e.target.className = "disliked";
                                }
                            }} className="neutral" id={id + "disliked"}>Dislike</button>
                        }
                    </div>
                    <div>Retweet</div>
                    <div>Share</div>
                </div>
            )
        } else if (dislikedData.includes(true)) {
            return (
                <div className="reactions">
                    <div>
                        {
                            <button onClick={(e) => {
                                if (e.target.className == "liked") {
                                    deleteReaction(id, "like");
                                    e.target.className = "neutral";
                                } else {
                                    addLike(id);
                                    e.target.className = "liked";
                                }
                            }} className="neutral" id={id + "liked"}>Like</button>
                        }
                    </div>
                    <div>
                        {
                            <button onClick={(e) => {
                                if (e.target.className == "disliked") {
                                    deleteReaction(id, "dislike");
                                    e.target.className = "neutral";
                                } else {
                                    addDislike(id);
                                    e.target.className = "disliked";
                                }
                            }} className="disliked" id={id + "disliked"}>Dislike</button>
                        }
                    </div>
                    <div>Retweet</div>
                    <div>Share</div>
                </div>
            )
        } else if (!likedData.includes(true)) {
            return (
                <div className="reactions">
                    <div>
                        {
                            <button onClick={(e) => {
                                if (e.target.className == "liked") {
                                    deleteReaction(id, "like");
                                    e.target.className = "neutral";
                                } else {
                                    addLike(id);
                                    e.target.className = "liked";
                                }
                            }} className="neutral" id={id + "liked"}>Like</button>
                        }
                    </div>
                    <div>
                        {
                            <button onClick={(e) => {
                                if (e.target.className == "disliked") {
                                    deleteReaction(id, "dislike");
                                    e.target.className = "neutral";
                                } else {
                                    addDislike(id);
                                    e.target.className = "disliked";
                                }
                            }} className="neutral" id={id + "disliked"}>Dislike</button>
                        }
                    </div>
                    <div>Retweet</div>
                    <div>Share</div>
                </div>
            )
        }
    }

    let addLike = (id) => {
        let oppositeReaction = document.getElementById(id + "disliked");
        let decideDecrement;

        if(oppositeReaction.className == "disliked") {
            decideDecrement = -1;
        } else {
            decideDecrement = 0;
        }

        setDoc(doc(db, "reactions", id), {
            [state.authUser.uid]: "liked",
            likes_count: increment(1),
            dislikes_count: increment(decideDecrement)
        }, { merge: true });

        oppositeReaction.className = "neutral";
    }

    let addDislike = (id) => {
        setDoc(doc(db, "reactions", id), {
            [state.authUser.uid]: "disliked",
            dislikes_count: increment(1)
        }, { merge: true });

        document.getElementById(id + "liked").className = "neutral";
    }

    let deleteReaction = (id, action) => {
        let toDecrement;
        if(action == "like") {
            toDecrement = "likes_count";
        } else {
            toDecrement = "dislikes_count";
        }

        updateDoc(doc(db, 'reactions', id), {
            [state.authUser.uid]: deleteField(),
            [toDecrement]: increment(-1)
        });

    }

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

                    let dt = new Date();
                    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    let date = (months[dt.getMonth()]) + " " + dt.getDate() + ", " + dt.getFullYear();
                    let time = dt.getHours() + ":" + dt.getMinutes();

                    await addDoc(collection(db, "tweets"), {
                        tweet_date: date,
                        tweet_time: time,
                        tweet_text: tweet,
                        tweet_reactions: [],
                        uid: state.authUser.uid,
                        tweet_from: state.authUser.email,
                        tweet_by: state.authUser.username,
                        tweet_counter: tweetsCounter.data().counter,
                    });

                    await setDoc(doc(db, "tweets_counter", "home_count"), {
                        counter: tweetsCounter.data().counter + 1
                    });

                    handleTweet("");
                    handleDisability(false);
                }
            } disabled={isDisbaled}>Tweet</button>

            <h2 style={{ textAlign: "center" }}>All tweets</h2>

            <div className="all-tweets posts">
                {
                    fetchedTweets.map((tweet, index) => {
                        let likedData = [];
                        let dislikedData = [];
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

                                {
                                    fetchedReactions.map((reaction) => {
                                        if (tweet.tweet_id == reaction.tweet_id && reaction[state.authUser.uid] == "liked") {
                                            likedData.push(true);
                                        } else if (tweet.tweet_id == reaction.tweet_id && reaction[state.authUser.uid] == "disliked") {
                                            dislikedData.push(true);
                                        } else {
                                            likedData.push(false);
                                        }
                                    })
                                }

                                {
                                    decider(likedData, dislikedData, tweet.tweet_id)
                                }

                            </div>
                        )
                    })

                }

            </div>
        </div>
    )
}

export default Home;