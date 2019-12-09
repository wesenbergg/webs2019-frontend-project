import React, { useState } from 'react'
import postServices from '../../../services/postServices'
import { useHistory } from 'react-router-dom'

// Luokka postauksien editointia varten. Tällä hetkellä signedin voi muokata tekstiä tai otsikkoa
// TODO: Tarkastaa voiko käyttäjä muokata postausta (author / admin)
// TODO: Linkin muuttaminen
const EditPostPage = ({ singlePost, setPosts, loggedUser }) => {
    let history = useHistory()
    if (loggedUser.username === "" || loggedUser.username === undefined) {
        history.push("/signin")
    }
    var title = singlePost.title
    var text = singlePost.text
    const [newTitle, setNewTitle] = useState(title)
    const [newText, setNewText] = useState(text)

    const handleTitleChange = event => setNewTitle(event.target.value)
    const handleTextChange = event => setNewText(event.target.value)

    const updatePost = (event) => {
        event.preventDefault()
        const updatedPost = { ...singlePost, title: newTitle, text: newText }
        postServices.update(singlePost.id, updatedPost)
            .then(response => {
                console.log('update succesfull ', response)
                postServices.getAll()
                    .then(updatedPosts => {
                        console.log(updatedPosts)
                        updatedPosts.reverse()
                        setPosts(updatedPosts)
                    })
                    .then(history.push('/posts'))
            })
    }
    return (
        <div id="addPostForm">
            <div className="container fade-sign-in">
                <form className="newPostForm" onSubmit={updatePost}>
                    <h1><i className="fas fa-dumbbell"></i></h1>
                    <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>
                    <div className="form-group">
                        <input id="newPostTitle" className="form-control"
                            type="text" value={newTitle} onChange={handleTitleChange} placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" type="text" value={newText}
                            onChange={handleTextChange} placeholder="what are you up to? ..." />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-light ">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
// HTML linkin muokkaamiseksi
/*
<div className="form-group">
    <input id="linkToImage" type="text" value={newLink} onChange={handleLinkChange}
        placeholder="Image URL" className="form-control" />
</div>
*/
export default EditPostPage