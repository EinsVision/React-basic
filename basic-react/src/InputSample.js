import React, { useState } from 'react';

function InputSample() {

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onReset = (e) => {
    setText('');
  }

  return (
    <>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>Initialize</button>
      <div>
        <b>value: {text}</b>
      </div>
    </>
  )
}

export default InputSample;