import React from 'react'
import Post from './Post'
import '../../../styles/feed.css'
import { Link } from 'react-router-dom'

const Feed = ({ posts, setSinglePost, setSingleUser }) => {
	const generateFeed = () =>
		posts.map(post =>
			<Post
				key={post.id}
				title={post.title}
				text={post.text}
				author_id={post.user.id}
				image_url={post.image}
				date={post.date}
				setSinglePost={setSinglePost}
				id={post.id}
				author_name={post.user.username}
				setSingleUser={setSingleUser}
			/>
		)

	return (
		<>
			<div className="newPostContainer">
				<Link className="btn btn-lg btn-dark text-light my-2" to="/posts/new">New post</Link>
			</div>
			<div className="feedContainer">
				{generateFeed()}
			</div>
		</>
	)
}

export default Feed