import React, { useState, useEffect } from 'react'
import Post from './Post'
import NewPostForm from '../../utilities/NewPostForm'
import postServices from '../../../services/postServices'
import '../../../styles/feed.css'

const Feed = ({ setSinglePost, setCurrentPage }) => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		postServices.getAll()
			.then(initialPosts => {
				setPosts(initialPosts)
			})
	}, [])
	
	const generateFeed = () =>
		posts.map(post =>
			<Post
				key={post.id}
				title={post.title}
				text={post.text}
				author_id={post.author_id}
				image_url={post.image}
				date={post.date}
				setCurrentPage={setCurrentPage}
				setSinglePost={setSinglePost}
				id={post.id}
				author_name={post.author_name}
			/>
		)

	return (
		<>
			<NewPostForm />
			<div className="card-columns" className="feedContainer">
				{generateFeed()}
			</div>
		</>
	)
}

export default Feed