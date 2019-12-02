import React from 'react'

const User = ({user, setSingleUser ,setCurrentPage}) => {
  const handleClick = e => {
    setSingleUser(user)
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