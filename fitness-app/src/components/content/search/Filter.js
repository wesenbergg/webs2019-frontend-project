import React from 'react'

const Filter = ({showFilter, setFilter}) => {
  const handleChange = e => {
    //console.log(e.target.value)
    setFilter(e.target.value)
  }
  //const handleChange = () => showUsers.filter(u => u.firstName.toLowerCase().includes(showFilter.toLowerCase()) || u.lastName.toLowerCase().includes(showFilter.toLowerCase()))
  //<i>filter: </i><input value={showFilter} onChange={handleChange}/>

  return(
    <div className="input-group mb-3 filter-form">
      <input type="text" className="form-control" placeholder="for example... 'Severus Snape'" aria-label="Recipient's firstname and lastname" aria-describedby="button-addon2" value={showFilter} onChange={handleChange}/>
    </div>
  )
}

export default Filter