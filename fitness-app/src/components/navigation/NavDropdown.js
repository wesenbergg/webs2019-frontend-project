import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const NavDropdown = ({name, users, setLoggedUser, setSingleUser, loggedUser}) => {
  const handleOnProfileClick = () => {
    let foundUser = users.find(u => u.username === loggedUser.username)
    console.log(foundUser)
    setSingleUser(foundUser)
  }

  const handleLogOut = e => {
    setLoggedUser({})
    window.localStorage.removeItem('loggedFitnessAppUser')
  }

  //TODO: Add Post
  return(
    <>
      <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle mouse-pointer" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Logged in as, {name}
        </span>
        <div className="dropdown-menu profile-links" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item mouse-pointer" to="/users/profile" onClick={handleOnProfileClick}><i className="fas fa-user-circle"></i> Profile</Link>
          <Link className="dropdown-item mouse-pointer" to="/posts/new"><i className="fas fa-plus"></i> Add post</Link>
          <Link className="dropdown-item mouse-pointer" onClick={handleLogOut} to="/"><i className="fas fa-sign-out-alt"></i> Log out</Link>
        </div>
      </li>
    </>
  )
}

export default NavDropdown