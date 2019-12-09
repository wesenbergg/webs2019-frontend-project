import React from 'react'
import User from './User'
import Filter from './Filter'

const Search = ({users, filter, setFilter, setCurrentPage, setSingleUser}) => {
  //console.log(showUsers)
  //console.log(filter)
  const filterUsers = () => {
    let filteredUsers = users.filter(u => u.firstname.toLowerCase().includes(filter.toLowerCase()) ||
    u.lastname.toLowerCase().includes(filter.toLowerCase()) || u.username.toLowerCase().includes(filter.toLowerCase()))
    return filteredUsers.map(user => <User key={user.email} user={user} setCurrentPage={setCurrentPage} setSingleUser={setSingleUser}/>)
  }

  return(
    <div id="search-container">
      <div  className='container'>
      <div className="fade-in row justify-content-between">
        <div className="col-md-4 text-left">
        <h3 className="search-title"> Search users: </h3>
        </div>
        <div className="col-md-4">
        <Filter showFilter={filter} setFilter={setFilter}/>
        </div>
      </div>
      <div className="user-container row justify-content-around no-gutters">
        {filterUsers()}
      </div>
    </div>
    </div>
    
  )
}

export default Search