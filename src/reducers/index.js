import { combineReducers } from 'redux';
import userReducer from './user';
import secretReducer from './secretword'
import guessedwordreducer from './guessedword';

export default combineReducers({
    inputTextName: userReducer,
    secretReducer:secretReducer,
    guessedwordreducer:guessedwordreducer
});