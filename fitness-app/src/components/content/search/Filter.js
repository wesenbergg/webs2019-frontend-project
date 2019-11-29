import React from 'react'

const Filter = ({showFilter, setFilter}) => {
  const handleChange = e => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }
  //const handleChange = () => showUsers.filter(u => u.firstName.toLowerCase().includes(showFilter.toLowerCase()) || u.lastName.toLowerCase().includes(showFilter.toLowerCase()))

  return(
    <div>
    <i>filter: </i><input value={showFilter} onChange={handleChange}/>
    </div>
  )
}

export default Filter