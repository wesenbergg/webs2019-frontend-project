import React from 'react'
import '../../styles/EditProfile.css'
import walter from "../../img/walter.jpg"
import ProfilePost from "./ProfilePost";

const EditProfile = () => {


    return (

            <div>

            <form>


                <div className="align-self-end profiili">
                    <img align="right" className="profiilikuva" alt="Walter" src={walter}/>
                    <div className="text">
                         <h4 className="header4" > Walter Ruoppa </h4>
                        <h4 className="header4"> <i className="far fa-user"></i> Walter95 </h4>
                        <h4 className="header4"><i className="fas fa-globe-europe"></i> Finland </h4>
                    </div>
                 <h3> About me</h3>
                    <h6>Harrastuksiini kuuluu sali ja cardio. Harrastan välillä tanssia myös. Vapaa-aikani tykkään viettää Espanjan lämmössä, juoden sangriaa, olutta ja mojitoja.</h6>
                </div>
                    <div className="d-flex justify-content-center">
                </div>

                <div className="d-flex justify-content-center">
                 <h3 className="posts"> Posts </h3>
                </div>

                <div className="block">

                    <ProfilePost/>
                    <ProfilePost/>
                    <ProfilePost/>
                    <ProfilePost/>
                    <ProfilePost/>

                </div>
            </form>

        </div>
    )

}
export default EditProfile;