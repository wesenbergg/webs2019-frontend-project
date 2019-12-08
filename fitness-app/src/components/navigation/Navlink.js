import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Navlink = ({name, setCurrentPage, styleAttr}) => {
  return(
    <>
    <li className="nav-item"><Link className="nav-link mouse-pointer" to="/">Front Page</Link></li>
    <li className="nav-item"><Link className="nav-link mouse-pointer" to="/posts">Feed</Link></li>
    <li className="nav-item"><Link className="nav-link mouse-pointer" to="/users">Search</Link></li>
    <li className="nav-item"><Link className="nav-link mouse-pointer" to="/about">About</Link></li>
    </>
  )
}       
        
export default Navlink

/*
const handleNavClick = e => setCurrentPage(e.target.title)

  if(name === 'QA'){
    return(
      <>
        <li className="nav-item">
            <span className="nav-link disabled" title={name} onClick={handleNavClick} tabIndex="-1" aria-disabled="true">{name}</span>
        </li>
      </>
    )
  }
  return(
    <>
      <li className="nav-item">
      <Link className="dropdown-item mouse-pointer" to="/signin">asdasdas</Link>
          <span className={styleAttr} title={name} onClick={handleNavClick} tabIndex="-1" aria-disabled="true">{name}</span>
      </li>
    </>
  )
  */