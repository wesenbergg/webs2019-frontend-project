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
                <div className="collapse" id="collapseExample">
                    <div className="container marketing">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <img className="bd-placeholder-img rounded-circle card-image" alt="4" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80"/>
                                <h2>Hedi96</h2>
                                <p>I have used this app for couple of months now. It´s superb, I have found so many new sports into my lifestyle through user stories.</p>
                                
                            </div>
                            <div className="col-lg-4 text-center">
                                <img className="bd-placeholder-img rounded-circle card-image" alt="5" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80" />
                                <h2>Alexx</h2>
                                <p>I had very bad lifestyles. I didn´t move hardly at all. Since I started using this app, my life changed and I started exercising regularly. I feel so healthier nowdays.</p>
                                
                            </div>
                            <div className="col-lg-4 text-center">
                                    <img className="bd-placeholder-img rounded-circle card-image" alt="6" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80" />
                                <h2>Tom22</h2>
                                <p>I have never had a training partner. Since I found exciting user stories, I took a step and asked if I could join into workouts. It all worked out and I got new training partner!</p>
                                
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