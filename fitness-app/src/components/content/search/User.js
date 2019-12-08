import React from 'react'
import '../../../styles/user.css'
import {
  Link} from 'react-router-dom'

const User = ({user, setSingleUser}) => {
  //console.log(user)
  const handleClick = () => {
    setSingleUser(user)
    //setCurrentPage('User Page')
  }

  const handleDescription = () => user.description.length > 90 ? user.description.substring(0, 90) + "..." : user.description

  return(
    
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static bg-light">
        <h3 className="mb-0">{user.firstname} {user.lastname}</h3>
        <div className="mb-1 text-muted">Region: {user.region}</div>
        <p className="mb-auto profile-desc">{handleDescription()}</p>
        <div className="justify-content-center">
          <Link to={`/users/u/${user.id}`} onClick={handleClick} className="btn btn-dark text-light profile-link">Full profile</Link>
        </div>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-image" src={user.profilepic} alt={user.username}/>
      </div>
    </div>
  )
}

export default User