import React, { useRef } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSamples from './InputSamples';
import UserList from './UserList';

function App() {

  const users = [
    {
      id: 1,
      username: 'jcdlove',
      email: 'jcdlove@naver.com', 
    },
    {
      id: 2,
      username: 'einsvision',
      email: 'einsvision@gmail.com', 
    },
    {
      id: 3,
      username: 'example',
      email: 'example@nate.com', 
    },
  ];

  // 어떤 변수를 계속 기억하고 싶을 때 useRef를 써서 관리한다.
  // 왜냐하면 rerendering되는 것이 아니기 때문에 useRef를 사용한다.
  const nextId = useRef(4);
  
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

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

      <br />
      <div>07.useState</div>
      <Counter />

      <br />
      <div>08.Manage input state</div>
      <InputSample />

      <br />
      <div>09.Manage multi input states</div>
      <InputSamples />

      <br />
      <div>10.Selects specific DOM using useRef</div>

      <br />
      <div>11.Array Rendering</div>
      <UserList users={users}/>

      <br />
      <div>12.Makes variable inside component using useRef</div>
      <UserList users={users}/>

    </Wrapper>
  );
}

export default App;
