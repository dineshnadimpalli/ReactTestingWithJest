import React from 'react'
import { shallow } from 'enzyme'
import HeadLine from './index'
import { findByTestAttr, checkProps } from '../../utils/index'

const setUp = (props ={})=>{
    const component = shallow(<HeadLine {...props}/>)
    return component;
}

describe('headLine componet test', ()=>{

    describe('Checking props', ()=>{
        let component;
        beforeEach(()=>{
            component = setUp();
        })
        
        it('should not throw proptype warnings', ()=>{
            const expectedProps = {
                header: 'Test header',
                desc: 'Test desc',
                tmpArr: [{
                    fName: 'Test Name',
                    lName: 'Test Name',
                    email: 'Testemail@gmail.com',
                    age: 22,
                    onlineStatus: true
                }]
            }

            const propsErr = checkProps(component, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })
    
    describe('headLine with props', ()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props);
        })

        it('Should render component without errors', ()=>{
            const component = findByTestAttr(wrapper, 'headLineComponent')
            expect(component.length).toBe(1);
        })

        it('should render title', ()=>{
            const title = findByTestAttr(wrapper, 'title')
            expect(title.length).toBe(1);
        })

        it('should render description', ()=>{
            const desc = findByTestAttr(wrapper, 'description')
            expect(desc.length).toBe(1);
        })
    })

    describe('headLine without props', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        })

        it('should not render component', ()=>{
            const component = findByTestAttr(wrapper, 'headLineComponent')
            expect(component.length).toBe(0)
        })
    })
})