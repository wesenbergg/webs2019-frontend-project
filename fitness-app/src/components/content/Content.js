import React from 'react'
import FrontPage from './frontpage/FrontPage'
import Feed from './Feed'
import Search from './search/Search'
import SignUp from '../authentication/SignUp'
import SignIn from '../authentication/SignIn'
import About from "./about/About";

const Content = ({pages, autPages, currentPage, setCurrentPage, showUsers, setShowUsers, filter, setFilter}) => {
  if(currentPage === pages[0]){
    return(
      <>
        <FrontPage />
      </>
    )
  }

  if (currentPage === pages[1]) {
    return (
      <>
        <Feed />
      </>
    )
  }

  if(currentPage === pages[2]){
    return(
      <>
        <Search showUsers={showUsers} setShowUsers={setShowUsers} filter={filter} setFilter={setFilter}/>
      </>
    )
  }
  if(currentPage === pages[4]){
    return(
        <>
         <About/>
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