import React from 'react'
import '../../../styles/singleUser.css'
import walter from '../../../img/walter.jpg'
const SingleUser = ({singleUser}) => {

  return(
      <div className="userBox">
          <div className="vasen">
              <img src={walter} alt="user"/>
                  <h3 className="otsikko3">{singleUser.firstname} {singleUser.lastname}</h3>
          </div>
          <div className="oikea">
              <div className="info">
                  <div className="info_data">
                      <div className="data">
                          <h4>Username</h4>
                          <h6>walter95</h6>
                      </div>
                      <div className="data">
                          <h4>Region</h4>
                          <h6>{singleUser.region}</h6>
                      </div>
                  </div>
              </div>

              <div className="projects">
                  <h3 className="otsikko3">Bio</h3>
                  <div className="projects_data">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                  </div>
              </div>
          </div>
      </div>
  )
}

export default SingleUser