import React from 'react'
import '../../styles/Form.css'
import userService from '../../services/userServices'

const Form = ({loggedUser, setLoggedUser, users, setUsers, setCurrentPage}) => {
    const update = (newObject) => {
      console.log(newObject)
      userService.update(newObject.id, newObject)
      .then(returnedPerson => {
        setUsers(users.map(user => user.id !== newObject.id ? user : newObject))
        console.log('Success')
      }).catch(error => console.log(error))
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

        update(user)
        window.localStorage.setItem('loggedFitnessAppUser', JSON.stringify(loggedUser))
        console.log(loggedUser)
    }

    const handleCancel = e => {
        //setLoggedUser()
    }

    const handleDelete = e => {

    }

    //Palaa etusivulle jos ei ole kirjauduttu sisään
    if(loggedUser.username === undefined) setCurrentPage('Front Page')
    return (
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
                    <button type="button" className="btn btn-success" type="submit">Update</button>
                    <button className="btn btn-primary" onClick={handleCancel}>Cancel</button>
                    <button className="btn btn-danger" onClick={handleDelete} disabled>Delete</button>
                </form>
            </div>
        </div>
    )
}
export default Form