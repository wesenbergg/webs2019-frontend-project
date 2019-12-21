import React from 'react'
import '../../../styles/singleUser.css'
import PostItem from './PostItem'
import {Link} from 'react-router-dom'

const SingleUser = ({singleUser, loggedUser}) => {
    
    const showPosts = () => {
        console.log(singleUser.posts)
        return (singleUser.posts === undefined || singleUser.posts.length < 1) ?
        <h4 className="single-no-posts">No posts to show</h4> :
        <div className="row justify-content-around">{singleUser.posts.map(p => <PostItem key={Math.floor(Math.random() * 9999999)} content={p}/>)}</div>
    }

    const showButtons = () => {
        if (singleUser.username === loggedUser.username)
            return (
                <div className="row text-center d-flex justify-content-end single-user-full-width">
                    <div className="col-auto text-right">
                        <Link to="/posts/new" className="btn btn-outline-light">Add Post</Link>
                    </div>
                    <div className="col-auto text-left">
                        <Link to="/users/profile/edit" className="btn btn-outline-light">Edit</Link>
                    </div>
                </div>
            )
    }

  return(
      <div className="single-user">
          <div className="container single-user-container">
            {showButtons()}
            <div className="card single-user-card" >
                <div className="row no-gutters">
                    <div className="col-md-4 col-xs-12 single-user-top">
                        <img src={singleUser.profilepic} className="card-img profile-img bd-placeholder-image " alt="user"/>
                    </div>
                    <div className="col-md-8 col-xs-12">
                        <div className="card-body single-user-bottom">
                            <div className="row justify-content-between">
                                <div className="col-sm-12 col-md-6 text-left">
                                    <h3 className="card-title user-profile-title">User Profile</h3>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <h3 className="card-title user-profile-title">@{singleUser.username}</h3>
                                </div>
                            </div>
                            <h3 className="card-title text-left">{singleUser.firstname} {singleUser.lastname}</h3>
                            <p className="card-text text-muted">Region: {singleUser.region}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-user-description">
                <h3>Description:</h3>
                <p>{singleUser.description}</p>
            </div>

            <div className="single-user-posts">
                <h3 className="single-user-posts-title">Posts</h3>
                <div className="single-user-posts-container">
                    {showPosts()}
                </div>
            </div>
          </div>
      </div>
  )
}

export default SingleUser

/*
<div className="userBox styling">
          <div className="vasen">
              <img src={walter} alt="user"/>
                  <h3 className="otsikko3">{singleUser.firstname} {singleUser.lastname}</h3>
          </div>
          <div className="oikea">
              <div className="info">
                  <div className="info_data">
                      <div className="data">
                          <div className="buttons">
                          <h4>Username</h4>
                          <h6>walter95</h6>
                          </div>
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
      */