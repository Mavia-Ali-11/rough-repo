export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser: {},

    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: '456',
            role: 'student'
        },
    ],

    studentsData: []
}

export function reducer(state, action) {

    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_DRINK": {
            return {
                ...state,
                drink: action.payload
            }
        }
        case "UPDATE_USERS": {
            data.users = data.users.concat(action.payload);
            console.log(data.users);
        }
        case "SAVE_USER": {
            data.authUser = action.payload;
            console.log(data.authUser);
        }
        case "SAVE_STUDENT_DATA": {
            data.studentsData = action.payload;
            console.log(data.studentsData);
        }
        default:
            return state;
    }

}