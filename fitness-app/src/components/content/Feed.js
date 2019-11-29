import React, { useState } from 'react'
import Post from './Post'

// Uuden postauksen lisääminen vielä kesken
const Feed = () => {
	// Tää siirtyy pois tästä 
	var posts = [
		{
			post_id: 1,
			title: "Ensimmäinen postaus",
			text: "Tämän tekstin on kirjoittanut käyttäjä 1",
			author_id: 1
		},
		{
			post_id: 2,
			title: "Toka",
			text: "Tämä on myös käyttäjältä 1",
			author_id: 1
		},
		{
			post_id: 3,
			title: "Kolmas",
			text: "Käyttäjältä 2",
			author_id: 2
		},
		{
			post_id: 4,
			title: "Neljäs",
			text: "Käyttäjän 3 postaus",
			author_id: 3
		},
	]
	// Samoin tämä 
	var users = [
		{
			id: 1,
			username: "elias",
			posts: [1, 2]
		},
		{
			id: 2,
			username: "walter",
			posts: [3]
		},
		{
			id: 3,
			username: "boriss",
			posts: [4]
		}
	]
	// Postauksien luominen
	const generateFeed = () =>
		posts.map(post =>
			<Post
				key={post.id}
				post_id={post.id}
				title={post.title}
				text={post.text}
				author_id={post.author_id}
				users={users}
			/>
		)

	return (
		<div>
			{generateFeed()}
		</div>
	)
}

export default Feed