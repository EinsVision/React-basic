import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

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
    <Wrapper>
      <div>04.JSX</div>
      <div style={style}>{name}</div>
      <Hello />
      <Hello />
      <Hello />
      <br/>
      <div>05.Props</div>
      <Hello name='basic react' color='red'/>
      <Hello color='pink'/>
      <br/>
      <div>06.Conditional Rendering</div>
      <Hello name='basic react' color='green' isSpecial={true} />
      <Hello name='basic vue' color='purple' isSpecial={false} />
    </Wrapper>
  );
}

export default App;
