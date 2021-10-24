import React, { useState, useRef } from 'react';

function InputSamples() {

  // 현재 focus를 name input 에 넣고 싶다. useRef()를 통해 객체가 만들어 진다.
  const nameInput = useRef();

  // useState로 객체 헝태의 상태를 관리해준다.
  const [inputs, setInputs] = useState({
    name: '', 
    nickname: '',
  });

  // name과 nickname을 쉽게 사용할 수 있도록 비구조할당을 해서 추출해 준다.
  const { name, nickname } = inputs;
  
  const onChange = (e) => {
    const { name, value } = e.target;
    
    // 기존의 객체를 복사한다.
    const nextInputs = {
      ...inputs, // 기존의 객체를 복사하는 문법 (spread 문법)
      [name]: value,
    };

    // 객체를 업데이트 한다.
    setInputs(nextInputs);

    // console.log(e.target.name);
    // console.log(e.target.value);
  }

  const onReset = () => {
    console.log('onReset button clicked');
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  }

  return (
    <>
      <input 
        type='text' 
        name='name' 
        placeholder='name' 
        onChange={onChange} 
        value={name}
        ref={nameInput}
      />
      <input 
        type='text' 
        name='nickname' 
        placeholder='nickname' 
        onChange={onChange} 
        value={nickname}
        // ref={nameInput}
      />
      <button onClick={onReset}>Initialize</button>
      <div>
        <b>value:
          {name} ({nickname})
        </b>
      </div>
    </>
  )
}

export default InputSamples;