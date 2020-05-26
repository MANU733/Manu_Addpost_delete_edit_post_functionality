import * as actionType from '../action/actionType.js';

const initialstate = {
    secretword: '',
}

export const secretReducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionType.SECRETWORD: {
            return { ...state, secretword: action.payload }
        }

        case actionType.RESET:{
            return{ ...state,secretword:''}
        }

        default:
            return { ...state }
    }
}

export default secretReducer;