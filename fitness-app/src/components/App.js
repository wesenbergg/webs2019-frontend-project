import React, { useState } from 'react'
import '../styles/App.css'
import Content from './content/Content'
import Navbar from './navigation/Navbar'
import Footer from './footer/Footer'

function App() {
  const users = [
    {
      firstname: 'walter',
      lastname: 'ruoppa',
      username: 'wwaltsu',
      description: '...',
      email: 'wwaltsu@gmail.com',
      password: '*******',
      level: 'intermediate',
      region: 'Europe',
      profilepic: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=20'
    },
    {
      firstname: 'boriss',
      lastname: 'jerjomkin',
      username: 'wesenbergg',
      description: '...',
      email: 'wesenbergg@gmail.com',
      password: '*******',
      level: 'beginner',
      region: 'Africa',
      profilepic: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=20'
    },
    {
      firstname: 'elias',
      lastname: 'keranen',
      username: 'eliaske',
      description: '...',
      email: 'eliaske@gmail.com',
      password: '*******',
      level: 'advanced',
      region: 'Europe',
      profilepic: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=20'
    }
  ]
  const about = ['Contact', 'Team', 'Privacy', 'Terms']
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
  const[filter, setFilter] = useState('')
  const[showUsers, setShowUsers] = useState(users)
  const[pages, setPages] = useState(['Front Page', 'Search', 'QA', 'FAQ', 'Feed', 'News'])
  const[autPages, setAutPages] = useState(['Sign in', 'Sign up'])
  const[currentPage, setCurrentPage] = useState(pages[0])
  const[footerContent, setFooterContent] = useState([
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
])

  return (
    <div className="App">
      <Navbar pages={pages} autPages={autPages} setCurrentPage={setCurrentPage}/>
      <Content pages={pages} autPages={autPages} currentPage={currentPage} setCurrentPage={setCurrentPage} showUsers={showUsers} setShowUsers={setShowUsers} filter={filter} setFilter={setFilter} />
      <Footer setCurrentPage={setCurrentPage} footerContent={footerContent}/>
    </div>
  );
}

export default App;
