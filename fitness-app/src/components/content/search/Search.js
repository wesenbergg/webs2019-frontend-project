import React from 'react'
import User from './User'
import Filter from './Filter'

const Search = ({showUsers, setShowUsers, filter, setFilter}) => {
  console.log(showUsers)
  console.log(filter)
  const filterUsers = () => {
    let filteredUsers = showUsers.filter(u => u.email.toLowerCase().includes(filter.toLowerCase()))
    return filteredUsers.map(user => <User key={user.email} user={user}/>)
  }

  return(
    <div className='container'>
      <Filter showFilter={filter} setFilter={setFilter}/>
      {filterUsers()}
    </div>
  )
}

export default Search