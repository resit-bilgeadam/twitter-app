import { SET_TOKEN, SET_USER } from "./types";

const INITIAL_STATE = {
    token: null,
    user: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.payload};

        case SET_USER:
            return {...state, user: action.payload};
    
        default:
            return state;
    }
}

export default authReducer;
