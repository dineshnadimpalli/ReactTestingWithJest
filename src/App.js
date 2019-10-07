import React, { Component } from 'react';
import Header from './components/header/index';
import HeadLine from './components/headLine/index';
import './app.scss'

const tmpArr = [{
  fName: 'Dinesh',
  lName: 'Nadimpalli',
  email: 'dinesh@gmail.com',
  age: '',
  onlineStatus: true
}]

class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <section className='main'>
          <HeadLine header='Posts' desc='Click the button to render props' tmpArr={tmpArr}/>
        </section>
      </div>
    );
  }
}

export default App;
