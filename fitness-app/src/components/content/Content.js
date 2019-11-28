import React from 'react'
import FrontPage from './frontpage/FrontPage'
import Search from './search/Search'

const Content = ({pages, currentPage, setCurrentPage}) => {
  if(currentPage === pages[0]){
    return(
      <>
        <FrontPage />
      </>
    )
  }

  if(currentPage === pages[1]){
    return(
      <>
        <Search />
      </>
    )
  }
}

export default Content