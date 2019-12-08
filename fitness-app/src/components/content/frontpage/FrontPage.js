import React from 'react'
import '../../../styles/Animation.css'
import {Link} from 'react-router-dom'

//<img alt="1" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=400&q=80"/>

const FrontPage = () => {
    return(
        <div className="frontpage">
           <div className="container-fluid flyer">
                <img className="frontpage-flyer" alt="1" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=400&q=100"/>
                <div className="flyer-text">
                    <div className="puff-in-center">
                        <h1 className="display-4"><i className="fas fa-dumbbell"></i> StayFit</h1>
                        <p className="lead">Stay fit or die trying.</p>
                        <Link className="btn btn-outline-light" to="/signup">Sign up now!</Link>
                    </div>
                </div>
           </div>

            <div className="collapse-section">
                <button id="expand-button" className="lead collapsed" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
                    Click here to read our stories
                </button>
                <div class="collapse" id="collapseExample">
                    <div className="container marketing">
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="bd-placeholder-img rounded-circle card-image" alt="4" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80"/>
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                                    ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Praesent commodo cursus magna.</p>
                                <p><span className="btn btn-outline-light" role="button">View details &raquo;</span></p>
                            </div>
                            <div className="col-lg-4">
                                <img className="bd-placeholder-img rounded-circle card-image" alt="5" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80" />
                                <h2>Heading</h2>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                                    elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus
                                    commodo, tortor mauris condimentum nibh.</p>
                                <p><span className="btn btn-outline-light" role="button">View details &raquo;</span></p>
                            </div>
                            <div className="col-lg-4">
                                    <img className="bd-placeholder-img rounded-circle card-image" alt="6" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80" />
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum
                                    id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                    condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                <p><span className="btn btn-outline-light" role="button">View details &raquo;</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FrontPage

/*
<div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4"><i className="fas fa-dumbbell"></i> StayFit</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    <Link className="btn btn-outline-light" to="/signup">Get Started</Link>
                </div>
            </div>
*/