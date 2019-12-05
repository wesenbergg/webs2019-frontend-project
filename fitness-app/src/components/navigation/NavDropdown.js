import React from 'react'

const NavDropdown = ({name, setCurrentPage, setLoggedUser}) => {
  const handleNavClick = e => setCurrentPage(e.target.title)
  const handleNewPostClick = e => setCurrentPage('New Post')

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
          <span className="dropdown-item mouse-pointer" title={'EditProfile'} onClick={handleNavClick}><i className="fas fa-user-circle"></i> Profile</span>
          <span className="dropdown-item mouse-pointer" title={'Front Page'} onClick={handleNewPostClick} disabled><i className="fas fa-plus"></i> Add post</span>
          <span className="dropdown-item mouse-pointer" onClick={handleLogOut}><i className="fas fa-sign-out-alt"></i> Log out</span>
        </div>
      </li>
    </>
  )
}

export default NavDropdown