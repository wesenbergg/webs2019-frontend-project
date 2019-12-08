import React from 'react'
import FrontPage from './frontpage/FrontPage'
import Feed from './feed/Feed'
import Search from './search/Search'
import SignUp from '../authentication/SignUp'
import SignIn from '../authentication/SignIn'
import About from "./about/About"
import Team from "./about/Team"
import SingleUser from './single/SingleUser'
import SinglePost from './single/singlePost'
import EditProfile from "../profile/EditProfile"
import Form from "../profile/Form"
import NewPostForm from '../utilities/NewPostForm'
import NewPostPage from '../content/single/NewPostPage'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Content = ({pages, autPages, currentPage, setCurrentPage, users, setUsers, filter, setFilter, newUser, setNewUser, createUser, newName, setNewName, setMessage,
setSingleUser, singleUser, singlePost, setSinglePost, credentials, setCredentials, loggedUser, setLoggedUser, posts, setPosts}) => {
  
  return(
    <>
    <Route exact path="/" render={() => <FrontPage />} />
    
    <Route exact path="/about" render={() => <About />} />

    <Route exact path="/signin" render={() => <SignIn credentials={credentials} setCredentials={setCredentials} setMessage={setMessage} setCurrentPage={setCurrentPage} setLoggedUser={setLoggedUser} />} />
    <Route exact path="/signup" render={() => <SignUp users={users} newUser={newUser} setNewUser={setNewUser} createUser={createUser} newName={newName} setNewName={setNewName} setMessage={setMessage} setCurrentPage={setCurrentPage}/>} />

    <Route exact path="/posts" render={() => <Feed posts={posts} setPosts={setPosts} setCurrentPage={setCurrentPage} setSinglePost={setSinglePost} />} />
    <Route exact path="/posts/new" render={() => <NewPostPage posts={posts} setPosts={setPosts} />} />
    <Route exact path="/posts/p/:id" render={() => <SinglePost singlePost={singlePost} />} />
    
    <Route exact path="/users" render={() => <Search users={users} filter={filter} setFilter={setFilter} setCurrentPage={setCurrentPage} setSingleUser={setSingleUser} setSinglePost={setSinglePost}/>} />
    <Route exact path="/users/u/:id" render={() => <SingleUser singleUser={singleUser} />} />
    <Route exact path="/users/profile" render={() => <EditProfile setCurrentPage={setCurrentPage} loggedUser={loggedUser}/>} />
    <Route exact path="/users/profile/edit" render={() => <Form setCurrentPage={setCurrentPage} setLoggedUser={setLoggedUser} loggedUser={loggedUser} setUsers={setUsers} users={users} setMessage={setMessage}/>} />
    </>
  )
}

export default Content






    /*
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
        <Feed posts={posts} setPosts={setPosts} setCurrentPage={setCurrentPage} setSinglePost={setSinglePost} />
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
  */