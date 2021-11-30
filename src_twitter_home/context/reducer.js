export let data = {
    authUser: {},
    fetchedTweets: [],
    tweetsCount: {},
}

export function reducer(state, action) {
    if(action.type == "CURRENT_USER") {
        data.authUser = action.payload;
        console.log(data.authUser);
        return state;
    } 
}