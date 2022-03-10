import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    refugee: {},
    loggedIn: false
};

const refugeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REFUGEE_LOGIN:
            return {
                ...state,
                refugee: action.payload,
                loggedIn: true
            }
        default:
            return state;
    }
};

export default refugeeReducer;