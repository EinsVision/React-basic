import React from 'react';

function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: 16
  };

  return (
    <>
      <div style={style}>{children}</div>
      {/*tag와 tag 사이에 넣는 내용을 childer 이라고 한다.*/}
    </>
  )
}

export default Wrapper;