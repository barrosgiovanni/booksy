import React from 'react'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function SearchBar() {

  const [term, setTerm] = useState('');

  return (
    <div className='search-bar'>
      <form className='form-control'>
        <input type='text' id='term' name='term' placeholder='...' value=''></input>
        <button type='submit' className='btn-search' on><FaSearch /></button>
      </form>
     </div>
  )
}

export default SearchBar
