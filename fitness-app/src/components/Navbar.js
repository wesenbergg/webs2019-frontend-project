import React from 'react'

const Navbar = () => {
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
            <li className="nav-item active">
              <a className="nav-link" href="#">Front Page<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Feed</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Q&A</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Faq</a>
            </li>
          </ul>
          <div className="form-inline mt-2 mt-md-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="btn btn-outline-primary" href="#">Front Page<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="#">Feed</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar