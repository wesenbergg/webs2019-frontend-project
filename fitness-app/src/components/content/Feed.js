import React, { useState } from 'react'
import Post from './Post'
import NewPostForm from './NewPostForm'

const Feed = () => {
	// Tää siirtyy pois tästä 
	var posts = [
		{
			post_id: 1,
			title: "Postauksen otsikko",
			text: "Testikuva",
			image: 0,
			date: "0:52 1/12/2019",
			author_id: 1
		},
		{
			post_id: 2,
			title: "Toka",
			text: "Tämä on myös käyttäjältä 1, ilman kuvaa",
			image: null,
			date: "18:52 30/11/2019",
			author_id: 1
		},
		{
			post_id: 3,
			title: "Kolmas",
			text: "loremlipsum liibalaaba lits läts lörs lärä bers bora spurdo spärde spedro sprölölöö",
			image: null,
			date: "1:30 1/12/2019",
			author_id: 1
		},
		{
			post_id: 4,
			title: "Neljäs",
			text: "'Viallinen url / virhe' -kuva",
			image: 1,
			date: "10.000 eaa.",
			author_id: 3
		},		
		{
			post_id: 5,
			title: "Viides",
			text: "Testi, pariton määrä postauksia",
			image: 0,
			date: "Huomenna, ajan rakenne on muuttunut",
			author_id: 2
		},

	]
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

	const generateFeed = () =>
		posts.map(post =>
			<Post
				key={post.id}
				post_id={post.post_id}
				title={post.title}
				text={post.text}
				author_id={post.author_id}
				image_url={post.image}
				date={post.date}
				users={users}
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