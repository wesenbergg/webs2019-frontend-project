import React from 'react'
import FrontPage from './frontpage/FrontPage'
import Feed from './feed/Feed'
import Search from './search/Search'
import SignUp from '../authentication/SignUp'
import SignIn from '../authentication/SignIn'
import About from "./about/About";
import Team from "./about/Team";
import SingleUser from './single/SingleUser'
import SinglePost from './single/singlePost'

const Content = ({pages, autPages, currentPage, setCurrentPage, showUsers, filter, setFilter, newUser, setNewUser, createUser, newName, setNewName, setMessage,
setSingleUser, singleUser, singlePost, setSinglePost}) => {
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
        <Feed setCurrentPage={setCurrentPage} setSinglePost={setSinglePost} />
      </>
    )
  }

  if(currentPage === pages[2]){
    return(
      <>
        <Search showUsers={showUsers} filter={filter} setFilter={setFilter} setCurrentPage={setCurrentPage} setSingleUser={setSingleUser} setSinglePost={setSinglePost}/>
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
        <SingleUser singleUser={singleUser}/>
      </>
    )
  }

  if(currentPage === 'Post Page'){
    return(
      <>
        <SinglePost singlePost={singlePost}/>
      </>
    )
  }
}

export default Content