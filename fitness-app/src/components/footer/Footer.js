import React from 'react'
import FooterCol from './FooterCol'
import FooterBrand from './FooterBrand'

const Footer = (footerContent, setCurrentPage) => {
    const showFooterColumns = () => footerContent.footerContent.map(e => <FooterCol key={e} colContent={e} setCurrentPage={setCurrentPage}/>)
    
  return(
    <>    
    <footer className="container-fluid bg-dark text-secondary py-5">
        <div className="row">
            <FooterBrand />
            {showFooterColumns()}
        </div>
    </footer>
    </>
  )
}

export default Footer