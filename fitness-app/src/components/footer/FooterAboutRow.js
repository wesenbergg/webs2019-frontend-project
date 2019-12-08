import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const FooterAboutRow = ({content, setCurrentPage, styleAttr}) => {
  const handleClick = e => {
    setCurrentPage('About')
  }

  return(
  <li><Link className="text-muted footer-item  mouse-pointer" to="/about">{content}</Link></li>
  )
}

export default FooterAboutRow