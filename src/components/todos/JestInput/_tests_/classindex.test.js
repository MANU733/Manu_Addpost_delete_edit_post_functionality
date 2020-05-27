import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputClass from '../JestClass';
import { Provider } from 'react-redux';
import { shallow,mount } from 'enzyme';
import guessedwordreducer from '../../../../reducers/guessedword';
import { createStore, applyMiddleware, compose } from 'redux';

Enzyme.configure({ adapter: new Adapter() });

describe('Class', () => {
    let props={
        success:true
     }
     const store = createStore(guessedwordreducer,{...props});
 
 test('render without error true',()=>{

const wrapper=shallow(<InputClass {...props} store={store}/>).dive().dive()
   const instace=wrapper.instance().props.success;
   expect(instace).toBe(true);
 })

 
})

describe('Class', () => {
    let props={
        success:false
     }
     const store = createStore(guessedwordreducer,{...props});
 
 test('render without error true',()=>{

const wrapper=shallow(<InputClass {...props} store={store}/>).dive().dive()
   const instace=wrapper.instance().props.success;
   expect(instace).toBe(false);
 })

 test('render without error true',()=>{

    const wrapper=shallow(<InputClass {...props} store={store}/>).dive().dive();
       const instace=wrapper.instance().props.success;
       expect(instace).toBe(false);
     })

     test('mock',()=>{

        let loadSpinnermock=jest.fn()
        let props={
           success:true,
           loadSpinner:loadSpinnermock
        }
        const store = createStore(guessedwordreducer,{...props});
        
        const wrapper=shallow(<InputClass {...props} store={store}/>).dive().dive();
        console.log(wrapper.debug())
       const findbyattr=wrapper.find('form');
       findbyattr.simulate('submit')
  
       expect(loadSpinnermock.mock.calls.length).toBe(0);
      
     })
 
})


