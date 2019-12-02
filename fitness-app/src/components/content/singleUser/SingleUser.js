import React from 'react'

const SingleUser = ({singleUser}) => {

  return(
    <>
      <p>{singleUser.firstname} {singleUser.lastname}</p>
    </>
  )
}

export default SingleUser