import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import Content from './content/Content'
import Navbar from './navigation/Navbar'
import Footer from './footer/Footer'
import Notification from './Notification.js'
import userService from '../services/userServices'
import postService from '../services/postServices'


function App() {
  const pages = ['Front Page', 'Feed', 'Search', 'QA', 'About','EditProfile','Form']
  const autPages = ['Sign in', 'Sign up']

  const[filter, setFilter] = useState('')
  const[users, setUsers] = useState([])
  const[currentPage, setCurrentPage] = useState(pages[0])
  const[message, setMessage] = useState({type: "hidden", message: ""})
  const[newUser, setNewUser] = useState({
      firstname: "",
      lastname: "",
      username: "",
      description: "This is default description",
      email: "",
      password: "",
      level: "beginner",
      region: "Europe",
      profilepic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=20",
      id: Math.floor(Math.random() * 9999999),
      //terms: false
  })
  const[singleUser, setSingleUser] = useState('')
  const[singlePost, setSinglePost] = useState('')
  const[credentials, setCredentials] = useState({username: '', password: ''})
  const[loggedUser, setLoggedUser] = useState({})
  const[posts, setPosts] = useState([])

  useEffect(() => {
		postService.getAll()
			.then(initialPosts => {
				initialPosts.reverse()
				setPosts(initialPosts)
			})
  }, [])
  
  useEffect(() => {
    userService
      .getAll()
      .then(initialUsers => {
        setUsers(initialUsers)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedFitnessAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setLoggedUser(user)
      postService.setToken(user.token)
    }
  }, [])

  const createUser = newObject => {
    userService
    .create(newObject)
    .then(returnedUser => {
      setUsers(users.concat(returnedUser))
        setMessage({
          type: 'success',
          message: `Succesfully added '${returnedUser.firstname}' to server`
        })
        setTimeout(() => {
          setMessage({...message, type: "hidden"})
        }, 5000)
    })
  }

  return (
    <div className="App">
      <Navbar pages={pages} autPages={autPages} setCurrentPage={setCurrentPage} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
      <Notification message={message} />
      <Content pages={pages} autPages={autPages} currentPage={currentPage} setCurrentPage={setCurrentPage} users={users}
       setUsers={setUsers} filter={filter} setFilter={setFilter} newUser={newUser} setNewUser={setNewUser} createUser={createUser}
       setMessage={setMessage} singleUser={singleUser} setSingleUser={setSingleUser} singlePost={singlePost} setSinglePost={setSinglePost} 
       credentials={credentials} setCredentials={setCredentials} loggedUser={loggedUser} setLoggedUser={setLoggedUser} 
       posts={posts} setPosts={setPosts}/>
      <Footer setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;