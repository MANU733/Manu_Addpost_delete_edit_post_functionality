import { combineReducers } from 'redux';
import userReducer from './user';
import secretReducer from './secretword'
import guessedwordreducer from './guessedword';
import JestThunk from './jestThunk'

const rootreducer= combineReducers({
    inputTextName: userReducer,
    secretReducer:secretReducer,
    guessedwordreducer:guessedwordreducer,
    JestThunk:JestThunk
});

export default rootreducer;