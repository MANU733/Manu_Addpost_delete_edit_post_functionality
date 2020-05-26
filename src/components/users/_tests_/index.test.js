import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Users from '../index.js';
import { shallow,mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Render  error', () => {
    test('render  error', () => {
        const wrapper = mount(<Users />)
        const findbyattr=wrapper.find('[data-test="editbutton"]');
        // findbyattr.simulate('change',{target:{value:"manu"}});
           
    })


})
