import React from 'react'
import Navlink from './Navlink'
import NavDropdown from './NavDropdown'
import SideNav from './SideNav'
import {Link} from 'react-router-dom'

const Navbar = ({pages, users, autPages, setCurrentPage, loggedUser, setLoggedUser, setSingleUser}) => {
  /*
  const showLinks = () => {
    return pages.map(page => <Navlink key={Math.floor(Math.random() * 9999999999)} name={page} setCurrentPage={setCurrentPage} styleAttr='nav-link mouse-pointer'/>)
  }*/
  const showButtons = () => {
    return autPages.map(page => <Navlink key={Math.floor(Math.random() * 9999999999)} name={page} setCurrentPage={setCurrentPage} styleAttr='nav-link mouse-pointer'/>)
  }

  const sideNav = () => {
    return loggedUser.username === undefined ?
    <SideNav />:
    <NavDropdown name={loggedUser.username} setCurrentPage={setCurrentPage} setLoggedUser={setLoggedUser} loggedUser={loggedUser} setSingleUser={setSingleUser} users={users}/>
  }

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand  mouse-pointer"><i className="fas fa-dumbbell"></i> StayFit</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Navlink />
          </ul>

          <div className="form-inline mt-2 mt-md-0">
            <ul className="navbar-nav mr-auto">
              {sideNav()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar