import React, { useState } from 'react'
import '../styles/App.css'
import Content from './content/Content'
import Navbar from './navigation/Navbar'
import Footer from './footer/Footer'

function App() {
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
    },
])

  return (
    <div className="App">
      <Navbar pages={pages} autPages={autPages} setCurrentPage={setCurrentPage}/>
      <Content pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Footer setCurrentPage={setCurrentPage} footerContent={footerContent}/>
    </div>
  );
}

export default App;
