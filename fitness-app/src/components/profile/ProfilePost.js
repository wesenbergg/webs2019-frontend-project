import React, { useState, useEffect } from 'react'
import walter from "../../img/walter.jpg"
import Post from "../content/feed/Post";
const ProfilePost = () => {

return (

    <div
        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative lirumLarum container">

        <div className="col p-4 d-flex flex-column position-static bg-light ">
            <h2>  <div className="mb-1 text-muted">3.12.2019</div> </h2>

            <p className="mb-auto profile-desc"> .  ovat vasta aluillaan. Useita versioita on muodostunut vuosien kuluessa, jotkut vahingossa ja jotkut tarkoituksella (lisätty huumoria ja niin edelleen).</p>
            <div className="justify-content-center">
                <a className="btn btn-dark text-light profile-link">Expand</a>
            </div>
        </div>
        <div className="col-auto d-none d-lg-block">
            <img className="bd-placeholder-image kuva1" src={walter}/>
        </div>
    </div>
)
}

export default ProfilePost