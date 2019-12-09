import React from 'react'
import postServices from '../../../services/postServices'
import { Link } from 'react-router-dom'
import '../../../styles/post.css'
import userServices from '../../../services/userServices'

// yksittäinen posti (singlePost) ei saa propseinaan setCurrentPagea tai setSinglePostia (ne ovat 'undefined')
// tällöin halutaan onClick, joka ei tee mitään (parempaa ratkaisua odotellessa :D)... 
function handlePostClick({ setSinglePost, id, setSingleUser, author_id }) {
    if (setSinglePost !== undefined) {
        postServices.getById(id)
            .then(post => {
                setSinglePost(post)
            })
    }
    handleProfileClick({ setSingleUser, author_id })
}

// Metodi joka päivittää singleUser -staten postauksen kirjoittaneeksi käyttäjäksi
function handleProfileClick({ setSingleUser, author_id }) {
    if (setSingleUser !== undefined) {
        userServices.getById(author_id)
            .then(user => {
                setSingleUser(user)
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
// Jos ei ole välilyöntiä tekstiin lisätään vain '...'
const PostText = ({ text, id, setSinglePost, setSingleUser, author_id }) => {
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
            <button className="postShowMore" onClick={() => handlePostClick({ setSinglePost, setSingleUser, id, author_id })}>
                <Link className="postTitle" to={`/posts/p/${id}`} > show more</Link></button>
        </div>
    )
}
const Post = ({ title, text, image_url, date, setSinglePost, author_name, author_id, id, setSingleUser }) => {
    return (
        <div className="horizontalPost">
            <h4 className="postTitle mouse-pointer" onClick={() => handlePostClick({ setSinglePost, setSingleUser, id, author_id })}>
                <Link className="postTitle" to={`/posts/p/${id}`} >{title}</Link></h4>
            <div className="postContent">
                <PostImage image_url={image_url} />
                <PostText text={text} id={id} setSinglePost={setSinglePost} />
            </div>
            <p><small className="text-muted">From: <span className="card-link author-link mouse-pointer">
                <Link to={`/users/u/${author_id}`} onClick={() => handleProfileClick({ setSingleUser, author_id })}>
                    {author_name}
                </Link>
            </span>
                {date}
            </small>
            </p>
        </div>
    )
}
export default Post