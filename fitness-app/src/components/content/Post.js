import React from 'react'
import testImage from '../../img/test.png'
import notFound from '../../img/not_found.png'

// Vertaa postauksen id:tä ja käyttäjälistan henkilöiden id:tä 
const findAuthorname = (author_id, users) => {
    const author = users.find(user => author_id === user.id)
    return author.username
}

// Kaksi vaihtoehtoista postausta, kuvallinen ja ilman kuvaa
const Post = ({ post_id, title, text, author_id, image_url, date, users }) => {
    const authorName = findAuthorname(author_id, users)
    const images = [testImage, notFound] 
    if (image_url !== null) {
        return (
            <div class="mx-auto">
                <div class="card mb-3" className="horizontalPost">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={images[image_url]} class="card-img" className="card-img" alt={notFound} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{text}</p>
                                <p class="card-text"><small class="text-muted">From: <a href="#" class="card-link">{authorName}</a> {date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div class="mx-auto">
            <div class="card mb-3" className="horizontalPost">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{text}</p>
                            <p class="card-text"><small class="text-muted">From: <a href="#" class="card-link">{authorName}</a>     {date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Toimiva testiversio
/*
const Post = ({post_id, title, text, author_id, users}) => {
const authorName = findAuthorname(author_id, users)
    return (
<div>
        <h3>Post {post_id} title: {title}</h3>
        <p>{text}</p>
        <p>From: {authorName}</p>
    </div>
    )
}
*/
export default Post