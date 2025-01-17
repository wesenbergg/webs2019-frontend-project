import React from 'react'
import FooterCol from './FooterCol'
import FooterBrand from './FooterBrand'

const Footer = ({setCurrentPage}) => {
  const pages = [
    {
      name: 'Front Page',
      link: '/'
    },
    {
      name: 'Feed',
      link: '/posts'
    },
    {
      name: 'Search',
      link: '/users'
    },
    {
      name: 'About',
      link: '/about'
    }
  ]
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

  const showFooterColumns = () => footerContent.map(e => <FooterCol key={Math.floor(Math.random() * 99999999)} colContent={e} setCurrentPage={setCurrentPage}/>)
  return(
    <>    
    <footer className="container-fluid bg-dark text-secondary py-5">
        <div className="row">
            <FooterBrand />
            {showFooterColumns()}
        </div>
    </footer>
    </>
  )
}

export default Footer