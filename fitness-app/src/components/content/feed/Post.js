import React from 'react'
import postServices from '../../../services/postServices'
import { Link } from 'react-router-dom'
import '../../../styles/post.css'

// yksittäinen posti (singlePost) ei saa propseinaan setCurrentPagea tai setSinglePostia (ne ovat 'undefined')
// tällöin halutaan onClick, joka ei tee mitään (parempaa ratkaisua odotellessa :D)... 
function handleClick({ setCurrentPage, setSinglePost, id }) {
    console.log('click')
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

// Näyttää postauksesta vain 200 ensimmäistä merkkiä (koko postaus tai sampleText)
// Merkin 200 jälkeinen teksti katkaistaan seuraavaan ' ', jotta viimeinen sana on kokonainen
// Ilman välilyöntiä näytetään seuraavat 25 merkkiä 
const PostText = ({ text, id, setSinglePost, setCurrentPage }) => {
    if (text.length < 200) {
        return (
            <p className="postContent">{text}</p>
        )
    }
    var sampleText = text.slice(0, 200)
    var remainder = text.slice(200, 225)
    return (
        <div>
            <p className="postContent">{sampleText + (remainder.includes(' ') ? remainder.split(' ', 1) + '...' : '...')} </p>
            <button className="postShowMore" onClick={() => handleClick({ setCurrentPage, setSinglePost, id })}> <Link className="postTitle" to={`/posts/p/${id}`} > show more</Link></button>
        </div>
    )
}
const Post = ({ title, text, image_url, date, setCurrentPage, setSinglePost, author_name, id }) => {
    return (
        <div className="horizontalPost">
            <h4 className="postTitle mouse-pointer" onClick={() => handleClick({ setCurrentPage, setSinglePost, id })}><Link className="postTitle" to={`/posts/p/${id}`} >{title}</Link></h4>
            <div className="postContent">
                <PostImage image_url={image_url} />
                <PostText text={text} id={id} setSinglePost={setSinglePost} setCurrentPage={setCurrentPage} />
            </div>
            <p className="card-text"><small className="text-muted">From: <span className="card-link author-link mouse-pointer">{author_name}</span> {date}</small></p>
        </div>
    )
}
export default Post