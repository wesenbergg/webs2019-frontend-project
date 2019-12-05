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
import EditProfile from "../profile/EditProfile";
import Form from "../profile/Form";
import NewPostForm from '../utilities/NewPostForm'

const Content = ({pages, autPages, currentPage, setCurrentPage, users, setUsers, filter, setFilter, newUser, setNewUser, createUser, newName, setNewName, setMessage,
setSingleUser, singleUser, singlePost, setSinglePost, credentials, setCredentials, loggedUser, setLoggedUser, posts, setPosts}) => {
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

  if (currentPage === pages[2]) {
    return (
      <>
        <Search users={users} filter={filter} setFilter={setFilter} setCurrentPage={setCurrentPage} setSingleUser={setSingleUser} setSinglePost={setSinglePost}/>
      </>
    )
  }
  if (currentPage === pages[4]) {
    return (
      <>
        <About />
      </>
    )
  }


  if(currentPage === pages[5]){
        return(
            <>
                <EditProfile setCurrentPage={setCurrentPage}/>
            </>
        )
    }

    if(currentPage === pages[6]){
        return(
            <>
                <Form setCurrentPage={setCurrentPage} setLoggedUser={setLoggedUser} loggedUser={loggedUser} setUsers={setUsers} users={users}
                setMessage={setMessage}/>
            </>
        )
    }

    /*
    if(currentPage === 'Add Post'){
      return(
        <>
          <NewPostForm posts={posts} setPosts={setPosts}/>
        </>
      )
    }*/

  if (currentPage === autPages[0]) {
    return (
      <>
        <SignIn credentials={credentials} setCredentials={setCredentials} setMessage={setMessage} setCurrentPage={setCurrentPage}
          setLoggedUser={setLoggedUser} />
      </>
    )
  }

  if (currentPage === autPages[1]) {
    return (
      <>
        <SignUp users={users} newUser={newUser} setNewUser={setNewUser} createUser={createUser} newName={newName} setNewName={setNewName} 
        setMessage={setMessage} setCurrentPage={setCurrentPage}/>
      </>
    )
  }

  if (currentPage === 'User Page') {
    return (
      <>
        <SingleUser singleUser={singleUser} />
      </>
    )
  }

  if (currentPage === 'Post Page') {
    return (
      <>
        <SinglePost singlePost={singlePost} />
      </>
    )
  }

  if (currentPage === 'New Post') {
    return (
      <>
        <NewPostPage />
      </>
    )
  }
}

export default Content