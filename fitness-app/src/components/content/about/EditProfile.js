import React from 'react'
import '../../../styles/EditProfile.css'
import walter from "../../../img/walter.jpg"
const EditProfile = () => {
const editButton = <button type="submit">Edit</button>

    return (

            <div>

            <form>
                <div className="d-flex justify-content-center">
                <h3>Basic information </h3> {editButton}
                </div>
                    <p> username: </p>
                    <p> real name:</p>
                    <p> password:</p>
                    <p> email:</p>
                    <p> birth:</p>

                <div className="d-flex justify-content-center">
                <h3>Profile picture </h3> {editButton}
                </div>
                <div>
                <img className="kuvaEdit" alt="Walter" src={walter}/>
                </div>
                <div className="d-flex justify-content-center">
                 <h3> Email adress </h3> {editButton}
                </div>
                <p> walsu@gmail.com</p>
                <div>

                </div>
            </form>

        </div>
    )

}
export default EditProfile;