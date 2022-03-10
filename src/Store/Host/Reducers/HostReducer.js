import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    host: {},
    loggedIn: false
};

const hostReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HOST_LOGIN:
            return {
                ...state,
                host: action.payload,
                loggedIn: true
            }
        default:
            return state;
    }
};

export default hostReducer;