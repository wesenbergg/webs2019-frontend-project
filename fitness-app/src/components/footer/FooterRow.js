import React from 'react'
import {Link} from 'react-router-dom'


const FooterRow = ({content, setCurrentPage}) => {

  //console.log(content)
  if(content.logo !== undefined){
    return(
      <>
        <li><a className="text-muted footer-item mouse-pointer" href={content.link}><i className={content.logo}></i> {content.name}</a></li>
      </>
    )
  }

  if(content === 'QA'){
    return(
      <>
        <li><span className="text-muted mouse-pointer" disabled>{content}</span></li>
      </>
    )
  }

  return(
    <li><Link className="text-muted footer-item  mouse-pointer" to={content.link}>{content.name}</Link></li>
  )
}

export default FooterRow