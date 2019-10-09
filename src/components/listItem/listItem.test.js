import React from 'react'
import { checkProps, findByTestAttr } from '../../utils/index'
import { shallow } from 'enzyme'
import ListItem from './index'


describe('ListItem component', ()=>{
    describe('Checking propTypes', ()=>{
        it('Should not throw warning', ()=>{
            const expectedProps = {
                title: 'Test title',
                desc: 'Test desc'
            }

            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined()
        })
    })


    describe('Renders ListItem', ()=>{

        let wrapper;
        beforeEach(()=>{
            const props = {
                title: 'Test title',
                desc: 'Test desc'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1)
        })

        it('Should render a title', ()=>{
            const component = findByTestAttr(wrapper, 'componentTitle')
            expect(component.length).toBe(1)
        })

        it('Should render a description', ()=>{
            const component = findByTestAttr(wrapper, 'componentDesc')
            expect(component.length).toBe(1)
        })
        
    })


    describe('Should not render', ()=>{

        let wrapper;
        beforeEach(()=>{
            const props = {
                desc: 'Test desc'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Component should not render', ()=>{
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(0)
        })
    })
})