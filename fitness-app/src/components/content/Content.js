import React from 'react'
import FrontPage from './frontpage/FrontPage'
import Search from './search/Search'
import SignUp from '../authentication/SignUp'
import SignIn from '../authentication/SignIn'

const Content = ({pages, autPages, currentPage, setCurrentPage}) => {
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

  if(currentPage === autPages[0]){
    return(
      <>
        <SignIn />
      </>
    )
  }

  if(currentPage === autPages[1]){
    return(
      <>
        <SignUp />
      </>
    )
  }
}

export default Content