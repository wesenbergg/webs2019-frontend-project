import React from 'react'
import '../../styles/singleUser.css'
import walter from "../../img/walter.jpg"
import ProfilePost from "./ProfilePost";
import Post from "../content/feed/Post";
import { Link, Redirect } from 'react-router-dom'


const EditProfile = ({setCurrentPage, loggedUser}) => {
    //console.log(setCurrentPage)
    function handleClick({setCurrentPage}) {
        setCurrentPage('Form')
    }
    //Palaa etusivulle jos ei ole kirjauduttu sisään
    if(loggedUser.username === undefined) return(<><Redirect to="/signin" /></>)
    return (
        <div>
        <div className="userBox" align="center">
            <div className="vasen">
                <img src={walter} alt="user"/>
                <h3 className="otsikko3">NIMI</h3>
            </div>
            <div className="oikea">
                <div className="info">
                    <div className="info_data">
                        <div className="data">
                            <h4>Username</h4>
                            <h6>walter95</h6>
                        </div>
                        <div className="data">
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

                    <div align="center">
                <Post
                title="title"
                text="text"
                image_url={walter}
                date="27.8.2019"
                author_name="Walter95"
                id="5"
                />
                    </div>
                <div align="center">
                <ProfilePost/>
                </div>
                <Link className="mouse-pointer" to="/profile/edit"><i className="fas fa-user-circle"></i> Edit profile</Link>
        </div>

    )
}
export default EditProfile;

//const Post = ({ title, text, author_id, image_url, date, setCurrentPage, setSinglePost, author_name, id }) => {