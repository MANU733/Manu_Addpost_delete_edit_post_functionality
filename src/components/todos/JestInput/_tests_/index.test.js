import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../index.js';
import { Provider } from 'react-redux';
import { shallow,mount } from 'enzyme';
import guessedwordreducer from '../../../../reducers/guessedword';
import { createStore, applyMiddleware, compose } from 'redux';

Enzyme.configure({ adapter: new Adapter() });

describe('A', () => {
 
 test('render without error',()=>{
    let props={
       success:true
    }
    const store = createStore(guessedwordreducer,{...props});
     const wrapper=shallow(<Input {...props} store={store}/>).dive().dive();
   expect(wrapper.exists()).toBe(true)
 })

 test('render without error',()=>{
    let props={
       success:false
    }
    const store = createStore(guessedwordreducer,{...props});
     const wrapper=shallow(<Input {...props} store={store}/>).dive().dive();
   expect(wrapper.exists()).toBe(true)
 })
})

describe('Redux component props', () => {
 
   test('Redux prop',()=>{
      let props={
         success:true
      }
      const store = createStore(guessedwordreducer,{...props});
       const wrapper=shallow(<Input {...props} store={store}/>).dive();
     const res=wrapper.find('Input').get(0).props.success;
     expect(res).toBe(true)
   })

  })
  

  describe('Mock the function', () => {
 

   test('mock',()=>{

      let loadSpinnermock=jest.fn()
      let props={
         success:true,
         loadSpinner:loadSpinnermock
      }
      const store = createStore(guessedwordreducer,{...props});
      
      const wrapper=shallow(<Input {...props} store={store}/>).dive().dive();
      console.log(wrapper.debug())
     const findbyattr=wrapper.find('form');
     findbyattr.simulate('submit',{preventDefault(){}})

     expect(loadSpinnermock.mock.calls.length).toBe(1);
    
   })

  })
