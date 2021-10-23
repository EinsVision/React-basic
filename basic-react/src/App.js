import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'Practice Basic React';
  const style = {
    backgroundColor: 'black',
    color: 'tomato',
    fontSize: 24, 
    padding: '1rem',
  }
  return (
    <div className="app">
      <div>04.JSX</div>
      <div style={style}>{name}</div>
      <Hello />
      <Hello />
      <Hello />
      <div>05.Props</div>
    </div>
  );
}

export default App;
