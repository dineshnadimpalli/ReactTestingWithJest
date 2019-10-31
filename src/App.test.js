import React from "react";
// import {Provider} from 'react-redux'
// import ReactDOM from 'react-dom';
// import {store} from './createStore'
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "./utils";
import App from "./App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store}/>).childAt(0).dive();    
  // console.log(wrapper.debug())
  return wrapper;
};

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//       <Provider store={store}>
//         <App />
//       </Provider>,
//       div);
//       ReactDOM.unmountComponentAtNode(div);
// });

describe("Testing App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Example body 1"
        },
        {
          title: "Example title 2",
          body: "Example body 2"
        },
        {
          title: "Example title 3",
          body: "Example body 3"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });


  it("hideButton method should change state as expected", ()=>{
    const classInstance = wrapper.instance()
    classInstance.hideButton()
    const newState = classInstance.state.hidebtn 
    expect(newState).toBe(true)
  })

  it("testReturnMethod method should change state as expected", ()=>{
    const classInstance = wrapper.instance()
    const newValue = classInstance.testReturnMethod(6)
    expect(newValue).toBe(7)
  })
});
