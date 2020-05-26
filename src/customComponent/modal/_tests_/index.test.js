import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SimpleModal from '../index.js';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Render without error SimpleModal', () => {
    let props={}
    beforeEach(()=>{
        props={
            addPost:jest.fn(),
            manu:'manhh'
        }
    })
  
    test('input value SimpleModal', () => {
        const wrapper = shallow(<SimpleModal {...props}/>)
       const findbtattr=wrapper.find('[data-test="sample"]')
       const res=findbtattr.get(0).props.open;
    expect(res).toBe(false);
    })

    test('input value SimpleModal', () => {
        const wrapper = shallow(<SimpleModal {...props}/>)
       const findbtattr=wrapper.find('button')
      findbtattr.simulate('click');
      const findbtattr1=wrapper.find('[data-test="sample"]')
      const res=findbtattr1.get(0).props;
      expect(res.open).toBe(true);
    })
})
