import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Guessedword from '../index.js'
import { shallow,mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('A', () => {
 
 test('render without error',()=>{
    let props={
        guessedword:[
            {guessword:"manu",lettercount:3},
            {guessword:"manusagar",lettercount:2}
        ]
    }
     const wrapper=shallow(<Guessedword {...props}/>);
     const findattr=wrapper.find('[data-test="guessword"]')
     console.log(wrapper.debug())
     expect(findattr.length).toBe(props.guessedword.length) 
 })
})

describe('B', () => {
 
    test('render without error B',()=>{
       let props={
           guessedword:[]
       }
        const wrapper=shallow(<Guessedword {...props}/>);
        const findattr=wrapper.find('[data-test="initial-guess"]') 
        expect(findattr.length).toBe(1);
    })
   })