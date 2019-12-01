import React, { useState, useEffect } from 'react'
import Post from './Post'
import NewPostForm from './NewPostForm'
import postServices from '../../services/postServices'
import userServices from '../../services/userServices'

const Feed = () => {
	const [posts, setPosts] = useState([])
	const [users, setUsers] = useState([])

	/*
	useEffect(() => {
		userServices.getAll()
			.then(initialUsers => {
				setUsers(initialUsers)
			})
	}, [])
	*/
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
				//users={users}
				author_name={post.author_name}
			/>
		)


	return (
		<>
			<NewPostForm />
			<div class="card-columns" className="feedContainer">
				{generateFeed()}
			</div>
		</>
	)

	// Tällä returnilla saa kaksi kolumnia vierekkäin, näyttää vielä huonolta
	/*
	return (
		<div class ="card-group" className="feedContainer">
			{generateFeed()}
		</div>
	)
	*/
	// Sama homma tässä
	/*
	return (
		<div class="row row-cols-1 row-cols-md-2" className="feedContainer">
			{generateFeed()}
		</div>
	)
	*/
}

export default Feed