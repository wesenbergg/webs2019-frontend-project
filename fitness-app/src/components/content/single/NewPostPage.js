import React from 'react'
import NewPostForm from '../../utilities/NewPostForm'

const NewPostPage = ({ posts, setPosts, loggedUser }) => {
    return (
        <NewPostForm posts={posts} setPosts={setPosts} loggedUser={loggedUser} />
    )
}

export default NewPostPage