import React from 'react'
import '../../../styles/user.css'
import {
  Link} from 'react-router-dom'

const User = ({user, setSingleUser}) => {
  //console.log(user)
  const handleClick = () => {
    //console.log(user)
    setSingleUser(user)
  }

  const handleDescription = () => user.description.length > 45 ? user.description.substring(0, 45) + "..." : user.description

  return(
    
    <div className="row no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative slide-in-left col-xl-5 user-card">
      <div className="col p-4 d-flex flex-column position-static">
        <h3 className="mb-0">{user.firstname} {user.lastname}</h3>
        <div className="mb-1 text-muted">Region: {user.region}</div>
        <p className="mb-auto profile-desc">{handleDescription()}</p>
        <div className="justify-content-center">
          <Link to={`/users/u/${user.id}`} onClick={handleClick} className="btn btn-outline-light profile-link">Full profile</Link>
        </div>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-image userThumbnail" src={user.profilepic} alt={user.username}/>
      </div>
    </div>
  )
}

export default User