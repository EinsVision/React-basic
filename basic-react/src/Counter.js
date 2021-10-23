import React, { useState } from 'react';

function Counter() {

  const [number, setNumber] = useState(0);
  const onIncrease = () =>{
    // console.log('+1');
    // setNumber(number + 1);
    setNumber(preNumber => preNumber + 1); // 프로그램 최적화와 관련이 있는 함수 형태이다.
  }

  const onDecrease = () => {
    // console.log('-1');
    // setNumber(number - 1);
    setNumber(preNumber => preNumber - 1);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  )
}

export default Counter;