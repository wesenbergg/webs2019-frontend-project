import React from 'react'

const FooterRow = ({content, setCurrentPage, styleAttr}) => {
  const handleClick = e => {
    //console.log(e.target.title)
    setCurrentPage(e.target.title)
  }

  //console.log(content)
  if(content.name !== undefined){
    return(
      <>
        <li><span className="text-muted footer-item mouse-pointer" href={content.link}><i className={content.logo}></i> {content.name}</span></li>
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
    <li><span className="text-muted footer-item mouse-pointer" title={content} onClick={handleClick} >{content}</span></li>
  )
}

export default FooterRow