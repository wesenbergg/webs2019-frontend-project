import React from 'react'
import '../styles/notification.css'

const Notification = ({message}) => {

  return(
    <>
      <div className={message.type}><h3>{message.message}</h3></div>
    </>
  )
}

export default Notification