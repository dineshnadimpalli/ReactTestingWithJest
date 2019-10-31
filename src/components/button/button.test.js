import React from 'react'
import { checkProps, findByTestAttr } from '../../utils/index'
import { shallow } from 'enzyme'
import SharedButton from './index'


describe('SharedButton component', ()=>{
    describe('Checking propTypes', ()=>{
        it('Should not throw warning', ()=>{
            const expectedProps = {
                buttonText: 'Test button',
                emitEvent: () => {

                }
            }

            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined()
        })
    })


    describe('Renders button', ()=>{

        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn()

            const props = {
                buttonText: 'Test button',
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props}/>)
        })

        it('Should render a button', ()=>{
            const button = findByTestAttr(wrapper, 'buttonComponent')
            expect(button.length).toEqual(1)
        })

        it('Should emit callback on click event', ()=>{
            const button = findByTestAttr(wrapper, 'buttonComponent')
            button.simulate('click')
            const callback = mockFunc.mock.calls.length
            expect(callback).toBe(1)
        })
    })
})