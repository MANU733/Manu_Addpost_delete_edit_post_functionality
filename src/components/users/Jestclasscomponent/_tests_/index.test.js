import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Jestclass from '../index.js';
import { shallow ,mount} from 'enzyme';
import { ExpansionPanelActions } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('Render without error', () => {
    let dummy="manu"
    test('render without error', () => {
        const wrapper = mount(<Jestclass title="manu" />)
        const findbyattr=wrapper.find('input');
        findbyattr.simulate('change',{target:{value:dummy}})
       expect(wrapper.state().inputText).toBe(dummy)
    })

})