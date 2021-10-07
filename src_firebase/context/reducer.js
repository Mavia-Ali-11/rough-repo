export let data = {
    users: [],
    authenticatedUser: {},
    studentsData: []
}

export function reducer(state, action) {
    if(action.type ==  "SAVE_USER") {
        data.users = data.users.concat(action.payload);
        console.log(data.users);
        console.log(action.type)
        return state;
    }
    else if(action.type == "CURRENT_USER") {
        data.authenticatedUser = action.payload;
        return state;
    }
    else if(action.type == "SAVE_STUDENT_DATA") {
        data.studentsData = data.studentsData.concat(action.payload);
        console.log(data.studentsData);
        console.log(action.type)
        return state;
    }
}