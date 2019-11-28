import React from 'react'

const FooterRow = ({content, setCurrentPage, styleAttr}) => {
  const handleNavClick = e => setCurrentPage(e.target.title)

  if(content.name !== undefined){
    return(
      <>
        <li><a className="text-muted" href={content.link}><i class={content.logo}></i> {content.name}</a></li>
      </>
    )
  }

  return(
    <li><a className="text-muted" href="#">{content}</a></li>
  )
}

export default FooterRow