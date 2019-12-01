import React from 'react'

const SignUp = ({users, newUser, setNewUser, createUser}) => {
  const firstnameChangeHandler = e => setNewUser({...newUser, firstname: e.target.value})
  const lastnameChangeHandler = e => setNewUser({...newUser, lastname: e.target.value})
  const usernameChangeHandler = e => setNewUser({...newUser, username: e.target.value})
  const emailChangeHandler = e => setNewUser({...newUser, email: e.target.value})

  const handleSubmit = event => {
    event.preventDefault()
    console.log(newUser)

    //setNewUser(users.concat(newUser)) || createUser(newUser)

    setNewUser({...newUser, firstname: "", lastname: "", username: "", email: "", password: ""})
  }

  return(
    <div className="container signup">
      <div className="col-md-12 order-md-1">
          <h4 className="mb-3">Sign up</h4>
          <form className="needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstname" placeholder="Severus" value={newUser.firstname} onChange={firstnameChangeHandler} required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Snape" value={newUser.lastname} onChange={lastnameChangeHandler} required />
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
                <input type="text" className="form-control" id="username" placeholder="Username" value={newUser.username} onChange={usernameChangeHandler} required />
                <div className="invalid-feedback">
                  <p>Your username is required.</p>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={newUser.email} onChange={emailChangeHandler} required/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="text" className="form-control" id="password" placeholder="******" type='password' required />
              <div className="invalid-feedback">
                Please enter a valid password.
              </div>
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

            <h4 className="mb-3">Terms of service</h4>

            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address" />
              <label className="custom-control-label" htmlFor="same-address" required>I have read the <a href='https://en.wikipedia.org/wiki/Terms_of_service'>terms of service</a></label>
            </div>
           
            <button className="btn btn-primary btn-lg btn-block" type="submit">Create account</button>
          </form>
        </div>
      </div>
  )
}

export default SignUp