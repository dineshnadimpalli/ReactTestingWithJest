import React, { Component } from 'react';
import Header from './components/header/index';
import HeadLine from './components/headLine/index';
import ListItem from './components//listItem'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'
import './app.scss'
import SharedButton from './components/button/';

const tmpArr = [{
  fName: 'Dinesh',
  lName: 'Nadimpalli',
  email: 'dinesh@gmail.com',
  age: 22,
  onlineStatus: true
}]

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hidebtn: false
    }
  }

  fetch(){
    console.log('fetch called')
    this.props.getPosts()
    this.hideButton()
  }

  hideButton = ()=>{
    const { hidebtn } = this.state
    this.setState({
      hidebtn: !hidebtn
    })
  }

  testReturnMethod = (a)=>{
    return a+1
  }

  render(){

    const {posts} = this.props;
    const { hidebtn } = this.state 

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: ()=>{
        this.fetch()
      }
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className='main'>
          <HeadLine 
              header='Posts' 
              desc='Click on the button to get the posts' 
              tmpArr={tmpArr}
          />
          {
            !hidebtn && 
            <SharedButton {...configButton} />
          }
          
          {
            posts.length>0 && 
            <div>
              {
                posts.map((post, index)=>{
                  const {title, body} = post;
                  const listConfig = {
                    title,
                    desc: body
                  }

                  return <ListItem {...listConfig} key={index}/>
                })
              }
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  // console.log("state------", state)
  return ({
    posts: state.posts,
  })
}

const mapDispatchToProps = (dispatch)=>({
    getPosts: ()=>{
      dispatch(fetchPosts())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
