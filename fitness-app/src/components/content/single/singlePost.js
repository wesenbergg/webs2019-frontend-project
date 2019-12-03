import React from 'react'
import Post from '../feed/Post'
import '../../../styles/post.css'
// Näyttää rumalta mutta toimii
// Yksittäiseltä postilta voi myöhemmin ottaa setCuurentPage & setSinglePost pois
// <Post /> pitää muokata
const SinglePost = ({ singlePost, setCurrentPage, setSinglePost }) => {
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