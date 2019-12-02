import React from 'react'

const User = ({user, setCurrentPage}) => {
  const handleClick = e => {
    setCurrentPage('User Page')
  }

  return(
    <div>
      <img src={user.profilepic}/>
      <p onClick={handleClick} title={user.firstname}>{user.firstname} {user.lastname}</p>
    </div>
  )
}

export default User