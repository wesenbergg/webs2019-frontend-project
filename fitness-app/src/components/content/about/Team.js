import React, {Component} from 'react'
import walter from '../../../img/walter.jpg'
import x1 from '../../../img/test.png'
import '../../../styles/Team.css'

class Team extends Component {
    render() {
        return (
            <div className="container">
            <div className=" row d-flex justify-content-around">
                <body className="card col-md-3 ">
                <div className="kortti">
                <div className="upper">
                    <img className="kuva" src={walter}/>
                </div>
                <h2>Walter Ruoppa</h2>
                <div className="details">

                    <i className="fas fa-map-marker-alt"> Finland</i>

                    <i className="fas fa-school"> Metropolia Myllypuro</i>

                    <i className="far fa-envelope"> Walter.Ruoppa@metropolia.fi</i>

                    <i className="fas fa-phone-alt">050123123123</i>

                </div>
                </div>

                </body>


                <body className="card col-md-3">
                    <div className="upper">
                        <img className="kuva" src={x1}/>
                    </div>
                    <h2>Boriss Jerjomkim</h2>
                    <div className="details">
                        <i className="fas fa-map-marker-alt"> Finland</i>

                        <i className="fas fa-school"> Metropolia Myllypuro</i>

                        <i className="far fa-envelope"> Boriss.Jerjomkim@metropolia.fi</i>

                        <i className="fas fa-phone-alt">040123123123</i>

                    </div>
                    </body>

                <body className="card col-md-3">
                <div className="upper">
                    <img className="kuva" src={x1}/>
                </div>
                <h2>Elias Keränen</h2>

                <div className="details">
                    <i className="fas fa-map-marker-alt"> Finland</i>

                    <i className="fas fa-school"> Metropolia Myllypuro</i>

                    <i className="far fa-envelope"> Elias.Keränen@metropolia.fi</i>

                    <i className="fas fa-phone-alt"> 044123123123</i>

                </div>
                </body>

            </div>
            </div>
        )
    }
}

export default Team