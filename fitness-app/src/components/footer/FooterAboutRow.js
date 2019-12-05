import React from 'react'

const FooterAboutRow = ({content, setCurrentPage, styleAttr}) => {
  const handleClick = e => {
    setCurrentPage('About')
  }

  return(
    <li><span className="text-muted footer-item" onClick={handleClick} >{content}</span></li>
  )
}

export default FooterAboutRow