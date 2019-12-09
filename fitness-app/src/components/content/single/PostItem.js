import React from 'react'
import {
  Link} from 'react-router-dom'

const PostItem = ({content}) => {

  const handleText = () => content.text.length > 90 ? content.text.substring(0, 45) + "..." : content.text

  return(
    <div className="col-lg-5 col-md-12 slide-in">
      <div className="card single-user-post-card">
        <div className="card-body">
          <h3 className="card-title">{content.title}</h3>
          <div className="text-muted"><small>Time: {content.date}</small></div>
          <p className="card-text">{handleText()}</p>
          <Link to={`/posts/p/${content.id}`} className="btn btn-outline-light profile-link">Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default PostItem

/*
<div className="no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative slide-in-left col-xl-5 user-card">
          <div className="col p-4 d-flex flex-column">
            <h3 className="mb-0">{content.title}</h3>
            <div className="mb-1 text-muted">Time: {content.date}</div>
            <p className="mb-auto profile-desc">{handleText()}</p>
            <div className="justify-content-center">
              <Link to={`/users/p/${content.id}`} className="btn btn-outline-light profile-link">Full profile</Link>
            </div>
          </div>
      </div>

      */