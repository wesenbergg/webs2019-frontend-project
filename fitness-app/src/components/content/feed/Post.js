import React from 'react'
import postServices from '../../../services/postServices'
import { Link } from 'react-router-dom'
import '../../../styles/post.css'

// yksittäinen posti (singlePost) ei saa propseinaan setCurrentPagea tai setSinglePostia (ne ovat 'undefined')
// tällöin halutaan onClick, joka ei tee mitään (parempaa ratkaisua odotellessa :D)... 
function handleClick({ setCurrentPage, setSinglePost, id }) {
    if (setCurrentPage !== undefined || setSinglePost !== undefined) {
        postServices.getById(id)
            .then(post => {
                setSinglePost(post)
            })
    }
}

const PostImage = ({ image_url }) => {
    if (image_url === null || image_url === undefined || image_url === "") return null
    if (image_url.includes('/assets/images')) {
        return (
            <a target="_blank" href={`${process.env.PUBLIC_URL}${image_url}`}>
                <img className="postThumbnail" src={`${process.env.PUBLIC_URL}${image_url}`} />
            </a>
        )
    }
    return (
        <a target="_blank" href={image_url}>
            <img className="postThumbnail" src={image_url} />
        </a>
    )
}

const Post = ({ title, text, image_url, date, setCurrentPage, setSinglePost, author_name, id }) => {
    return (
        <div className="horizontalPost">
            <h4 className="postTitle mouse-pointer" onClick={() => handleClick({ setCurrentPage, setSinglePost, id })}><Link className="postTitle" to={`/posts/p/${id}`} >{title}</Link></h4>
            <div className="postContent">
                <PostImage image_url={image_url} />
                <p className="card-text">{text}</p>
            </div>
            <p className="card-text"><small className="text-muted">From: <span className="card-link author-link mouse-pointer">{author_name}</span> {date}</small></p>
        </div>
    )
}
export default Post