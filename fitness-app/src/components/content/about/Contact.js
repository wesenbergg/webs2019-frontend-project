import React from 'react'
import walter from '../../../img/walter.jpg'
import x1 from '../../../img/test.png'
import '../../../styles/Team.css'

const Contact = () => {
    
    return (
    <div className="container">
      <div className="row text-light justify-content-around">
        <div className="col-md-5 col-sm-12 contact-info">
          <p><i className="fas fa-school"> mon-fri: 10.00 - 18.00</i></p>
          <p><i className="fas fa-map-marker-alt"> Mannerheimintie 1, 00100 Helsinki, Finland</i></p>
          <p><i className="far fa-envelope"> info@stayfit.com</i></p>
          <p><i className="fas fa-phone-alt"> 09-555 5454</i></p>
        </div>
        <div className="col-md-5 col-sm-12">
          <form id="contact-form">
            <div className="form-group">
              <p className="contact-form-text" for="formGroupExampleInput">Name</p>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div className="form-group">
              <p for="formGroupExampleInput2" className="contact-form-text">Phone number</p>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <div className="justify-content-right text-right">
              <button className="btn btn-outline-light">Submit</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    )
}

export default Contact