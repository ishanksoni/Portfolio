import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content/Content'
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Content/>
      </header>
    </div>
  );
}

export default App;
