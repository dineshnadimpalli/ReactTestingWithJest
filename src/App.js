import React, { Component } from 'react';
import Header from './components/header/index';
import HeadLine from './components/headLine/index';
import './app.scss'

const tmpArr = [{
  fName: 'Dinesh',
  lName: 'Nadimpalli',
  email: 'dinesh@gmail.com',
  age: 22,
  onlineStatus: true
}]

class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <section className='main'>
          <HeadLine header='Posts' desc='This is a sample post' tmpArr={tmpArr}/>
        </section>
      </div>
    );
  }
}

export default App;
