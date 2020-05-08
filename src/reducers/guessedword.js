import * as actionType from '../action/actionType.js';

const guessedwordreducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GUESSEDWORD: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}

export default guessedwordreducer;