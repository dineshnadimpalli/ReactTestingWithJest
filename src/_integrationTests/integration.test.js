import moxios from 'moxios'
import {fetchPosts} from '../actions'
import {testStore} from '../utils'


describe('fetch post action', ()=>{
    beforeEach(()=>{
        moxios.install()
    })

    afterEach(()=>{
        moxios.uninstall()
    })

    it('Store should be updated correctly', ()=>{
        const expectedState = [
            {
                title: 'Test title 1',
                body: 'Sample text'
            },
            {
                title: 'Test title 2',
                body: 'Sample text'
            },
            {
                title: 'Test title 3',
                body: 'Sample text'
            },
        ]

        const store = testStore()
        
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts())
        .then(()=>{
            const newState = store.getState()
            // console.log('newState------', newState)
            expect(newState.posts).toBe(expectedState)
        })
        // .catch(err=>{
        //     console.log('Error: ', err)
        // })
    })
})