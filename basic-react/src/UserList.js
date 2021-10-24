import React from 'react';

function User({ user }){
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  

  return (
    <>
      {/* <User user={users[0]} />
          <User user={users[1]} />
          <User user={users[2]} /> */}

      {/* 위 내용 대신 map function을 사용한다. */}

      {
        users.map(
          user => (<User user={user} key={user.id} />)
        )
      }
    </>
  )
}

export default UserList;