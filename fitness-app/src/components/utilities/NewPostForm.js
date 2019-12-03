import React, { useState } from 'react'
import getTimestamp from '../../util/date'
import postServices from '../../services/postServices'

// Komponentti uutta postausta varten
const NewPostForm = ({ posts, setPosts }) => {
    var currPostAmount = posts.length
    // Jos newPostForm:ia kutsutaan Feedin ulkopuolelta
    if (currPostAmount === undefined || currPostAmount === null) {
        postServices.getAll()
            .then(results => currPostAmount = results.length)
    }
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')
    const handleTitleChange = event => setNewTitle(event.target.value)
    const handleTextChange = event => setNewText(event.target.value)

    // Tähän metodiin lisätään postServicen käyttö
    const addPost = (event) => {
        event.preventDefault()

        const newPost = {
            id: currPostAmount + 1,
            title: newTitle,
            text: newText,
            image: null,
            date: getTimestamp(),
            author_id: 10000000,
            author_name: 'Testi'
        }
        //console.log("Title:", newPost.title, "\ntext: ", newPost.text, " ", newPost.date)
        //console.log("image: ", newPost.image, "author_id: ", newPost.author_id, "name: ", newPost.author_name)
        postServices.create(newPost)
            .then(response => {
                // Jos newPostForm:ia kutsutaan Feedin ulkopuolelta
                if (setPosts !== undefined && posts !== undefined)
                    setPosts(posts => [newPost, ...posts])
                console.log(response)
            })
        setNewTitle('')
        setNewText('')
    }
    return (
        <div>
            <br />
            <form className="newPostForm" onSubmit={addPost}>
                <div className="form-group">
                    <input id="newPostTitle" className="form-control" type="text" value={newTitle} onChange={handleTitleChange} placeholder="Title" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" type="text" value={newText} onChange={handleTextChange} placeholder="Text" />
                </div>
                <button type="submit">post</button>
            </form>
        </div>
    )
    /*
    return (
        <div>
            <form onSubmit={addPost}>
                <input type="text" value={newTitle} onChange={handleTitleChange} />
                <textarea type="text" value={newText} onChange={handleTextChange} />
                <button type="submit">post</button>
            </form>
        </div>
    )
    */
}

export default NewPostForm