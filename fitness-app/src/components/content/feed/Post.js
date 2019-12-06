import React from 'react'
import postServices from '../../../services/postServices'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

// Vertaa postauksen id:tä ja käyttäjälistan henkilöiden id:tä
const findAuthorname = (author_id, users) => {
    const author = users.find(user => author_id === user.id)
    return author.username
}

// yksittäinen posti (singlePost) ei saa propseinaan setCurrentPagea tai setSinglePostia (ne ovat 'undefined')
// tällöin halutaan onClick, joka ei tee mitään (parempaa ratkaisua odotellessa :D)... 
function handleClick({ setCurrentPage, setSinglePost, id }) {
    if (setCurrentPage !== undefined || setSinglePost !== undefined) {
        postServices.getById(id)
            .then(post => {
                setSinglePost(post)
            })
        //setCurrentPage('Post Page')
        console.log('click')
    }
}

// Kaksi vaihtoehtoista postausta, kuvallinen ja ilman kuvaa
const Post = ({ title, text, author_id, image_url, date, setCurrentPage, setSinglePost, author_name, id }) => {
    if (image_url === null || image_url === undefined || image_url === "")
        return (
            <div className="mx-auto post-thumb" align="center">
                <div className="card mb-3" className="horizontalPost">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="card-body fix">
                            <h4 className="card-title mouse-pointer" onClick={() => handleClick({ setCurrentPage, setSinglePost, id })}><Link to={`/posts/${id}`} >{title}</Link></h4>
                                <p className="card-text">{text}</p>
                                <p className="card-text"><small className="text-muted">From: <span className="card-link author-link mouse-pointer">{author_name}</span> {date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    if (image_url.includes('/assets/images')) {
        return (
            <div className="mx-auto post-thumb" align="center">
                <div className="card mb-3" className="horizontalPost">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`${process.env.PUBLIC_URL}${image_url}`} className="card-img" alt="Image not found" />
                        </div>
                        <div className="col-md-8 fix">
                            <div className="card-body ">
                            <h4 className="card-title mouse-pointer" onClick={() => handleClick({ setCurrentPage, setSinglePost, id })}><Link to={`/posts/${id}`} >{title}</Link></h4>
                                <p className="card-text">{text}</p>
                                <p className="card-text"><small className="text-muted">From: <span className="card-link author-link mouse-pointer">{author_name}</span> {date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="mx-auto post-thumb" align="center">
                <div className="card mb-3" className="horizontalPost">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={image_url} className="card-img" className="card-img" alt="No image found" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body fix">
                                <h4 className="card-title mouse-pointer" onClick={() => handleClick({ setCurrentPage, setSinglePost, id })}><Link to={`/posts/${id}`} >{title}</Link></h4>
                                <p className="card-text">{text}</p>
                                <p className="card-text"><small className="text-muted">From: <span className="card-link author-link mouse-pointer">{author_name}</span> {date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post