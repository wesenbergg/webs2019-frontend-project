import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import Content from './content/Content'
import Navbar from './navigation/Navbar'
import Footer from './footer/Footer'
import Notification from './Notification.js'
import userService from '../services/userServices'

function App() {
  const pages = ['Front Page', 'Feed', 'Search', 'QA', 'About']
  const autPages = ['Sign in', 'Sign up']
  const about = ['Contact', 'Team', 'Privacy', 'Terms', 'FAQ']
  const medias = [
    {
      logo: 'fab fa-twitter',
      name: 'Twitter',
      link: 'https://twitter.com'
    },
    {
      logo: 'fab fa-instagram',
      name: 'Instagram',
      link: 'https://Instagram.com'
    },
    {
      logo: 'fab fa-youtube',
      name: 'Youtube',
      link: 'https://Youtube.com'
    },
    {
      logo: 'fab fa-facebook-f',
      name: 'Facebook',
      link: 'https://Facebook.com'
    }]

  const footerContent = [
    {
        name: 'Features',
        content: pages
    },
    {
        name: 'In other medias',
        content: medias
    },
    {
        name: 'About',
        content: about
    }
  ]

  const[filter, setFilter] = useState('')
  const[users, setUsers] = useState([])
  const[currentPage, setCurrentPage] = useState(pages[0])
  const[message, setMessage] = useState(null)

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
          setMessage(null)
        }, 5000)
    })
  }

  return (
    <div className="App">
      <Navbar pages={pages} autPages={autPages} setCurrentPage={setCurrentPage}/>
      <Notification message={message} />
      <Content pages={pages} autPages={autPages} currentPage={currentPage} setCurrentPage={setCurrentPage} showUsers={users} setShowUsers={setUsers} filter={filter} setFilter={setFilter} />
      <Footer setCurrentPage={setCurrentPage} footerContent={footerContent}/>
    </div>
  );
}

export default App;
