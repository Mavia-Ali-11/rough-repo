export let data = {
    users: [],

    authUser: {},
    
    tweets: []
}

export function reducer(state, action) {

    if(action.type ==  "SAVE_USER") {
        data.users = data.users.concat(action.payload);
        console.log(data.users);
        return state;
    }
    else if(action.type == "CURRENT_USER") {
        data.authUser = action.payload;
        return state;
    }
    else if(action.type == "PUBLISH_TWEET") {
        data.tweets = data.tweets.concat(action.payload);
        console.log(data.tweets);
        return state;
    }
}