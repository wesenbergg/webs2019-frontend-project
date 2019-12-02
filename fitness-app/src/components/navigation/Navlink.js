import React from 'react'

const Navlink = ({name, setCurrentPage, styleAttr}) => {
  const handleNavClick = e => setCurrentPage(e.target.title)

  if(name === 'QA'){
    return(
      <>
        <li className="nav-item">
            <a className="nav-link disabled" title={name} onClick={handleNavClick} tabIndex="-1" aria-disabled="true">{name}</a>
        </li>
      </>
    )
  }
  return(
    <>
      <li className="nav-item">
          <a className={styleAttr} title={name} onClick={handleNavClick} tabIndex="-1" aria-disabled="true">{name}</a>
      </li>
    </>
  )
}

export default Navlink