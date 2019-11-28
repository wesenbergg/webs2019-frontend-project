import React from 'react'

const SignUp = ({}) => {

  return(
    <div className="container signup">
      <div className="col-md-12 order-md-1">
          <h4 className="mb-3">Sign up</h4>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required />
                <div className="invalid-feedback">
                  <p>Your username is required.</p>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="text" className="form-control" id="password" placeholder="******" type='password' required />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="repassword">Retype Password</label>
              <input type="text" className="form-control" id="repassword" placeholder="*******" type='password' required/>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Region</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>Africa</option>
                  <option>Asia</option>
                  <option>Australia</option>
                  <option>Europe</option>
                  <option>North-America</option>
                  <option>South-America</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
            </div>

            <h4 className="mb-3">Experience</h4>
            <small>Level of experience in workouts and other sports</small>

            <div className="row">
              <div className="custom-control custom-radio col-4">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                <label className="custom-control-label" htmlFor="credit">Beginner</label>
              </div>
              <div className="custom-control custom-radio col-4">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                <label className="custom-control-label" htmlFor="debit">Intermediate</label>
              </div>
              <div className="custom-control custom-radio col-4">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                <label className="custom-control-label" htmlFor="paypal">Advanced</label>
              </div>
            </div>

            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address" />
              <label className="custom-control-label" htmlFor="same-address" required>I have read the <a href='https://en.wikipedia.org/wiki/Terms_of_service'>terms of service</a></label>
            </div>
           
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
  )
}

export default SignUp