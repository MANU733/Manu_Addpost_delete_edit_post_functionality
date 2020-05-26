import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JestExample from '../index.js'
import { shallow,mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Render without error SimpleModal', () => {
 
 test('render without error',()=>{
    let props={
        success:false
    }
     const wrapper=shallow(<JestExample {...props}/>);
     const findattr=wrapper.find('[data-test="component-congrats"]')
     console.log(wrapper.debug())
     expect(findattr.length).toBe(1) 
 })
 test('render congrats',()=>{
     let props={
         success:true
     }
    const wrapper=shallow(<JestExample {...props}/>);
    const findattr=wrapper.find('[data-test="component-message"]')
    expect(findattr.text()).toBe("Congrats!")
})

test('render elae part with classname condition check',()=>{
    let props={
        success:true,
        changeclass:true
    }
   const wrapper=shallow(<JestExample {...props}/>);
   const findattr=wrapper.find('[data-test="component-congrats"]')
   console.log(wrapper.debug())
   expect(findattr.get(0).props.className).toBe("true");
})

})
