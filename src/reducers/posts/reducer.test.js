import { types } from '../../actions/types'
import postsReducer from './reducer'
import reducer from './reducer';
import { expression } from '@babel/template';


describe('Posts reducer', ()=>{
    it('Should return default state', ()=>{
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([])
    })

    it('Should return new state when types are passed', ()=>{
        const posts = [
            {
                title: 'Test 1'
            },
            {
                title: 'Test 2'
            },
            {
                title: 'Test 3'
            }
        ]

        const newState = postsReducer(
            undefined, 
            {
                type: types.GET_POSTS,
                payload: posts
            }
        )

        expect(newState).toEqual(posts)
    })
})