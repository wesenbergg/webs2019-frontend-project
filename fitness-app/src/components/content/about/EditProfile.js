import React from 'react'
import '../../../styles/EditProfile.css'
import walter from "../../../img/walter.jpg"
import a from "../../../img/test.png"
const EditProfile = () => {
const editButton = <button type="submit">Update profile</button>

    return (

            <div>

            <form>

                <p> <h4> Walter Ruoppa </h4> </p>
                <div className="align-self-end">
                    <img  alt="Walter" src={walter}/>
                </div>
                <p> <h5> Walter95 </h5></p>
                <p> <h5> Finland </h5> </p>
                <h4>About me</h4>
                Harrastuksiini kuuluu sali ja cardio. Harrastan välillä tanssia myös. Vapaa-aikani tykkään viettää Espanjan lämmössä, juoden sangriaa, olutta ja mojitoja.
                <div className="d-flex justify-content-center">
                </div>
                <div>

                </div>
                <div className="d-flex justify-content-center">
                 <h3> Posts </h3>
                </div>

                <div className="block">

                    <p><img className="image1"  alt="a" src={a}/></p>
                    <p><img className="image1"  alt="a" src={a}/></p>
                    <p><img className="image1"  alt="a" src={a}/></p>
                    <p><img className="image1"  alt="a" src={a}/></p>
                    <p><img className="image1"  alt="a" src={a}/></p>

                </div>
            </form>

        </div>
    )

}
export default EditProfile;