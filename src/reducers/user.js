import * as actionType from '../action/actionType.js';

const userReducer = (state =[], action) => {
    switch (action.type) {
        case actionType.USER_NAME:
            return [...state, action.payload]
            case actionType.DELETE:
                return state.filter(user => user.id!== action.payload);
                case actionType.NAME_CHANGED:
                    const index=state.findIndex((a=>a.id===action.payload.id));
                    state=[...state.slice(0,index),...state.slice(index+1)];
                    return [...state,action.payload];
                    case actionType.SECRETWORD:
                        return [...state, action.payload]
        default:
            return state;
    }
}

export default userReducer;