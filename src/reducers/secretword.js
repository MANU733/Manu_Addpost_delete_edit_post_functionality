import * as actionType from '../action/actionType.js';

const initialstate = {
    secretword: '',
}

const secretReducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionType.SECRETWORD: {
            return { ...state, secretword: action.payload }
        }

        default:
            return { ...state }
    }
}

export default secretReducer;