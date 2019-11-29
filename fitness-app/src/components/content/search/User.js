import React from 'react'

const User = ({user}) => {
  //const showUsers = () => users.map(user => <User key={email} user={user}/>)
  console.log(user)
  return(
    <div>
      <img src={user.profilepic}/>
      <p>{user.firstname} {user.lastname}</p>
    </div>
  )
}

export default User