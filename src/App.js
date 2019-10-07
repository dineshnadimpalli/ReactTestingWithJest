import React from 'react';
import Header from './components/header/index';
import HeadLine from './components/headLine/index';
import './app.scss'

function App() {
  return (
    <div>
      <Header />
      <section className='main'>
        <HeadLine header='Posts' desc='Click the button to render props'/>
      </section>
    </div>
  );
}

export default App;
