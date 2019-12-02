import React from 'react'
import User from './User'
import Filter from './Filter'

const Search = ({showUsers, filter, setFilter, setCurrentPage, setSingleUser}) => {
  //console.log(showUsers)
  //console.log(filter)
  const filterUsers = () => {
    let filteredUsers = showUsers.filter(u => u.firstname.toLowerCase().includes(filter.toLowerCase()) ||
    u.lastname.toLowerCase().includes(filter.toLowerCase()) || u.username.toLowerCase().includes(filter.toLowerCase()))
    return filteredUsers.map(user => <User key={user.email} user={user} setCurrentPage={setCurrentPage} setSingleUser={setSingleUser}/>)
  }

  return(
    <div className='container'>
      <h3 className="search-title"> Search users: </h3>
      <Filter showFilter={filter} setFilter={setFilter}/>
      {filterUsers()}
    </div>
  )
}

export default Search