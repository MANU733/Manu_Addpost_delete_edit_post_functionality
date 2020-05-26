import * as actionType from '../action/actionType';

const initialstate = {
    title: null
}

export const JestApi = (state = initialstate, action) => {

    switch (action.type) {
        case (actionType.AXIOS_URL): {
            return { ...state, title: action.payload }
        }
        default:
            return state;
    }
}
export default JestApi;