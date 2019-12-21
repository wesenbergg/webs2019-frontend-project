import React from 'react'
import postServices from '../../../services/postServices'
import { Link } from 'react-router-dom'
import '../../../styles/post.css'
import userServices from '../../../services/userServices'

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

const Post = ({ content, setSinglePost, setSingleUser }) => {
    const handleClick = () => {
        //console.log(content)
        setSingleUser(content.user)
        setSinglePost(content)
    }

    const handleText = () => content.text.length > 45 ? content.text.substring(0, 45) + "..." : content.text

    return (
        <div className="row no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative slide-in-left col-xl-5 user-card">
            <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0"><Link className="postTitle" to={`/posts/p/${content.id}`} onClick={handleClick} >{content.title}</Link></h3>
                <div className="mb-1 text-muted"><small className="text-muted">Time: {content.date}</small></div>
                <p className="mb-auto profile-desc">{handleText()}</p>
            </div>
            <div className="col-auto d-none d-lg-block">
                <PostImage image_url={content.image} />
            </div>
        </div>
    )
}
export default Post

/*
<div className="horizontalPost">
            <h4 className="postTitle mouse-pointer">
                <Link className="postTitle" to={`/posts/p/${content.id}`} onClick={handleClick} >{content.title}</Link>
            </h4>
            <div className="postContent">
                <PostImage image_url={content.image} />
                <p className="text-muted">{content.text}</p>
            </div>
            <p>
                <small className="text-muted">Time: {content.date}</small>
            </p>
        </div>
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
}*/