import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import JestThunk from '../../reducers/jestThunk';
import {correctGuess} from '../jestguessword'

Enzyme.configure({ adapter: new Adapter() });

describe('Thunk', () => {

let store;
store = createStore(JestThunk,applyMiddleware(thunk));

    test('Thunk', () => {
        store.dispatch(correctGuess())
        const expectedstate={spinnervalue:true};
        const newstate=store.getState()
        expect(newstate).toEqual(expectedstate);
    })
})
