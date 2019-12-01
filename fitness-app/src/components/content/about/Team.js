import React from 'react'
import x1 from '../../../img/tiimiTest.jfif'
import x2 from '../../../img/tiimiTest.jfif'
import x3 from '../../../img/tiimiTest.jfif'
import '../../../styles/Team.css'

const Team = () => {
return (

    <div class="team-section">
        <h1>Our Team</h1>
        <span className="border"> </span>

        <div class="ps">
            <a href="#test1"><img className="bd-placeholder-img rounded-circle card-image"  src={x1}/> </a>
            <a href="#test1"><img  className="bd-placeholder-img rounded-circle card-image" src={x2}/> </a>
            <a href="#test1"><img className="bd-placeholder-img rounded-circle card-image"  src={x3}/> </a>

            </div>

        <div class="section" id='i1'>
            <span className="name">Boriss Jerjomkim </span>
            <span className="border"></span>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="section" id= 'i2'>
            <span className="name">Walter Ruoppa </span>
            <span className="border"></span>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
        </div>


        <div class="section" id='i3'>
            <span className="name">Elias Keränen </span>
            <span className="border"></span>
            <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
        </div>




    </div>



)
}
export default Team