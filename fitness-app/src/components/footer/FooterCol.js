import React from 'react'
import FooterRow from './FooterRow'
import FooterAboutRow from './FooterAboutRow'

const FooterCol = ({colContent, setCurrentPage}) => {
  const showFooterRows = () => {
    if(colContent.name === 'About'){
      return colContent.content.map(row => <FooterAboutRow key={Math.floor(Math.random() * 99999999)} content={row}
        setCurrentPage={setCurrentPage}/>)
    }else{
      return colContent.content.map(row => <FooterRow key={Math.floor(Math.random() * 99999999)} content={row}
        setCurrentPage={setCurrentPage}/>)
    }
  }

  return(
    <div className="col-xs-6 col-md-12 col-lg-6 col-xl-3">
      <h5 className="text-light">{colContent.name}</h5>
      <ul className="list-unstyled text-small">
        {showFooterRows()}
      </ul>
    </div>
  )
}

export default FooterCol