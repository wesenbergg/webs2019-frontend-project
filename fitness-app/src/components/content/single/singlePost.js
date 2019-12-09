import React from 'react'
import '../../../styles/post.css'

// Tarkoitus olisi hakea käyttäjän profiilikuva users:sta
const ProfilePic = () => {
    return (
        <img className="singlePostAuthorInfo" src={`${process.env.PUBLIC_URL}/assets/images/default_avatar.png`} />
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
const SinglePost = ({ singlePost }) => {
    console.log(singlePost.autho_name, singlePost.date)
    return (
        <div className="singlePostOuter">
            <div className="singlePostInner">
                <h3 className="singlePostTitle">{singlePost.title}</h3>
                <section className="singlePostAuthorInfo">
                    <div>
                        <ProfilePic />
                    </div>
                    <div>
                        <p><a href="">{singlePost.author_name}</a> {singlePost.date}</p>
                    </div>
                </section>
                <div className="singlePostContent">
                    <SinglePostImage imageSrc={singlePost.image} />
                    <p className="singlePostContent">{singlePost.text}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost