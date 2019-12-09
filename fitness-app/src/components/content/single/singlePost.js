import React from 'react'
import '../../../styles/post.css'
import { Link, useHistory } from 'react-router-dom'
import userServices from '../../../services/userServices'

function handleProfileClick({ setSingleUser, author_id }) {
    if (setSingleUser !== undefined) {
        userServices.getById(author_id)
            .then(user => {
                setSingleUser(user)
            })
    }
}

// Tarkoitus olisi hakea käyttäjän profiilikuva users:sta
const ProfilePic = ({ author_id, setSingleUser }) => {
    return (
        <Link to={`/users/u/${author_id}`} onClick={() => handleProfileClick({ setSingleUser, author_id })}>
            <img className="singlePostAuthorInfo" src={`${process.env.PUBLIC_URL}/assets/images/default_avatar.png`} />
        </Link>
    )
}

const SinglePostImage = ({ imageSrc }) => {
    if (imageSrc === null || imageSrc === undefined || imageSrc === "") return null
    if (imageSrc.includes('/assets/images')) {
        return (
            <a target="_blank" href={`${process.env.PUBLIC_URL}${imageSrc}`}>
                <img className="postThumbnail" src={`${process.env.PUBLIC_URL}${imageSrc}`} />
            </a>
        )
    }
    return (
        <a target="_blank" href={imageSrc}>
            <img className="postThumbnail" src={imageSrc} />
        </a>
    )
}
const SinglePost = ({ singlePost, setSingleUser }) => {
    let author_id = singlePost.author_id
    return (
        <div className="singlePostOuter">
            <div className="singlePostInner">
                <h3 className="singlePostTitle">{singlePost.title}</h3>
                <section className="singlePostAuthorInfo">
                    <div>
                        <ProfilePic author_id={author_id} setSingleUser={setSingleUser} />
                    </div>
                    <div>
                        <p><Link to={`/users/u/${author_id}`} onClick={() => handleProfileClick({ setSingleUser, author_id })}>
                            {singlePost.author_name}</Link> {singlePost.date}</p>
                    </div>
                </section>
                <div className="singlePostContent">
                    <SinglePostImage imageSrc={singlePost.image} />
                    <p className="singlePostContent">{singlePost.text}</p>
                </div>
            </div>
            <Link className="editPost" to={`/posts/p/${singlePost.id}/edit`}>Edit</Link>
        </div>
    )
}

export default SinglePost