const initialState = {
    userType: ''
};

const userTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_TYPE':
            return {
                ...state,
                userType: action.payload
            }
        default:
            return state;
    }
};

export default userTypeReducer;