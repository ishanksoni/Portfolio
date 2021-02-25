import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Content from './components/content/Content'
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = { currsection : "Bio" };
  }

  handelOnClick = (section) =>{
    // console.log(this.state.currsection + "--before")
    console.log(section)
    this.setState({
      currsection:section 
    }) 
    // console.log(this.state.currsection + "--after")

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav handelOnClick = {this.handelOnClick} />
          <Content section = {this.state.currsection} />
        </header>
      </div>
    );
  }
}

export default App
