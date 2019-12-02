import React from 'react'

const SignIn = ({}) => {
  const handleSubmit = () => {
      //TODO: validate form
  }

  return(
    <div className="signin container text-center" onSubmit={handleSubmit}>
      <form className="form-signin">
        <h1><i className="fas fa-dumbbell"></i></h1>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
    </div>
  )
}

export default SignIn