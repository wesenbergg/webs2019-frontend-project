import React from 'react'
import postServices from '../../services/postServices'
import testImage from '../../img/test.png'
import notFound from '../../img/not_found.png'

// Vertaa postauksen id:tä ja käyttäjälistan henkilöiden id:tä 
const findAuthorname = (author_id, users) => {
    const author = users.find(user => author_id === user.id)
    return author.username
}

function handleClick({setCurrentPage, setSinglePost, id}) {
    console.log(id)
    postServices.getById(id)
        .then(post => {
            setSinglePost(post)
        })
    setCurrentPage('Post Page')
}

// Kaksi vaihtoehtoista postausta, kuvallinen ja ilman kuvaa
const Post = ({ title, text, author_id, image_url, date, setCurrentPage, setSinglePost, author_name, id }) => {
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
                                <h5 class="card-title"><a href="#" onClick={() => handleClick({setCurrentPage, setSinglePost, id})}>{title}</a></h5>
                                <p class="card-text">{text}</p>
                                <p class="card-text"><small class="text-muted">From: <a href="#" class="card-link">{author_name}</a> {date}</small></p>
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
                        <h5 class="card-title"><a href="#" onClick={() => handleClick({setCurrentPage, setSinglePost, id})}>{title}</a></h5>
                            <p class="card-text">{text}</p>
                            <p class="card-text"><small class="text-muted">From: <a href="#" class="card-link">{author_name}</a>     {date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post