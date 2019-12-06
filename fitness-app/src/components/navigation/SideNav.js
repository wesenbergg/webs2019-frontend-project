import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const SideNav = ({name, setCurrentPage, styleAttr}) => {
  const handleNavClick = e => setCurrentPage(e.target.title)

  return(
    <>
      <li className="nav-item">
          <span className={styleAttr} title={name} onClick={handleNavClick} tabIndex="-1" aria-disabled="true">{name}</span>
          <Link className="dropdown-item mouse-pointer" to="/signin">Sign in</Link>
      </li>
      <li className="nav-item">
        <Link className="dropdown-item mouse-pointer" to="/signup">Sign Up</Link>
      </li>
    </>
  )
}

export default SideNav

/*
<Link className="dropdown-item mouse-pointer" to="/">Front Page</Link>*/