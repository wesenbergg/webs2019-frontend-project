import React from 'react'
import loginService from '../../services/loginServices'
import postService from '../../services/postServices'
import { useHistory } from 'react-router-dom'

const SignIn = ({credentials, setCredentials, setMessage, setCurrentPage, setLoggedUser}) => {
  let history = useHistory()
  const handleMessage = (type, message) => {
    setMessage({
      type: type,
      message: message
    })
    setTimeout(() => {
      setMessage({
        type: 'hidden',
        message: ""
      })
    }, 5000)
  }

  const handleSubmit = e => {
      //TODO: validate form
      e.preventDefault()

      if(credentials.password === '' || credentials.username === '') {
        handleMessage('error', 'Fill up credentials.')
        return
      }

      try {
        loginService
        .getAll(credentials)
        .then(user => {
          window.localStorage.setItem('loggedFitnessAppUser', JSON.stringify(user))

          postService.setToken(user.token)
          //console.log(user)
          setLoggedUser(user)
          handleMessage('alert alert-success text-center', `Logged in as ${user.firstname}`)
          history.push("")
        })

        setCredentials({username: '', password: ''})
        setCurrentPage('Front Page')
      } catch (exception) {
        handleMessage('error', 'Wrong credentials')
      }
  }

  return(
    <div id="signin">
    <div className="signin container text-center signin fade-sign-in" onSubmit={handleSubmit}>
      <form className="form-signin">
        <h1><i className="fas fa-dumbbell"></i></h1>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <div className="sign-in-group">
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text" id="inputUsername" className="form-control" placeholder="Username" 
            value={credentials.username} onChange={e => setCredentials({...credentials, username: e.target.value})} required/>
        </div>
        
        <div className="sign-in-group">
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" 
            value={credentials.password} onChange={e => setCredentials({...credentials, password: e.target.value})} required/>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" disabled/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-outline-light btn-block" type="submit">Sign in</button>
      </form>

      <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
    </div>
    </div>
  )
}

export default SignIn