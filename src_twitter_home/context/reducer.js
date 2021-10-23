export let data = {
    authUser: {},
    fetchedTweets: [],
    tweetsCount: {},
}

export function reducer(state, action) {
    if(action.type == "CURRENT_USER") {
        data.authUser = action.payload;
        return state;
    } else if(action.type == "TWEETS_COUNT") {
        data.tweetsCount = action.payload;
        return state
    }
}