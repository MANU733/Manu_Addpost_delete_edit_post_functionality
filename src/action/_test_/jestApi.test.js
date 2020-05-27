import React from 'react';
import axios from 'axios'
import moxios from 'moxios';
import Enzyme from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import JestApi from '../../reducers/jestApi';
import { Apicall } from '../jestAxios';

describe('API', () => {

    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    const expected = {
        "userId": 1,
        "id": 1,
        "completed": true
    }


    test('API', () => {

        let store;
        store = createStore(JestApi, applyMiddleware(thunk));
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    "userId": 1,
                    "id": 1,
                    "completed": true
                }
            });
        });

        return store.dispatch(Apicall())
            .then(() => {
                const newstate = store.getState();
                expect(newstate.title.data).toEqual(expected)
            })

    })
})



