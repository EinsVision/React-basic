import React from 'react';

// 비구조할당: 
// function Hello(color, name)
function Hello(props) {
  console.log('props: ', props);
  return (
    <>
      <div style={{
        color: props.color
      }}>
        {/* {props.isSpecial ? <b>*</b> : null} */}
        {props.isSpecial && <b>*</b>}
        Hello React! {props.name}
      </div>
    </>
  )
}

Hello.defaultProps = {
  name: 'No name'
}

export default Hello;