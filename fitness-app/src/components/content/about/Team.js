import React from 'react'
import walter from '../../../img/walter.jpg'
import x1 from '../../../img/test.png'
import '../../../styles/Team.css'

const Team = () => {
    
    return (
    <div className="container margin">
        <div className=" row d-flex justify-content-around">
            <div className="card col-md-3 ">
                <div className="kortti">
                    <div className="upper">
                        <img className="kuva" alt="Walter" src={walter}/>
                    </div>
                    <h2 className="team-card-title">Walter Ruoppa</h2>
                    <div className="details">
                        <p className="text-small">CEO, senior frontend developer</p>
                        <p> Owner of two other successful digital businesses; SiteWizard (digital agency) and Retortal (social media scheduler).</p>
                    </div>
                </div>
            </div>

            <div className="card col-md-3">
                <div className="upper">
                    <img className="kuva" alt="Boriss" src={x1}/>
                </div>
                <h2 className="team-card-title">Boriss Jerjomkim</h2>
                <div className="details">
                    <p className="text-small">Project leader</p>
                    <p>Boriss is deeply rooted in the industry. He has built a reputation for identifying and launching new...</p>
                </div>
            </div>

            <div className="card col-md-3">
                <div className="upper">
                    <img className="kuva" alt="Elias" src={x1}/>
                </div>
                <h2 className="team-card-title">Elias Keränen</h2>
                <div className="details">
                    <p className="text-small">Software architecture, senior backend developer</p>
                    <p>Barry is an experienced Solutions Architect having spent the last 2 years working for an industry leading...</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Team