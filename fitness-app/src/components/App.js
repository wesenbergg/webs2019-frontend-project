import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import Content from './content/Content'
import Navbar from './navigation/Navbar'
import Footer from './footer/Footer'
import Notification from './Notification.js'
import userService from '../services/userServices'

function App() {
  const pages = ['Front Page', 'Feed', 'Search', 'QA', 'About','Team']
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
      id: 28937192839
  })
  const[newName, setNewName] = useState('')

  useEffect(() => {
    userService
      .getAll()
      .then(initialUsers => {
        setUsers(initialUsers)
      })
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

  const update = (newObject) => {
    //console.log(newObject)
    userService
    .update(newObject.id, newObject)
    .then(returnedPerson => {
      setUsers(users.map(user => user.id !== newObject.id ? user : newObject))
      setMessage({
        type: 'success',
        message: `Succesfully updated ${newObject.firstname}.`
      })
      setTimeout(() => {
        setMessage({...message, type: "hidden"})
      }, 5000)
    }).catch(error => {
      setMessage({
        type: 'error',
        message: `Person '${newObject.name}' was already removed from server`
      })
      setTimeout(() => {
        setMessage({...message, type: "hidden"})
      }, 5000)
      setUsers(users.filter(p => p.id !== newObject.id))
    })
  }

  return (
    <div className="App">
      <Navbar pages={pages} autPages={autPages} setCurrentPage={setCurrentPage}/>
      <Notification message={message} />
      <Content pages={pages} autPages={autPages} currentPage={currentPage} setCurrentPage={setCurrentPage} showUsers={users}
       setShowUsers={setUsers} filter={filter} setFilter={setFilter} newUser={newUser} setNewUser={setNewUser} createUser={createUser} newName={newName} setNewName={setNewName}/>
      <Footer setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
