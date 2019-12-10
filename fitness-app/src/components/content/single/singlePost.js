import React from 'react'
import imageNotFound from './not_found.png'
import { Link, useHistory } from 'react-router-dom'
import userServices from '../../../services/userServices'


const SinglePost = ({ singlePost, singleUser, setSingleUser, user}) => {
    //let author_id = singlePost.author_id
    /*EI TOIMI
    let user = singlePost.user
    console.log(user.username)
    */

   const handleImage = () => singlePost.image === undefined ? imageNotFound: singlePost.image
    return (
        <div id="single-post-template">
            <div className="container single-user-container">
            <div className="card single-user-card" >
                <div className="row no-gutters">
                    <div className="col-md-4 col-xs-12 single-user-top">
                        <img src={handleImage()} className="card-img profile-img bd-placeholder-image " alt="user"/>
                    </div>
                    <div className="col-md-8 col-xs-12">
                        <div className="card-body single-user-bottom">
                            <div className="row justify-content-between">
                                <div className="col-sm-12 col-md-6 text-left">
                                    <h3 className="card-title user-profile-title">StayFit post</h3>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <h3 className="card-title user-profile-title">by <Link to={`/users/u/${singleUser.id}`} className="single-author-link">@{singleUser.username}</Link></h3>
                                </div>
                            </div>
                            <h3 className="card-title text-left"><i class="far fa-heart"></i> 0</h3>
                            <p className="card-text text-muted">Time: {singlePost.date}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-user-description">
                <h3>{singlePost.title}</h3>
                <p>{singlePost.text}</p>
            </div>

            <div className="single-user-posts">
                <h3 className="single-user-posts-title">Comments</h3>
                <div className="single-user-posts-container">
                    <h4 className="single-no-posts">No comments to show</h4>
                </div>
            </div>
          </div>
        </div>
    )
}

export default SinglePost
/*
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
            <Link className="btn btn-lg btn-dark text-light my-2" to={`/posts/p/${singlePost.id}/edit`}>Edit</Link>
        </div>
*/