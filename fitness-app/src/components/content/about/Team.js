import React from 'react'
import walter from '../../../img/walter.jpg'
import x1 from '../../../img/test.png'
import '../../../styles/Team.css'

const Team = () => {
return (

<div>
<body class="card">
<div class="upper">
    <img class="kuva" src={walter}/>
</div>
<h2>Walter Ruoppa</h2>
<div class="details">

        <i className="fas fa-map-marker-alt"> Finland</i>

        <i className="fas fa-school"> Metropolia Myllypuro</i>

        <i className="far fa-envelope"> walter.ruoppa@metropolia.fi</i>

        <i className="fas fa-phone-alt">050123123123</i>

</div>

</body>

    <div>
        <body className="card">
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


</div>

    <body className="card">
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

)
}
export default Team