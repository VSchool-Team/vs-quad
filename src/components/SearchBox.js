import React from 'react'

const SearchBox = () => {

  const searchBox = {
    width: "150px",
    padding: "2px",
    backgroundColor: "lightgray",
    border: "none",
  }

  return (
    <div >
      <input style={searchBox} type="text"/>
    </div>
  )
}

export default SearchBox
