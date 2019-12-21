import React from 'react'
import '../../styles/Form.css'
import userService from '../../services/userServices'
import {Link, Redirect  } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Form = ({loggedUser, setMessage, setLoggedUser, users, setUsers}) => {
    const history = useHistory()

    const handleMessage = (t, m) => {
        setMessage({
            type: t,
            message: m
          })
          setTimeout(() => {
            setMessage({ type: "hidden" })
          }, 5000)
    }

    const update = (newObject) => {
      //console.log(newObject)
      userService.update(newObject.id, newObject)
      .then(() => {
        setUsers(users.map(user => user.username !== newObject.username ? user : newObject))
        handleMessage('alert alert-success text-center', `Succesfully updated '${loggedUser.firstname}' to server`)
        history.push('/users/profile')
      }).catch(error => console.log(error))
        handleMessage('alert alert-danger text-center', `Succesfully added '${loggedUser.firstname}' to server`)
        setUsers(users.filter(p => p.id !== newObject.id))
    }

    const firstnameChangeHandler = e => setLoggedUser({...loggedUser, firstname: e.target.value})
    const lastnameChangeHandler = e => setLoggedUser({...loggedUser, lastname: e.target.value})
    const usernameChangeHandler = e => setLoggedUser({...loggedUser, username: e.target.value})
    const emailChangeHandler = e => setLoggedUser({...loggedUser, email: e.target.value})
    const pictureChangeHandler = e => setLoggedUser({...loggedUser, profilepic: e.target.value})
    const descriptionChangeHandler = e => setLoggedUser({...loggedUser, description: e.target.value})
    const regionChangeHandler = e => setLoggedUser({...loggedUser, region: e.target.value})
    
    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            firstname: loggedUser.firstname,
            lastname: loggedUser.lastname,
            username: loggedUser.username,
            email: loggedUser.email,
            description: loggedUser.description,
            region: loggedUser.region,
            profilepic: loggedUser.profilepic,
            id: loggedUser.id
        }
        //console.log('update')
        //console.log(user)
        update(user)
        window.localStorage.setItem('loggedFitnessAppUser', JSON.stringify(loggedUser))
    }

    console.log('update user')
    //Palaa etusivulle jos ei ole kirjauduttu sisään
    if(loggedUser.username === undefined) return(<><Redirect to="/signin" /></>)
    return (
        <div id="update-form">
            <div className="container signup">
            <div className="col-md-12 order-md-1">
                <h4 className="mb-3">Edit profile</h4>
                <form className="needs-validation" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" value={loggedUser.firstname} onChange={firstnameChangeHandler} required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" value={loggedUser.lastname} onChange={lastnameChangeHandler} required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" value={loggedUser.email} onChange={emailChangeHandler} required/>
                        <div className="invalid-feedback">
                            Please enter a valid username
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" value={loggedUser.username} onChange={usernameChangeHandler} required />
                            <div className="invalid-feedback">
                                <p>Please enter a valid email address for updates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Bio</label>
                        <textarea type="text" className="form-control" value={loggedUser.description} onChange={descriptionChangeHandler} multiline="true" rows="4"></textarea>
                    </div>

                    <div className="mb-3">
                        <label>Paste picture link here</label>
                        <input className="form-control" value={loggedUser.profilepic} onChange={pictureChangeHandler} required/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <label htmlFor="country">Region</label>
                            <select className="custom-select d-block w-100" value={loggedUser.region} onChange={regionChangeHandler} required>
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
                    
                    <span className="text-right">
                        <button className="btn btn-outline-light napit" type="submit" >Update</button>
                        <Link to="/users/profile"><button className="btn btn-light napit" type="submit" >Cancel</button></Link>
                    </span>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Form