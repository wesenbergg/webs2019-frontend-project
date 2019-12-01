import React, { useState } from 'react'
import getTimestamp from '../../util/date'

// Komponentti uutta postausta varten
// Author_id puuttuu, sisäänkirjautuneen käyttäjän id pitäisi saada
// timestamp ja post_id tulee backendin puolella?
const NewPostForm = () => {
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')
    const handleTitleChange = event => setNewTitle(event.target.value)
    const handleTextChange = event => setNewText(event.target.value)
    
    // Tähän metodiin lisätään postServicen käyttö
    const addPost = (event) => {
        event.preventDefault()
        const newPost = {
            title: {newTitle},
            text: {newText},
            image: null,
        }
        console.log("Uuden postin lisäys vielä kesken...")
        console.log("Title:", newPost.title, "\ntext: ", newPost.text, " ", getTimestamp())
        setNewTitle('')
        setNewText('')
    }

    return (
        <div>
            <form onSubmit={addPost}>
                <input type="text" value={newTitle} onChange={handleTitleChange} />
                <input type="text" value={newText} onChange={handleTextChange} />
                <button type="submit">post</button>
            </form>
        </div>
    )
}

export default NewPostForm