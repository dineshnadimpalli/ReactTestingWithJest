import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../utils/index'

const setUp = (props={})=>{
    const component = shallow(<Header {...props}/>)
    // console.log(component.debug())
    return component
}

describe('Header component', ()=>{

    let component;
    beforeEach(()=>{
        component = setUp();
    })

    it('should render header', ()=>{
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('should render logo', ()=>{
        const wrapper = findByTestAttr(component, 'logoElement')
        expect(wrapper.length).toBe(1)
    })
})

