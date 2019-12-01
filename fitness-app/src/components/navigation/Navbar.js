import React from 'react'
import Navlink from './Navlink'

const Navbar = ({pages, autPages, setCurrentPage}) => {
  const showLinks = () => {
    return pages.map(page => <Navlink key={Math.floor(Math.random() * 9999999999)} name={page} setCurrentPage={setCurrentPage} styleAttr='nav-link'/>)
  }
  const showButtons = () => {
    return autPages.map(page => <Navlink key={Math.floor(Math.random() * 9999999999)} name={page} setCurrentPage={setCurrentPage} styleAttr='nav-link'/>)
  }

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="#"><i className="fas fa-dumbbell"></i> Fitness App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {showLinks()}
          </ul>

          <div className="form-inline mt-2 mt-md-0">
            <ul className="navbar-nav mr-auto">
              {showButtons()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar