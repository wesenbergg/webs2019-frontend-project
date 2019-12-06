import React from 'react'
import NewPostForm from '../../utilities/NewPostForm'

const NewPostPage = ({ posts, setPosts }) => {
    return (
        <NewPostForm posts={posts} setPosts={setPosts} />
    )
}

export default NewPostPage