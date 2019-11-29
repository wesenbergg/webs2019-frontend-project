import React from 'react'

// Komponentti uutta postausta varten
const NewPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <div>Title <input value={props.newTitle}
                    onChange={props.handleTitleChange} /></div>
                <div>Text  <input value={props.newText}
                    onChange={props.handleTextChange} /></div>
                <div><button type="submit">Post</button></div>
            </form>
        </div>
    )
}

export default NewPostForm