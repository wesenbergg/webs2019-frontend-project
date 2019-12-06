import React from 'react'
import Post from '../feed/Post'
import '../../../styles/post.css'

const SinglePost = ({ singlePost, setCurrentPage }) => {
    return (
        <div className="singlePost">
            <Post
                key={singlePost.id}
                title={singlePost.title}
                text={singlePost.text}
                author_id={singlePost.author_id}
                image_url={singlePost.image}
                date={singlePost.date}
                id={singlePost.id}
                author_name={singlePost.author_name}
            />
            <p>Likes tähän?(Postilta)</p>
            <p>Kommentit </p>
        </div>
    )
}

export default SinglePost