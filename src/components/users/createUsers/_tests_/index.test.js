import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Createusers from '../index.js';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Render without error Createusers', () => {
    let props={}
    beforeEach(()=>{
        props={
            addPost:jest.fn(),
            manu:'manhh'
        }
    })
    test('render without error', () => {
        props.manu=true;
        const wrapper = shallow(<Createusers {...props}/>)
        expect(wrapper.exists()).toBe(true)
    })
    // test('render text1', () => {
    //     const wrapper = shallow(<Createusers {...props}/>)
    //     console.log(wrapper.props().addPost)
    //     const findbyattr=wrapper.find('[data-test="rrr"]');
    //     expect(findbyattr.text()).toEqual(undefined);
    // })
    // test('input value setstate', () => {
    //     const wrapper = shallow(<Createusers {...props}/>)
    //     const instance=wrapper.instance();
    //     instance.handleChangeName({target:{value:'manuuuuuuuuuu'}})
    //     expect(instance.state.inputName).toBe('manuuuuuuuuuu') 
    // })
})
