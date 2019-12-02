import React from 'react'

const NavDropdown = ({name, setCurrentPage}) => {
  const handleNavClick = e => setCurrentPage(e.target.title)

  return(
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Logged in as, {name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#"><i class="fas fa-user-circle"></i> Profile</a>
          <a className="dropdown-item" href="#"><i className="fas fa-plus"></i> Add post</a>
          <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i> Log out</a>
        </div>
      </li>
    </>
  )
}

export default NavDropdown

/*
 <li className="nav-item">
          <a className={styleAttr} title={name} onClick={handleNavClick} tabIndex="-1" aria-disabled="true">{name}</a>
      </li>*/