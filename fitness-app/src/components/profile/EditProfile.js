import React from 'react'
import '../../styles/post.css'
import walter from "../../img/walter.jpg"
import Post from "../content/feed/Post";
import { Link, Redirect } from 'react-router-dom'
import Feed from "../content/feed/Feed";
import SingleUser from '../content/single/SingleUser'


const EditProfile = ({ loggedUser}) => {

    //Palaa etusivulle jos ei ole kirjauduttu sisään
    if(loggedUser.username === undefined) return(<><Redirect to="/signin" /></>)
    return (
        <>
            <SingleUser singleUser={loggedUser} loggedUser={loggedUser}/>   
        </>

    )
}
export default EditProfile;

//const Post = ({ title, text, author_id, image_url, date, setCurrentPage, setSinglePost, author_name, id }) => {

/*
<div className="userBox" align="center">
            <div className="vasen">
                <img src={walter} alt="user"/>
                <h3 className="otsikko3">NIMI</h3>
            </div>
            <div className="oikea">
                <div className="info">
                    <div className="info_data">
                        <div className="data">
                            <Link className="btn btn-lg btn-dark text-light my-2 buttonProfile" to="/posts/new">Add post</Link>
                            <h4>Username</h4>
                            <h6>walter95</h6>
                        </div>
                        <div className="data">
                            <Link className="btn btn-lg btn-dark text-light my-2 buttonProfile" to="/users/profile/edit">Edit Profile</Link>
                            <h4>Region</h4>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <h3 className="otsikko3">Bio</h3>
                    <div className="projects_data">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>
            </div>
        </div>
            */