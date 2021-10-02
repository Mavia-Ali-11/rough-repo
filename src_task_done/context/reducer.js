export let data = {
    country: "Pakistan",
    city: "Karachi",

    users: [],

    authenticatedUser: {},
    
    studentsData: []
}

export function reducer(state, action) {

    if(action.type == "UPDATE_COUNTRY") {
        return {
            ...state,
            country: action.payload
        }
    }
    else if (action.type == "UPDATE_CITY") {
        return {
            ...state,
            city: action.payload
        }
    }
    else if(action.type ==  "SAVE_USER") {
        data.users = data.users.concat(action.payload);
        console.log(data.users);
        console.log(action.type)
        return state;
    }
    else if(action.type == "AUTH_USER") {
        data.authenticatedUser = action.payload;
        console.log(data.authenticatedUser);
        console.log(action.type)
        return state;
    }
    else if(action.type == "SAVE_STUDENT_DATA") {
        data.studentsData = data.studentsData.concat(action.payload);
        console.log(data.studentsData);
        console.log(action.type)
        return state;
    }
}