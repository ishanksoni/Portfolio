import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content/Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <Content/>
      </header>
    </div>
  );
}

export default App;
