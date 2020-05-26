import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JestFunc from '../index.js';
import { shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });

describe('state change', () => {
    let dummy="manu"
    test('render without error', () => {
    const wrapper = shallow(<JestFunc  />);
    const findbyattr=wrapper.find('input');
    findbyattr.simulate('change',{target:{value:dummy}})

    console.log(wrapper.find('button').get(0))
    expect(wrapper.find('input').get(0).props.value).toBe(dummy);
    })
})