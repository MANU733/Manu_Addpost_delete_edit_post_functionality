import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { secretReducer } from '../secretword'
import * as actionType from '../../action/actionType';

Enzyme.configure({ adapter: new Adapter() });

describe('A', () => {

    test('reducer', () => {
        const initialstate = {
            secretword: undefined,
        }
        const reducer = secretReducer(undefined, { type: actionType.SECRETWORD });
        expect(reducer).toEqual({ ...initialstate })
    })
})

