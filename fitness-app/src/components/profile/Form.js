import React from 'react'
import '../../styles/Form.css'

const Form = () => {
    const editButton = <button type="submit">Update profile</button>

    return (
        <div className="container signup">
            <div className="col-md-12 order-md-1">
                <h4 className="mb-3">Edit profile</h4>
                <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstname" placeholder="Severus" value=""  required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Snape" value=""  required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="email">Username</label>
                        <input type="email" className="form-control" id="email" placeholder="" value=""  required/>
                        <div className="invalid-feedback">
                            Please enter a valid username
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="you@example.com" value=""  required />
                            <div className="invalid-feedback">
                                <p>Please enter a valid email address for shipping updates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Bio</label>
                        <input type="email" className="form-control" id="email" placeholder="" value="MULLE EI VITTUILLA EI VÄHÄÄKÄÄN, NOLLATOLERANSSI"  required/>
                        <div className="invalid-feedback">

                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Paste picture link here</label>
                        <input type="email" className="form-control" id="email" placeholder="https://www.cnet.com/pictures/see-winning-wildlife-photography-pictures-and-marvel-at-the-animal-world/" value=""  required/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <label htmlFor="country">Region</label>
                            <select className="custom-select d-block w-100" id="country"  required>
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
                </form>
                <button type="button" className="btn btn-success">Update</button>
                <button type="button" className="btn btn-primary">Cancel</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}
export default Form;