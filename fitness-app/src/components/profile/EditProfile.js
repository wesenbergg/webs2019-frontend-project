import React from 'react'
import '../../styles/EditProfile.css'
import walter from "../../img/walter.jpg"
import ProfilePost from "./ProfilePost";
import Post from "../content/feed/Post";
import { Link } from 'react-router-dom'

const EditProfile = ({setCurrentPage}) => {
    //console.log(setCurrentPage)
    function handleClick({setCurrentPage}) {
        setCurrentPage('Form')
    }
    const editButton = <input className="buttoni" type="button" value="Edit profile" onClick={() => handleClick({setCurrentPage})}/>


    return (
            <div>
                <div className=" profiili">
                    <img align="right" className="profiilikuva" alt="Walter" src={walter}/>
                    <div className="text">
                         <h4 className="header4" > Walter Ruoppa <Link to="/users/profile/edit" className="btn btn-md btn-dark">Edit profile</Link> </h4>
                            <h4 className="header4"> <i className="far fa-user"></i> Walter95 </h4>
                        <h4 className="header4"><i className="fas fa-globe-europe"></i> Finland </h4>
                    </div>
                 <h3> About me</h3>
                    <h6>Harrastuksiini kuuluu sali ja cardio. Harrastan välillä tanssia myös. Vapaa-aikani tykkään viettää Espanjan lämmössä, juoden sangriaa, olutta ja mojitoja.</h6>

                </div>
                <h1> POSTS </h1>

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

        </div>
    )
}
export default EditProfile;

//const Post = ({ title, text, author_id, image_url, date, setCurrentPage, setSinglePost, author_name, id }) => {