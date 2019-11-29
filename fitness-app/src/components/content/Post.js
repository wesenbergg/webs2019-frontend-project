import React from 'react'

// Verrataan postauksen id:tä ja käyttäjälistan henkilöiden id:tä 
const findAuthorname = (author_id, users) => {
    const author = users.find(user => author_id === user.id)
    return author.username
  }

const Post = ({ post_id, title, text, author_id, users }) => {
    const authorName = findAuthorname(author_id, users)
    return (
        <div>
            <h3>Post {post_id} title: {title}</h3>
            <p>{text}</p>
            <p>From: {authorName}</p>
        </div>
    )
}

export default Post