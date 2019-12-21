import React from 'react'
import Post from './Post'
import '../../../styles/feed.css'
import { Link } from 'react-router-dom'

const Feed = ({ posts, setSinglePost, setSingleUser, loggedUser }) => {
	const generateFeed = () =>
		posts.map(post =>
			<Post key={post.id} content={post} setSinglePost={setSinglePost} setSingleUser={setSingleUser}/>
		)

	const showPostButton = () => {
		return (loggedUser !== undefined && loggedUser.token !== undefined) ?
		<Link className="btn btn-outline-light" to="/posts/new">New post</Link> :
		<></>
	}
	return (
		<div className="newPostContainer">
			<div className="container">
				<div className="row">
					<div className="col-6 text-left">
						<h1 className="text-muted">Posts</h1>
					</div>
					<div className="col-6 text-right">
						{showPostButton()}
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row justify-content-around">
					{generateFeed()}
				</div>
			</div>
		</div>
	)
}

export default Feed