import React from 'react'
import FooterRow from './FooterRow'

const FooterCol = ({colContent, name, setCurrentPage, styleAttr}) => {
  const showFooterRows = () => colContent.content.map(row => <FooterRow key={row} content={row}/>)

  return(
    <div className="col-6 col-md">
      <h5>{colContent.name}</h5>
      <ul className="list-unstyled text-small">
        {showFooterRows()}
      </ul>
    </div>
  )
}

export default FooterCol