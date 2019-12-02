import React from 'react'
import Post from '../feed/Post'

// Näyttää rumalta mutta toimii
// Yksittäiseltä postilta voi myöhemmin ottaa setCuurentPage & setSinglePost pois
// <Post /> pitää muokata
const SinglePost = ({ singlePost, setCurrentPage, setSinglePost }) => {
    return (
        <>
            <Post
                key={singlePost.id}
                title={singlePost.title}
                text={singlePost.text}
                author_id={singlePost.author_id}
                image_url={singlePost.image}
                date={singlePost.date}
                setCurrentPage={setCurrentPage}
                setSinglePost={setSinglePost}
                id={singlePost.id}
                author_name={singlePost.author_name}
            />
        </>
    )
}

export default SinglePost