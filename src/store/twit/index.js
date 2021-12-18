import {SET_TWITS} from './types';

const INITIAL_STATE = {
    twits: null
}

const twitReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TWITS:
            return {...state, twits: action.payload};            
    
        default:
            return state;
    }
}

export default twitReducer;
