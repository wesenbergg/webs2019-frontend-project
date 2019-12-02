import React from 'react'
import FrontPage from './frontpage/FrontPage'
import Feed from './Feed'
import Search from './search/Search'
import SignUp from '../authentication/SignUp'
import SignIn from '../authentication/SignIn'
import About from "./about/About";
import Team from "./about/Team";
import SingleUser from './singleUser/SingleUser'

const Content = ({pages, autPages, currentPage, setCurrentPage, showUsers, setShowUsers, filter, setFilter, newUser, setNewUser, createUser, newName, setNewName, setMessage}) => {
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
        <Search showUsers={showUsers} filter={filter} setFilter={setFilter} setCurrentPage={setCurrentPage}/>
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
  if(currentPage === pages[5]){
    return(
        <>
          <Team/>
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
        <SignUp users={showUsers} newUser={newUser} setNewUser={setNewUser} createUser={createUser} newName={newName} setNewName={setNewName} setMessage={setMessage}/>
      </>
    )
  }

  if(currentPage === 'User Page'){
    return(
      <>
        <SingleUser />
      </>
    )
  }
}



export default Content