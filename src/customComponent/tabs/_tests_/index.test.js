import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScrollableTabsButtonAuto from '../index.js';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Render without error', () => {
    test('render without error', () => {
        const wrapper = shallow(<ScrollableTabsButtonAuto />)
        console.log(wrapper.debug())
        const findattr = wrapper.find(".makeStyles-root-1")
        expect(findattr.length).toBe(1)
    })
    test('render  error', () => {
        const wrapper = shallow(<ScrollableTabsButtonAuto />)
        expect(wrapper.exists()).toBe(true)
    })
})