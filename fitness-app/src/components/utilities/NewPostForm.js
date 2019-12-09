import React, { useState } from 'react'
import getTimestamp from '../../util/date'
import postServices from '../../services/postServices'
import { useHistory } from 'react-router-dom'

const NewPostForm = ({ posts, setPosts, loggedUser }) => {
    let history = useHistory()
    console.log('Current username (NewPostForm): ', loggedUser.username)
    if (loggedUser.username === "" || loggedUser.username === undefined) {
        history.push("/signin")
    }
    var currPostAmount = null
    // Jos newPostForm:ia kutsutaan Feedin ulkopuolelta
    if (currPostAmount === undefined || currPostAmount === null) {
        postServices.getAll()
            .then(results => currPostAmount = results.length)
    } else currPostAmount = posts.length
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')
    const [newLink, setNewLink] = useState('')
    const handleTitleChange = event => setNewTitle(event.target.value)
    const handleTextChange = event => setNewText(event.target.value)
    const handleLinkChange = event => setNewLink(event.target.value)

    const addPost = (event) => {
        event.preventDefault()
        /*
        const newPost = {
            id: currPostAmount + 1,
            title: newTitle,
            text: newText,
            image: newLink,
            date: getTimestamp(),
            author_id: loggedUser.id,
            author_name: loggedUser.username
        }
        */
       const newPost = {
           title: newTitle,
           image: newLink,
           text: newText,
           user: loggedUser.id
       }

        if (loggedUser.username === "" || loggedUser.username === undefined) {
            console.log('please log in first')
            history.push("/signin")
        }

        if (newTitle !== "" && newText !== "") {
            postServices.create(newPost)
                .then(response => {
                    setPosts(posts => [newPost, ...posts])
                    setNewTitle('')
                    setNewText('')
                    setNewLink('')
                    history.push("/posts")
                })
        }
    }

    return (
        <div id="addPostForm">
            <div className="container fade-sign-in">
            <form className="newPostForm" onSubmit={addPost}>
                <h1><i className="fas fa-dumbbell"></i></h1>
                <h1 className="h3 mb-3 font-weight-normal">Create new post</h1>
                <div className="form-group">
                    <input id="newPostTitle" className="form-control"
                        type="text" value={newTitle} onChange={handleTitleChange} placeholder="Title" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" type="text" value={newText}
                        onChange={handleTextChange} placeholder="what are you up to? ..." />
                </div>
                <div className="form-group">
                    <input id="linkToImage" type="text" value={newLink} onChange={handleLinkChange}
                        placeholder="Image URL" className="form-control"/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-light ">Post</button>
                </div>  
            </form>
            </div>
        </div>
    )
}

export default NewPostForm